function appendToDisplay(textToAppend)
{
    calculator.display.value += textToAppend;
}

function performCalculation()
{
    calculator.display.value = eval(calculator.display.value);
}