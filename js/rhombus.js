    // step 1: add click event handler with the Calculate button
    document.getElementById('btn-rhombus').addEventListener('click', function () {

    // 1.  get the element by id
    // 2.  get the value from the element
    // 3. convert string value to a number
    const rhombusField1 = document.getElementById('rhombus-d1');
    const rhombusField1String = rhombusField1.innerText;
    const inputRhombusField1 = parseFloat(rhombusField1String);

    const rhombusField2 = document.getElementById('rhombus-d2');
    const rhombusField2String = rhombusField2.innerText;
    const inputRhombusField2 = parseFloat(rhombusField2String);

    // calculate 2 input field 
    const totalInput = (inputRhombusField1 * inputRhombusField2 * .5).toFixed(1);
    (rhombusField1 + rhombusField2).innerText = totalInput;

    // set another field value
    const rhombusElement = document.getElementById('rhombus');
    const outputRhombusString = rhombusElement.innerText;
    const outputRhombus = parseFloat(outputRhombusString);
    
    // calculate totalInput 
    const totalRhombusArea = totalInput + outputRhombus;
    rhombusElement.innerText = totalRhombusArea;
})