      // step 1: add click event handler with the Calculate button  
        document.getElementById('btn-parallelogram').addEventListener('click', function(){
        // 1.  get the element by id
        // 2.  get the value from the element
        // 3. convert string value to a number
        const baseField = document.getElementById('parallelogram-Base');
        const baseField1String = baseField.innerText;
        const inputBaseField1 = parseFloat(baseField1String);
    
        // 1.  get the element by id
        // 2.  get the value from the element
        // 3. convert string value to a number
        const baseField2 = document.getElementById('parallelogram-Height');
        const baseField2String = baseField2.innerText;
        const inputBaseField2 = parseFloat(baseField2String);
    
        // calculate 2 input field
        const totalInput = inputBaseField1 * inputBaseField2;
        (baseField + baseField2).innerText = totalInput;
    
        // set another field value
        const baseElement = document.getElementById('parallelogram');
        const outputBaseString = baseElement.innerText;
        const outputBase = parseFloat(outputBaseString);
        
        // calculate totalInput 
        const totalParallelogramElement = totalInput + outputBase;
        baseElement.innerText = totalParallelogramElement;
        


})


