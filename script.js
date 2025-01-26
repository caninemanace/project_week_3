function akinnamegenerator(){
event.preventDefault();

let DD=parseInt(document.getElementById("DAY").value);
let MM=parseInt(document.getElementById("MONTH").value);
let YEAR=parseInt(document.getElementById("YEAR").value);
let malesName= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleName= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let CC=Math.floor(YEAR/100);
let YY=Math.ceil(YEAR%100);

let day = Math.ceil( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7

if(gender==="male"){
 console.log(malesName[day])
}else{
    console.log(femaleName[day])
}


}










