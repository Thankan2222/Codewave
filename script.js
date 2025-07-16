const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            display.value = ''; // Clear the display
        } else if (value === '=') {
            try {
                display.value = eval(display.value); // Evaluate the expression
            } catch (error) {
                display.value = 'Error'; // Display error message
            }
        } else {
            display.value += value; // Append the value to the display
        }
    });
});