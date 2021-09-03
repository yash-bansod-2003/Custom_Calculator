let screen = document.getElementById('screen');
let display = document.getElementById('display');
let screeValue = "";
let buttons = document.querySelectorAll('button');
for (items of buttons) {
    items.addEventListener('click', (e) => {
        // capture a text 
        let buttonText = e.target.innerText;
        // console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screeValue += buttonText;
            screen.value = screeValue;
            // display.innerText = screeValue;
        } else if (buttonText == 'C') {
            screeValue = "";
            screen.value = screeValue;
            display.innerText = "";
        } else if (buttonText == '=') {
            // screen.value = eval(screeValue);
            display.innerText = `Total = ${eval(screeValue)}`;
        } else {
            screeValue += buttonText;
            screen.value = screeValue;
            // display.innerText = screeValue;
        }
    })
}