document.getElementById('btn-rhombus').addEventListener('click', function () {

    const rhombusField1 = document.getElementById('rhombus-d1');
    const rhombusField1String = rhombusField1.innerText;
    const inputRhombusField1 = parseFloat(rhombusField1String);

    const rhombusField2 = document.getElementById('rhombus-d2');
    const rhombusField2String = rhombusField2.innerText;
    const inputRhombusField2 = parseFloat(rhombusField2String);

    const totalInput = (inputRhombusField1 * inputRhombusField2 * .5).toFixed(1);
    (rhombusField1 + rhombusField2).innerText = totalInput;

    const rhombusElement = document.getElementById('rhombus');
    const outputRhombusString = rhombusElement.innerText;
    const outputRhombus = parseFloat(outputRhombusString);
    
    const totalRhombusArea = totalInput + outputRhombus;
    
    rhombusElement.innerText = totalRhombusArea;
})