
const canvas = document.getElementById('fallingText');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = Array(256).join(1).split('');
let romanticWords = ["Te amo", "Eres especial", "Mi vida", "Linda", "Amor", "Contigo siempre", "Mi razón", "Hermosa", "Te pienso", "Única"];

function drawFallingText() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff69b4'; // color rosa romántico
    ctx.font = '16pt monospace';

    letters.forEach((y, index) => {
        const text = '♥';
        const x = index * 10;
        ctx.fillText(text, x, y);
        letters[index] = y > 758 + Math.random() * 1e4 ? 0 : y + 10;
    });
}

function explodeWords(x, y) {
    romanticWords.forEach((word, i) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = word;
            span.style.position = 'absolute';
            span.style.left = `${x}px`;
            span.style.top = `${y}px`;
            span.style.color = '#ff1493';
            span.style.fontSize = '20px';
            span.style.opacity = 1;
            span.style.transition = 'all 1s ease-out';
            document.body.appendChild(span);

            setTimeout(() => {
                span.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
                span.style.opacity = 0;
            }, 100);

            setTimeout(() => {
                document.body.removeChild(span);
            }, 2000);
        }, i * 100);
    });
}

document.addEventListener('click', (e) => {
    explodeWords(e.clientX, e.clientY);
});

setInterval(drawFallingText, 50);
