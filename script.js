function change(color){
    
    switch(color){
  case "red": document.body.style.background="red";document.getElementById("red").classList.add("border-black");break;
  case "blue": document.body.style.background="blue";document.getElementById("blue").classList.add("border-black");break;
  case "green":document.body.style.background="green";document.getElementById("green").classList.add("border-black");break;
  case "orange":document.body.style.background="orange";document.getElementById("orange").classList.add("border-black");break;
  case "yellow":document.body.style.background="yellow";document.getElementById("yellow").classList.add("border-black");break;
  case "white":document.body.style.background="white";document.getElementById("white").classList.add("border-black");break;
  case "pink":document.body.style.background="pink";document.getElementById("pink").classList.add("border-black");break;
  
           
    }
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