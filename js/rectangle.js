document.getElementById('btn-rectangle').addEventListener('click', function () {

    const rectangleField1 = document.getElementById('rectangle-field1');
    const rectangleField1String = rectangleField1.value;
    const inputRectangleField1 = parseFloat(rectangleField1String);
    rectangleField1.value = '';

    const rectangleField2 = document.getElementById('rectangle-field2');
    const rectangleField2String = rectangleField2.value;
    const inputRectangleField2 = parseFloat(rectangleField2String);
    rectangleField2.value = '';

    const totalInput = inputRectangleField1 * inputRectangleField2;
    (triangleField1 + triangleField2).value = totalInput;

    const triangleElement = document.getElementById('triangle');
    const outputTriangleString = triangleElement.innerText;
    const outputTriangle = parseFloat(outputTriangleString);
    
    const newTriangle = totalInput + outputTriangle;
    // console.log(triangle);
    triangleElement.innerText = newTriangle;
    // console.log(totalInput);
})