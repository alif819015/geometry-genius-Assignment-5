document.getElementById('btn-parallelogram').addEventListener('click', function(){

        const baseField = document.getElementById('parallelogram-Base');
        const baseField1String = baseField.innerText;
        const inputBaseField1 = parseFloat(baseField1String);
    
        const baseField2 = document.getElementById('parallelogram-Height');
        const baseField2String = baseField2.innerText;
        const inputBaseField2 = parseFloat(baseField2String);
    
        const totalInput = inputBaseField1 * inputBaseField2;
        (baseField + baseField2).innerText = totalInput;
    
        const baseElement = document.getElementById('parallelogram');
        const outputBaseString = baseElement.innerText;
        const outputBase = parseFloat(outputBaseString);
        
        const totalParallelogramElement = totalInput + outputBase;
        
        baseElement.innerText = totalParallelogramElement;
        


})


