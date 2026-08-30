window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    function drawbar(position, beat) {
        length = beat * 48
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

    drawbar(0, 1);
    drawbar(48, 1);
    drawbar(96, 1);
    drawbar(576, 4);
    drawbar(768, 4);

});