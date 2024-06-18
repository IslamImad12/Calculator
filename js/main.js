// //todo: STRICT MODE
// 'use strict';

/*
? var (global - function local (function scope))
? var let const (let - const ---> local - global (block scope))
? scope
? hoisting (var - let - const)
? 
! TDZ
*/

// var allItems = [];
// var myHttp = new XMLHttpRequest();
// // open connection
// myHttp.open('GET','www.themealdb.com/api/json/v1/1/categories.php'); 
// // send Data
// myHttp.send(); 

// myHttp.addEventListener('readystatechange',function(){
  //     if(myHttp.readyState == 4){
    //         allItems = JSON.parse( myHttp.response ).categories;
//         displayProducts();
//     }
// })

// function displayProducts() {
  //     var cartona = ``;
//     for( let i =0; i < allItems.length ; i++){
  //         cartona += `
  //         <div class="col-md-3">
  //         <div class="items">
  //         <img src="${allItems[i].strCategoryThumb}" alt="" width='100px>
  //           <h2>${allItems[i].strCategory}</h2>
  //         </div>
  //       </div>
  //         `
  //     }
  //     document.getElementById('rowData').innerHTML = cartona;
  // }
  rowData = document.getElementById('rowData');
  var allItems = [];
  
  function displayProducts() {
    var cartona = ``;
    for( let i =0; i < allItems.length ; i++){
        cartona += `
        <div class="col-md-3">
        <div class="items">
        <img src="${allItems[i].image_url}" alt="" width='200px' height='100px'>
        <h2>${allItems[i].title}</h2>
        
        </div>
      </div>
        `
    }
    document.getElementById('rowData').innerHTML = cartona;
}
// let data = [];
async function getProduct(data){
  let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${data}`)
  let finalResult = await apiResponse.json();
  console.log(finalResult.recipes);
  allItems = finalResult.recipes;
  displayProducts();
}

let countryLinks = document.querySelectorAll('li');
for (let i=0;i<countryLinks.length;i++){
  countryLinks[i].addEventListener('click',function(eventInfo){
    let x = eventInfo.target.getAttribute('hambozo');
    getProduct(x);
  })
}
getProduct();















































