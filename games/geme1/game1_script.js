window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    function drawbar(position, length) {
        ctx.fillStyle = "#00ffcc";
        ctx.beginPath();

        if (length >= 40) {
            ctx.moveTo(position, 400);
            ctx.lineTo(position, 480);
            ctx.lineTo(position + length, 480);
            ctx.lineTo(position + length, 440);
            ctx.lineTo(position + 40, 440);
        }

        if (length < 40) {
            ctx.moveTo(position, 400);
            ctx.lineTo(position, 480);
            ctx.lineTo(position + length, 480);
            ctx.lineTo(position + length, 400 + length);
        }

        ctx.closePath();
        ctx.fill();
    }

    drawbar(100, 60)
});