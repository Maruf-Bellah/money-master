// 1 problem=======================================
function anaToVori(ana) {
     if(ana < 16){
          return 'please try again'
     }
     let vori = ana / 16;
     return vori;
  }
  let totalAna = 32;
  console.log(anaToVori(totalAna));

//   2 problem =========================================


function pandaCost(singara, samucha, jilafi){
     if(singara == 0 && samucha == 0 && jilafi == 0){
          return 'please try again';
     }
     // Prices for each
     const perSingara = 7;
     const perSamucha = 10;
     const perJilafi = 15;
     
     // Multiply all of them
     const singaraQuantity = singara * perSingara;
     const samuchaQuantity = samucha * perSamucha;
     const jilafiQuantity = jilafi * perJilafi;
  
     //Add all of them
     const allFood = singaraQuantity + samuchaQuantity + jilafiQuantity;
  
     return allFood ;
  }
  
console.log(pandaCost(5, 1 , 5));

//   3 problem =================================================

function  picnicBudget(picnicPeople) {
     if(picnicPeople == 0){
          return 'please try again';
     }
     let Price;
     if(picnicPeople <= 100){
        Price = picnicPeople * 5000;
     }
  
     else if(picnicPeople <= 200) {
     let firstPrice = 100 * 5000;
     let secondPrice = (picnicPeople - 100) * 4000;
     Price = firstPrice + secondPrice;
     }
  
     else if(picnicPeople <= 300) {
     let firstPrice = 100 * 5000;
     let secondPrice = 100 * 4000;
     let thirdPrice = (picnicPeople - 200) * 3000;
     Price = firstPrice + secondPrice + thirdPrice;
     }
     return Price;
  }
  console.log(picnicBudget(20));


//   4 problem===================================
const friendName = ['maruf','hasan','niloy','bellah','salman'];

function oddFriend(friend){
     if(friend < 0 ){
          return 'plese try again';
     }
     let largest = friend[0];
     for (let i = 0; i < friend.length; i++){
          let  element = friend[i];
          if(friend[i].length > element.length){
               largest = friend;
          }
     }
     return largest;
  }
  console.log(oddFriend(friendName));