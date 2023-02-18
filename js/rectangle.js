// step 1: add click event handler with the Calculate button
    document.getElementById('btn-rectangle').addEventListener('click', function () {

    // 1.  get the element by id
    // 2.  get the value from the element
    // 3. convert string value to a number
    const rectangleField1 = document.getElementById('rectangle-field1');
    const rectangleField1String = rectangleField1.value;
    const inputRectangleField1 = parseFloat(rectangleField1String);
    rectangleField1.value = '';

    const rectangleField2 = document.getElementById('rectangle-field2');
    const rectangleField2String = rectangleField2.value;
    const inputRectangleField2 = parseFloat(rectangleField2String);
    rectangleField2.value = '';

    // set the requirement
    if(isNaN(inputRectangleField1 && inputRectangleField2)){
        alert('Please type a number');
        return;
    }

    // set the requirement
    if( inputRectangleField1 && inputRectangleField2 !== 0){
        alert('Please type a valid number');
        return;
    }

    // calculate 2 input field 
    const totalInput = inputRectangleField1 * inputRectangleField2;
    (rectangleField1 + rectangleField2).value = totalInput;

    // set another field value
    const rectangleElement = document.getElementById('rectangle');
    const outputRectangleString = rectangleElement.innerText;
    const outputRectangle = parseFloat(outputRectangleString);
    
    // calculate totalInput 
    const totalRectangleElement = totalInput + outputRectangle;
    rectangleElement.innerText = totalRectangleElement;
    
})