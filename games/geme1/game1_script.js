window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    function drawbar(position, length) {
        ctx.fillStyle = "#00ffcc";
        ctx.beginPath();

        if (length >= 40) {
            ctx.moveTo(position, 200);
            ctx.lineTo(position, 280);
            ctx.lineTo(position + length - 5, 280);
            ctx.lineTo(position + length - 5, 240);
            ctx.lineTo(position + 40, 240);
        }

        if (length < 40) {
            ctx.moveTo(position, 200);
            ctx.lineTo(position, 280);
            ctx.lineTo(position + length, 280);
            ctx.lineTo(position + length, 200 + length);
        }

        ctx.closePath();
        ctx.fill();
    }

    drawbar(0, 160);
    drawbar(160, 160);
    drawbar(320, 160);
    drawbar(480, 160);
    drawbar(640, 160);
    drawbar(800, 160);

});