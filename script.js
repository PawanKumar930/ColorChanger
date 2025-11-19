function change(color) {
    // Remove border-black from all .border-2 elements
    const items = document.getElementsByClassName("border-2");
    for (let item of items) {
        item.classList.remove("border-black");
    }

    // Change background & add border-black to the selected color element
    document.body.style.background = color;
    document.getElementById(color).classList.add("border-black");
}


// function calculate(operation){
//    const v1=parseFloat(document.getElementById("input1").value);
//    const v2=parseFloat(document.getElementById("input2").value);
//    const resultElement=document.getElementById("result");
//    if(isNaN(v1)||isNaN(v2)){
//       resultElement.textContent="Please enter valid numbers!";
//       return;
//    }
//    let result;
//    switch(operation){
//       case "add": result=v1+v2;
//       case "sub": result=v1-v2;
//       case "mul": result=v1*v2;
//       case "divi":result=v1/v2;
//       default:return;
//    }
//    resultElement.textContent=`Result: ${result}`;
//    console.log(v1);
//    console.log(v2);
//    console.log(result);
// }
