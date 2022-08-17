const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//<Buttons are created>;
createButtons();
function createButtons(btnCount) {
  let buttonsDOM = document.querySelector(".btn-container"); //where all buttons are contained in HTML file
  let buttonItem1 = document.createElement("button");
  buttonItem1.id = "all-foods";
  buttonItem1.classList.add("btn", "btn-outline-dark");
  buttonItem1.innerText = "All"; //the text of the button is given
  buttonItem1.style.marginLeft = "15px"; //style is added to give space between buttons
  //buttonItem1.addEventListener('click',showAll);//to show all items
  buttonItem1.addEventListener('click',showFilteredFoods);//to show all items
  //console.log(buttonItem1.id);

  let buttonItem2 = document.createElement("button");
  buttonItem2.classList.add("btn", "btn-outline-dark");
  buttonItem2.innerText = "Korea";
  buttonItem2.id = "korea-foods";
  buttonItem2.style.marginLeft = "15px";
  //buttonItem2.addEventListener('click',showKoreaFoods); //to filter the foods which belong to Korea.
  buttonItem2.addEventListener('click',showFilteredFoods); //to filter the foods which belong to Korea.

  let buttonItem3 = document.createElement("button");
  buttonItem3.classList.add("mr-2","btn", "btn-outline-dark");
  buttonItem3.innerText = "Japan";
  buttonItem3.id = "japan-foods";
  buttonItem3.style.marginLeft = "15px";
  //buttonItem3.addEventListener('click',showJapanFoods); //to filter the foods which belong to Japan.
  buttonItem3.addEventListener('click',showFilteredFoods); //to filter the foods which belong to Korea.

  let buttonItem4 = document.createElement("button");
  buttonItem4.classList.add("mr-2","btn", "btn-outline-dark");
  buttonItem4.innerText = "China";
  buttonItem4.id = "china-foods";
  buttonItem4.style.marginLeft = "15px";
  //buttonItem4.addEventListener('click',showChinaFoods); //to filter the foods which belong to China.
  buttonItem4.addEventListener('click',showFilteredFoods); //to filter the foods which belong to Korea.

  buttonsDOM.append(buttonItem1,buttonItem2,buttonItem3,buttonItem4); //at the end, all created buttons are added to the button container
}
//</Buttons are created>;

showAll();//Sayfa ilk acildiginda default olarak hepsi gosterilecek
function showAll(){
  removeCurrentItems(); //To show the new filtered items by deleting the items which belong to previous button click(selection).
   for(item in menu){
      //console.log(menu[item].title);
      //All elements will be shown on the web page;
      addElement(menu[item].img, menu[item].title, menu[item].price, menu[item].desc);
   }
}

function showFilteredFoods(event) {
    removeCurrentItems(); //To show the new filtered items by deleting the items which belong to previous button click(selection).
    switch (event.target.id) {
      case "all-foods":
          showAll();
          break;
      case "korea-foods":
          let koreaFoods = menu.filter(item =>{
            return item.category === "Korea";
          });      
          koreaFoods.forEach(function(item){
            addElement(item.img,item.title,item.price,item.desc);
            
          });
        break;

      case "japan-foods":
        let japanFoods = menu.filter(item =>{
          return item.category === "Japan";
        });      
        japanFoods.forEach(function(item){
          addElement(item.img,item.title,item.price,item.desc);   
        });
      break;

      case "china-foods":
        let chinaFoods = menu.filter(item =>{
          return item.category === "China";
        });      
        chinaFoods.forEach(function(item){
          addElement(item.img,item.title,item.price,item.desc);   
        });
      break;
    
      default:
        break;
    };
}

/*
//To show the filtered Korea Foods;
function showKoreaFoods(){
    removeCurrentItems(); //To show the new filtered items by deleting the items which belong to previous button click(selection).
    let koreaFoods = menu.filter(item =>{
       return item.category === "Korea";
     }
    );
    koreaFoods.forEach(function(item){
       addElement(item.img,item.title,item.price,item.desc);
    });
}

//To show the filtered Japan Foods;
function showJapanFoods(){
  removeCurrentItems(); //To show the new filtered items by deleting the items which belong to previous button click(selection).
  let japanFoods = menu.filter(item =>{
     return item.category === "Japan";
   }
  );
  japanFoods.forEach(function(item){
     addElement(item.img,item.title,item.price,item.desc);
  });
}

//To show the filtered China Foods;
function showChinaFoods(){
  removeCurrentItems(); //To show the new filtered items by deleting the items which belong to previous button click(selection).
  let chinaFoods = menu.filter(item =>{
     return item.category === "China";
   }
  );
  chinaFoods.forEach(function(item){
     addElement(item.img,item.title,item.price,item.desc);
  });
}
*/

//addElement("https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg", "Tteokbokki", "10.99" , "Spicy rice cakes, serving with fish cake.")
function addElement(imgSrc,title, price,description){
  let sectionDOM = document.querySelector(".section-center");
  let divOuter = document.createElement("div");
  divOuter.classList.add("menu-items","col-lg-6","col-sm-12");

  let imgDOM = document.createElement("img");
  imgDOM.src = `${imgSrc}`;
  //imgDOM.alt = `${imgAlt}`;
  imgDOM.classList.add("photo"); //properties of it defined in the style.css file

  let divInfo = document.createElement("div");
  divInfo.classList.add("menu-info");

  let divTitle = document.createElement("div");
  divTitle.classList.add("menu-title");
  //divTitle.style.backgroundColor= "red";
  divTitle.innerHTML = `<h4>${title}</h4>
                        <h4 class="price">${price}</h4>`;
  divInfo.appendChild(divTitle);

  let divText = document.createElement("div");
  divText.classList.add("menu-text");
  divText.innerText = `${description}`;
  divInfo.appendChild(divText);

  divOuter.appendChild(imgDOM);
  divOuter.appendChild(divInfo)
  sectionDOM.appendChild(divOuter);
} 

//To delete the current items on a food section;
function removeCurrentItems(){
  let sectionDOM = document.querySelector(".section-center");
  sectionDOM.innerHTML = "";
}












