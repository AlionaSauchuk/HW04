var newElement = document.createElement("p");
var name =  prompt("Please enter your name", "Harry Potter")


var myRe = /[0-9]/;
var isContainNumber = myRe.test(name);
if(isContainNumber === true){
    var tempArr = name.split("");

    for(var i=0; i< tempArr.length; i+=2){
        tempArr[i] = tempArr[i].toString().toUpperCase();
    }

    for(var i=1; i< tempArr.length; i+=2){
        tempArr[i] = tempArr[i].toString().toLowerCase();
    }

    name = tempArr.join('');
}
else{
    name = name.split("").reverse().join("");
}

newElement.innerHTML = name;


document.getElementById("userName").appendChild(newElement);



function goToPage(){
    var newUrl = "index2.html";
    window.location.replace(newUrl);
}