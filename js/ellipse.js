document.getElementById('btn-ellipse').addEventListener('click', function () {

    const ellipseField1 = document.getElementById('ellipse-a');
    const ellipseField1String = ellipseField1.innerText;
    const inputEllipseField1 = parseFloat(ellipseField1String);

    const ellipseField2 = document.getElementById('ellipse-b');
    const ellipseField2String = ellipseField2.innerText;
    const inputEllipseField2 = parseFloat(ellipseField2String);

    const totalInput = (inputEllipseField1 * inputEllipseField2 * 3.14).toFixed(1);
    (ellipseField1 + ellipseField2).innerText = totalInput;

    const ellipseElement = document.getElementById('ellipse');
    const outputEllipseString = ellipseElement.innerText;
    const outputEllipse = parseFloat(outputEllipseString);
    
    const totalEllipseArea = totalInput + outputEllipse;
    
    ellipseElement.innerText = totalEllipseArea;
})