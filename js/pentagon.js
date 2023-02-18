document.getElementById('btn-pentagon').addEventListener('click', function () {

    const pentagonField1 = document.getElementById('pentagon-p');
    const pentagonField1String = pentagonField1.innerText;
    const inputPentagonField1 = parseFloat(pentagonField1String);

    const pentagonField2 = document.getElementById('pentagon-b');
    const pentagonField2String = pentagonField2.innerText;
    const inputPentagonField2 = parseFloat(pentagonField2String);

    const totalInput = inputPentagonField1 * inputPentagonField2 * .5;
    (pentagonField1 + pentagonField2).innerText = totalInput;

    const pentagonElement = document.getElementById('pentagon');
    const outputPentagonString = pentagonElement.innerText;
    const outputPentagon = parseFloat(outputPentagonString);
    
    const totalPentagonArea = totalInput + outputPentagon;
    
    pentagonElement.innerText = totalPentagonArea;
})