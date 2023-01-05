let selected_product1 = "";
let selected_product2 = "";

function getservice() {
  selected_product1 = document.getElementById("alan").value;
  console.log(selected_product1);
}
function getcity() {
  selected_product2 = document.getElementById("city").value;
  console.log(selected_product2);
}
function addToList() {
  if (selected_product1 != "" && selected_product2 != "") {
    let products = selected_product1 + "SEP" + selected_product2;
    let readFile = getFirstProducts("./data.json");
    readFile.then((response) => {
      let selected_object = response[products];
      console.log(selected_object);
      if (selected_object != undefined) {
        let keys = Object.keys(selected_object);
        let ul = document.getElementById("list");
        ul.innerHTML = "";

        let values = [];
        keys.forEach((el) => {
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(el));
          ul.appendChild(li);
          ul.appendChild(document.createElement("hr"));
        });
      }
    });
  }
}
function compareNumbers(a, b) {
  return a - b;
}
function deleteToList() {
  let ul = document.getElementById("list");
  ul.innerHTML = "";
}

async function getFirstProducts(file) {
  let products = "";
  await fetch(file)
    .then((response) => response.json())
    .then((json) => (products = json));
  return products;
}
function deleteToLists(){
  let deleteee= document.getElementById(h1)
  deleteee.innerHTML=""
}

let product = getFirstProducts("./data.json");
product.then((response) => {
  console.log(response);
  let keys = Object.keys(response);

  let = product1 = [];
  let = product2 = [];
  keys.forEach((el) => {
    let splitted_Product = el.split("SEP");
    let counter_left = 0;
    product1.forEach((product) => {
      if (product == splitted_Product[0]) {
        counter_left++;
      }
    });
    if (counter_left == 0) {
      product1.push(splitted_Product[0]);
    }

    let counter_right = 0;
    product2.forEach((product) => {
      if (product == splitted_Product[1]) {
        counter_right++;
      }
    });
    if (counter_right == 0) {
      product2.push(splitted_Product[1]);
    }
  });

  product1.forEach((el, index) => {
    selectProducts = document.getElementById("city");
    let newElement = document.createElement("option");
    newElement.setAttribute("value", el);

    newElement.appendChild(
      document.createTextNode(el.replace(/-/g, " ").toLocaleUpperCase())
    );
    selectProducts.appendChild(newElement);
  });
  product2.forEach((el, index) => {
    selectProductsAlan = document.getElementById("alan");
    let newElementAlan = document.createElement("option");
    newElementAlan.setAttribute("value", el);

    newElementAlan.appendChild(
      document.createTextNode(el.replace(/-/g, " ").toLocaleUpperCase())
    );
    selectProductsAlan.appendChild(newElementAlan);
  });
});


