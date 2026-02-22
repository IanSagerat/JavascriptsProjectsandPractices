const testButton = document.querySelector('.js-button');

const result = testButton.classList.contains('js-button')

console.log(result);

const buttons = document.querySelectorAll('.buttonToggle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});