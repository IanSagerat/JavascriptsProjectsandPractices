const add = () => {
    console.log(2+3);
}

add();
add();

const runTwice = (fun) => {
fun();
fun();
}

runTwice(() => {
    console.log('12b');
});

runTwice(add);

const button = document.querySelector('.js-button');
const text = document.querySelector('.text');
const spinner = document.querySelector('.spinner');

button.addEventListener('click', () => {
    button.disabled = true;
    text.innerHTML = 'Loading...';
    spinner.classList.remove('hidden');

    setTimeout(() => {
        text.innerHTML = 'Finished';
        spinner.classList.add('hidden');

        button.disabled = false;
    }, 1000)
});

//12e and 12f

const addButton = document.querySelector('.add-button');
const displayAdd = document.querySelector('.display-add');

let timeoutId;
let refresh = false;

addButton.addEventListener('click', () => {
    (!refresh) ?
    (displayAdd.innerHTML = 'Added',
    clearTimeout(timeoutId),
    refresh = true)
    : (timeoutId = setTimeout(() => {
        displayAdd.innerHTML = '';
        }, 2000),
        refresh = false)
});

//12g, 12h and 12i
let message = 0;
const originalTitle = document.title;
let isOriginal = true;

setInterval(() => {
    (message == 0) ?
        document.title = originalTitle
        : (isOriginal) ?
            (message === 1) ?
                document.title = `(${message}) New message` :
                document.title = `(${message}) New messages`
            : document.title = originalTitle;
    isOriginal = !isOriginal;
}, 2000);

const addMessage = document.querySelector('.add-message');
const removeMessage = document.querySelector('.remove-message');

addMessage.addEventListener('click', () => {
    message++;
});

removeMessage.addEventListener('click', () => {
    if(message > 0)
        message--;
});

