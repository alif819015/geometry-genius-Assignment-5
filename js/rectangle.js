document.getElementById('btn-rectangle').addEventListener('click', function () {

    const rectangleField1 = document.getElementById('rectangle-field1');
    const rectangleField1String = rectangleField1.value;
    const inputRectangleField1 = parseFloat(rectangleField1String);
    rectangleField1.value = '';

    const rectangleField2 = document.getElementById('rectangle-field2');
    const rectangleField2String = rectangleField2.value;
    const inputRectangleField2 = parseFloat(rectangleField2String);
    rectangleField2.value = '';

    if(isNaN(inputRectangleField1 && inputRectangleField2)){
        alert('Please type a number');
        return;
    }

    if( inputRectangleField1 && inputRectangleField2 !== 0){
        alert('Please type a valid number');
        return;
    }

    const totalInput = inputRectangleField1 * inputRectangleField2;
    (rectangleField1 + rectangleField2).value = totalInput;

    const rectangleElement = document.getElementById('rectangle');
    const outputRectangleString = rectangleElement.innerText;
    const outputRectangle = parseFloat(outputRectangleString);
    
    const totalRectangleElement = totalInput + outputRectangle;
    
    rectangleElement.innerText = totalRectangleElement;
    
})