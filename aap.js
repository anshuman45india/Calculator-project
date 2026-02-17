const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnText = button.innerText.trim();

        if (btnText === '=') {
            try {
                string = String(eval(string));
            } catch (err) {
                string = 'Error';
            }
            inputBox.value = string;
        } else if (btnText === 'AC') {
            string = '';
            inputBox.value = string;
        } else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else if (btnText === 'plusminus') {
            try {
                string = String(-eval(string));
            } catch (err) {
                string = 'Error';
            }
            inputBox.value = string;
        } else {
            string += btnText;
            inputBox.value = string;
        }
    });
});