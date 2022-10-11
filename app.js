const getButton = document.querySelector('.calculate-button');

getButton.addEventListener('click', () => {
    let getResult = document.querySelector('.result');
    let distance = document.querySelector('#distance').value;
    let frequency = document.querySelector('#frequency').value;
    let transmitter = document.querySelector('#transmitter').value;
    let receiver = document.querySelector('#receiver').value;

    let result = ((20 * Math.log10(distance)) + (20 * Math.log10(frequency)) + (32.4) - (transmitter) - (receiver)).toFixed(1);

    getResult.innerHTML = ` ${result} dB`;

});