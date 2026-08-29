const button = document.getElementById('start');
const text = document.getElementById('myText');

button.addEventListener('click', function () {
    text.textContent = 'テキスト';
});