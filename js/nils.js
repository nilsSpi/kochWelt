let first_click = true;
let button = document.getElementsByClassName("nils-button");

function seperateNumberAndUnit(string) {
    let str = string;
    let matches = str.match(/(\d+)/);
    let number;
    let unit;
      
    if (matches) {
        number= matches[0];
        unit=string.slice(number.length);
                
    }
    else{ number=string;}
    return [number,unit];
}




function calc(){

if(first_click){



    
    let input=document.getElementById('input').value;
    const länge=document.getElementsByClassName('unit').length;
    for(let i=0;i<länge;i++){
let iter_eintrag=document.getElementById(i).innerHTML;
let seperated= seperateNumberAndUnit(iter_eintrag);
let rightNumber=seperated[0]*input*.25;
document.getElementById(i).innerHTML=`${rightNumber}${seperated[1]}`;
    }
first_click=false;
}
else{
   /* let input=document.getElementById('input').value;*/
    window.location.reload();
   /* document.getElementById('input').value=input;
    calc();*/
}

    
}