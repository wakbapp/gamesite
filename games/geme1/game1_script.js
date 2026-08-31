window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

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

    function drawbar(position, beat) {
        const length = beat * 48
        ctx.fillStyle = "#00ffcc";
        ctx.beginPath();

        if (length > 48) {
            ctx.moveTo(position, 200);
            ctx.lineTo(position, 288);
            ctx.lineTo(position + length - 4, 288);
            ctx.lineTo(position + length - 4, 244);
            ctx.lineTo(position + 44, 244);
        }

        if (length <= 48) {
            ctx.moveTo(position, 200);
            ctx.lineTo(position, 288);
            ctx.lineTo(position + length - 4, 288);
            ctx.lineTo(position + length - 4, 196 + length);
        }

        ctx.closePath();
        ctx.fill();
    }

    function compose() {
        for (let parts = 0; parts < 16; parts++) {
            const addpart = part[Math.floor(Math.random() * part.length)];
            for (let i = 0; i < addpart.length; i++) {
                music.push(addpart[i]);
            }
        }
        console.log(music);
    }

    compose();



    let count = 0;

    drawbar(0, music[0][1]);

    for (let note = 1; note < music.length; note++) {
        count += music[note - 1][1]
        music[note][0] = count
        drawbar(count * 48, music[note][1]);
    }

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(48, 0);
    ctx.lineTo(48, 360);
    ctx.stroke();


});