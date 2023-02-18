document.getElementById('btn-triangle').addEventListener('click', function () {

    const triangleField1 = document.getElementById('triangle-field1');
    const triangleField1String = triangleField1.value;
    const inputTriangleField1 = parseFloat(triangleField1String);
    triangleField1.value = '';


    const triangleField2 = document.getElementById('triangle-field2');
    const triangleField2String = triangleField2.value;
    const inputTriangleField2 = parseFloat(triangleField2String);
    triangleField2.value = '';
    

    // const valueTriangleA = document.getElementById('triangle-b');
    // const firstValueTriangleString = valueTriangleA.innerText;
    // const firstTriangle = parseFloat(firstValueTriangleString);
    // const b = firstTriangle + inputTriangleField1;
    // valueTriangleA.innerText = b;
    // // console.log(typeof b);

    // const valueTriangleB = document.getElementById('triangle-h');
    // const secondValueTriangleString = valueTriangleB.innerText;
    // const secondTriangle = parseFloat(secondValueTriangleString);
    // const h = secondTriangle + inputTriangleField2;
    // valueTriangleB.innerText = h;
    // // console.log(typeof h);

    const totalInput = (inputTriangleField1 * inputTriangleField2 * .5).toFixed(1);
    (triangleField1 + triangleField2).value = totalInput;



    const triangleElement = document.getElementById('triangle');
    const outputTriangleString = triangleElement.innerText;
    const outputTriangle = parseFloat(outputTriangleString);

    const totalTriangleArea = totalInput + outputTriangle;
    // console.log(triangle);
    triangleElement.innerText = totalTriangleArea;
})