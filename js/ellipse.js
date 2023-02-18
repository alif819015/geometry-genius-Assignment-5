    // step 1: add click event handler with the Calculate button
    document.getElementById('btn-ellipse').addEventListener('click', function () {

        // 1.  get the element by id
        // 2.  get the value from the element
        // 3. convert string value to a number
    const ellipseField1 = document.getElementById('ellipse-a');
    const ellipseField1String = ellipseField1.innerText;
    const inputEllipseField1 = parseFloat(ellipseField1String);

    const ellipseField2 = document.getElementById('ellipse-b');
    const ellipseField2String = ellipseField2.innerText;
    const inputEllipseField2 = parseFloat(ellipseField2String);

    // calculate 2 input field and fixed last two deist
    const totalInput = (inputEllipseField1 * inputEllipseField2 * 3.14).toFixed(1);
    (ellipseField1 + ellipseField2).innerText = totalInput;

    // set another field value
    const ellipseElement = document.getElementById('ellipse');
    const outputEllipseString = ellipseElement.innerText;
    const outputEllipse = parseFloat(outputEllipseString);
    
    // calculate totalInput 
    const totalEllipseArea = totalInput + outputEllipse;
    
    ellipseElement.innerText = totalEllipseArea;
})