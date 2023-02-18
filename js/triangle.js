// step 1: add click event handler with the Calculate button
document.getElementById('btn-triangle').addEventListener('click', function () {

    // 1.  get the element by id
    // 2.  get the value from the element
    // 3. convert string value to a number
    const triangleField1 = document.getElementById('triangle-field1');
    const triangleField1String = triangleField1.value;
    const inputTriangleField1 = parseFloat(triangleField1String);
    triangleField1.value = '';

    // 1.  get the element by id
    // 2.  get the value from the element
    // 3. convert string value to a number
    const triangleField2 = document.getElementById('triangle-field2');
    const triangleField2String = triangleField2.value;
    const inputTriangleField2 = parseFloat(triangleField2String);
    triangleField2.value = '';
    // set the requirement
    if(isNaN(inputTriangleField1 && inputTriangleField2)){
        alert('Please type a number');
        return;
    }
    // set the requirement
    if( inputTriangleField1 && inputTriangleField2 !== 0){
        alert('Please type a valid number');
        return;
    }

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


    // calculate 2 input field 
    const totalInput = (inputTriangleField1 * inputTriangleField2 * .5).toFixed(1);
    (triangleField1 + triangleField2).value = totalInput;


    // set another field value
    const triangleElement = document.getElementById('triangle');
    const outputTriangleString = triangleElement.innerText;
    const outputTriangle = parseFloat(outputTriangleString);

    // calculate totalInput 
    const totalTriangleArea = totalInput + outputTriangle;
    // console.log(triangle);
    triangleElement.innerText = totalTriangleArea;
})

    // set change background color mouseover
    const bgColor = document.querySelector('header');
    document.getElementById('bg-color').addEventListener('mouseover', function () {

    let color = '#';
    color += Math.random().toString(16).slice(2, 8);
    bgColor.style.backgroundColor = color;
    console.log(color);

})