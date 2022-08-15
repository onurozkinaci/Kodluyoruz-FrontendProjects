let formDOM = document.querySelector("#toDoForm");
formDOM.addEventListener('submit',submitCheck);

//Defined in order to add the to do inputs to local storage;
let toDoArray = Array();

loadFromStorage();//To load the stored items from local storage
//on the screen when the web page is loaded.

//Defined in order to get the to do inputs from local storage
//and adding them to the defined array to use it on list item
//addition below;
function fillTheList(array) {
    array = JSON.parse(localStorage.getItem('toDoList'));
}

function loadFromStorage (){
    if(JSON.parse(localStorage.getItem('toDoList')).length>0){
       toDoArray = JSON.parse(localStorage.getItem('toDoList'));
       console.log(toDoArray);
       toDoArray.forEach(function(item) {
            let divDOM = document.createElement("div");
            divDOM.classList.add("li-div","pt-2","d-flex","border-bottom","border-dark");
            divDOM.addEventListener('click',checkDoneItem); //To make background blue and the text underline after click transaction
            let liDOM = document.createElement("li");
            liDOM.innerText = item;
            let buttonElement = document.createElement("button");
            buttonElement.innerText = "X";
            buttonElement.classList.add("ml-auto","pl-2","btn-item");
            buttonElement.addEventListener('click',deleteFromList);
            divDOM.appendChild(liDOM);
            divDOM.appendChild(buttonElement);
            addToList(divDOM);
       });
    }
}

//To check the suitability of adding an input to the list;
function submitCheck(event) {
   event.preventDefault();
   let toDoDOM = document.querySelector("#todo");  
   if(toDoDOM.value.trim()){ //trim bosluk girilmesini onlemek icin verildi,soldam ve sagdan silmek icin boslugu
      fillTheList(toDoArray); //array will be filled by taken infos from localStorage.
      toDoArray.push(toDoDOM.value); //new value is added to the array to be added to localStorage below.
      localStorage.setItem('toDoList',JSON.stringify(toDoArray));
      let divDOM = document.createElement("div");
      divDOM.classList.add("li-div","pt-2","d-flex","border-bottom","border-dark");
      divDOM.addEventListener('click',checkDoneItem); //To make background blue and the text underline after click transaction
      let liDOM = document.createElement("li");
      liDOM.innerText = toDoDOM.value;
      let buttonElement = document.createElement("button");
      buttonElement.innerText = "X";
      buttonElement.classList.add("ml-auto","pl-2","btn-item");
      buttonElement.addEventListener('click',deleteFromList);
      divDOM.appendChild(liDOM);
      divDOM.appendChild(buttonElement);
      addToList(divDOM);
      $('.success').toast('show'); //basariyla eklendigini belirten toast message
   } else{
       //errorDOM.innerHTML = errorMessage;
       //alert("Ne yapacaginizi belirtiniz!");
       $('.error').toast('show'); //ekleme yapilamadigini belirten toast message
   }
}

function addToList (divItem){
   let ulDOM = document.querySelector("#toDoList"); 
   ulDOM.appendChild(divItem);
}

function deleteFromList (event){
    const deletedItem = event.target.parentElement;
    const liItem = event.target.previousSibling;
    /*let ulDOM = document.querySelector("#toDoList"); 
    ulDOM.removeChild(deletedItem);*/
    deletedItem.remove(); //=>ustteki de calisir.
    //Removing the item from localStorage by reaching it on
    //the defined array;
    fillTheList(toDoArray);
    toDoArray.splice(toDoArray.indexOf(`${liItem.innerText}`),1);
    localStorage.setItem('toDoList',JSON.stringify(toDoArray));
}

//Su anda secilen alanin div veya li olmasina gore kosul araciligiyla ayirt edip
//li ise parent'i olan div'in background'unu degisecek sekilde, div ise direkt div'in
//background'unu degisecek sekilde islem yapiliyor;
function checkDoneItem(event) {
   let bgcColor;
   let element;
   let color;
   let txtDecoration;
   console.log(event.target.tagName.toLowerCase());
   if(event.target.tagName.toLowerCase() === "div"){
      bgcColor = event.target.style.backgroundColor;
      element = event.target;
      //console.log(event.target);
   }else if(event.target.tagName.toLowerCase() === "li"){
      bgcColor = event.target.parentElement.style.backgroundColor;
      element = event.target.parentElement;
      //console.log(event.target,event.target.parentElement);
   }
   
   if(bgcColor === "rgb(50, 65, 234)"){
      bgcColor = "rgb(242, 239, 239)";
      color  = "black";
      txtDecoration = "none";
   } else{
      bgcColor = "rgb(50, 65, 234)";
      color  = "white";
      txtDecoration = "line-through";
   }
   element.style.backgroundColor  = bgcColor;
   element.style.color = color;
   element.style.textDecoration = txtDecoration;

   /*let divDOMS = document.getElementsByClassName('li-div');
   for (let i = 0; i < divDOMS.length; i++) {
      divDOMS[i].addEventListener('click',function() {
         if(divDOMS[i].style.backgroundColor === "rgb(50, 65, 234)"){
            divDOMS[i].style.backgroundColor = "rgb(242, 239, 239)";
            divDOMS[i].style.color  = "black";
            divDOMS[i].style.textDecoration = "none";
         } else{
            divDOMS[i].style.backgroundColor = "rgb(50, 65, 234)";
            divDOMS[i].style.color  = "white";
            divDOMS[i].style.textDecoration = "line-through";
         }
      });
   }*/
}
