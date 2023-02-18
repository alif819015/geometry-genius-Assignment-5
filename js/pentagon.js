    // step 1: add click event handler with the Calculate button
    document.getElementById('btn-pentagon').addEventListener('click', function () {

    // 1.  get the element by id
    // 2.  get the value from the element
    // 3. convert string value to a number
    const pentagonField1 = document.getElementById('pentagon-p');
    const pentagonField1String = pentagonField1.innerText;
    const inputPentagonField1 = parseFloat(pentagonField1String);

    const pentagonField2 = document.getElementById('pentagon-b');
    const pentagonField2String = pentagonField2.innerText;
    const inputPentagonField2 = parseFloat(pentagonField2String);

    // calculate 2 input field and fixed last two deist
    const totalInput = (inputPentagonField1 * inputPentagonField2 * .5).toFixed(1);
    (pentagonField1 + pentagonField2).innerText = totalInput;

    // set another field value
    const pentagonElement = document.getElementById('pentagon');
    const outputPentagonString = pentagonElement.innerText;
    const outputPentagon = parseFloat(outputPentagonString);
    
    // calculate totalInput 
    const totalPentagonArea = totalInput + outputPentagon;
    pentagonElement.innerText = totalPentagonArea;
})