
let dis=document.getElementById('inputBox');
// console.log(dis);
let buttons=document.querySelectorAll('button');
 console.log(buttons);
 let buttonsArray=Array.from(buttons); 
 let string=' ';
 buttonsArray.forEach((num)=>{
    num.addEventListener("click",(event)=>{
      if(event.target.innerHTML=="AC"){
        string='';
        dis.value=string;
      }
      else if(event.target.innerHTML == "DEL"){
        string=string.substring(0,string.length-1);
        dis.value=string;
      }
      // if(event.target.innerHTML>="1" && event.target.innerHTML<="9"){
      //   
      // }
      else if(event.target.innerHTML == "="){
        string=eval(string);
        if(isNaN(string)){
          string="Math Error";
        }
        dis.value=string;
      }
      
      else{
        string+=event.target.innerHTML;
        dis.value=string;
      }
      
      
      console.log(event.target.innerHTML
      );
     
    })
 
 }); 


