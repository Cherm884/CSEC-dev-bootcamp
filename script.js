let statusText = document.getElementById('status');
let button = document.getElementById('myButton');


button.addEventListener('click', () => {
    if (statusText.textContent === 'ON') {
        statusText.textContent = 'OFF';
    } else {
        statusText.textContent = 'ON';
    }
})