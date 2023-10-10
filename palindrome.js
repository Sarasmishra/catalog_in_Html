

let name = "saras";

let bag ="";
for(let i=name.length-1;i>=0;i--){
    bag+=name[i];
}
if(name==bag){
    console.log("palindrome")
}
else{
    console.log("Not a Palindrome")
}

