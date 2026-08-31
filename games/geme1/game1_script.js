window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    canvas.addEventListener('pointerdown', (event) => {
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        if (clickX >= 100 && clickX <= 200 && clickY >= 100 && clickY <= 200) {
            speed *= 2;
        }
    });

    const part = [
        [1],
        [0.5, 0.5],
        [0.5, 0.25, 0.25],
        [0.25, 0.5, 0.25],
        [0.25, 0.25, 0.5],
        [0.75, 0.25],
        [0.25, 0.75],
        [0.25, 0.25, 0.25, 0.25],
        [1 / 3, 1 / 3, 1 / 3]
    ];

    const music = [];

    let speed = 0.015;
    let nowbeat = -3;

    function drawbar(position, beat) {
        const length = beat * 192
        ctx.fillStyle = "#00ffcc";
        ctx.beginPath();

        if (length > 48) {
            ctx.moveTo(position, 200);
            ctx.lineTo(position, 288);
            ctx.lineTo(position + length - 8, 288);
            ctx.lineTo(position + length - 8, 244);
            ctx.lineTo(position + 44, 244);
        }

        if (length <= 48) {
            ctx.moveTo(position, 200);
            ctx.lineTo(position, 288);
            ctx.lineTo(position + length - 8, 288);
            ctx.lineTo(position + length - 8, 192 + length);
        }

        ctx.closePath();
        ctx.fill();
    }

    function drawline(position, width) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(position, 0);
        ctx.lineTo(position, 360);
        ctx.stroke();
    }

    function compose(beats) {
        for (let parts = 0; parts < beats; parts++) {
            const addpart = part[Math.floor(Math.random() * part.length)];
            for (let i = 0; i < addpart.length; i++) {
                music.push(addpart[i]);
            }
        }

        for (let note = 1; note < music.length; note++) {
            music[note] += music[note - 1]
        }
    }

    function drawtext() {
        ctx.font = "20px 'Arial";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`Score: ${speed}`, 50, 50);
    }

    function drawbutton() {

    }

    function drawall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let left = 0;
        if (nowbeat <= 2.5) {
            left = 480 - nowbeat * 192;
        }
        if (nowbeat >= 2.5) {
            left = 192 - Math.abs(480 - nowbeat * 192) % 192;
        }
        for (let i = 0; i < 5; i++) {
            drawline(left + 192 * i, 2.);
        }
        drawbar(- nowbeat * 192 + 480, music[0]);
        for (let note = 1; note < music.length; note++) {
            drawbar((music[note - 1] - nowbeat) * 192 + 480, music[note] - music[note - 1]);
        }
        drawline(480, 4);
    }

    function main() {
        if (nowbeat > 20) {
            speed = 0.02;
        }
        if (nowbeat > 40) {
            speed = 0.025;
        }
        if (nowbeat > 60) {
            speed = 0.028;
        }
        if (nowbeat > 80) {
            speed = 0.03;
        }
        if (nowbeat > 100) {
            speed = 0.032;
        }
        console.log(nowbeat);
        nowbeat += speed;
        drawall();
        drawtext();
        requestAnimationFrame(main);
    }

    compose(200);
    requestAnimationFrame(main);

});