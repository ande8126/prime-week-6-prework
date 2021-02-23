$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function readyNow() {
  console.log( 'JQ' );
  //display budget
  //target budgetOut by id
  let el = $( '#budgetOut');
  el.empty();
  el.append( budget );
  //handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase )
  //init display
  calculateRemainingBudget()
}//end readyNow

function addPurchase() {
  console.log( 'in addPurchase' );
  //get user input
  //create new object
  let newPurchase = {
    name: $( '#purchaseNameIn' ).val(),
    price: $( '#purchasePriceIn' ).val()
  }
  //push new purchase into the array
  purchases.push( newPurchase );
  //empty inputs
  $( '#purchaseNameIn' ).val( '' );
  $( '#purchasePriceIn' ).val( '' );
  //calculate remaining budget
  calculateRemainingBudget();
  //update DOM
  displayNewPurchase();
}//end addPurchase

function calculateRemainingBudget() {
  console.log( 'in calculateRemainingBudget' );
  //loop thru purchases in array
  let totalPrices = 0;
  for ( let i=0; i<purchases.length; i++) {
  //for each purchase, add total of prices
  totalPrices += Number( purchases[ i ].price );
  }//end for
  console.log( 'totalPrices:', totalPrices);
  //subtract total prices from budget for remaining budget
  const remainingBudget = budget - totalPrices;
  //display remaining budget
  let el = $( '#remainingBudgetOut' );
  el.empty();
  el.append( remainingBudget );
}//end calculateRemainingBudget

function displayNewPurchase() {
  console.log('in displayNewPurchase ');
  //target output by id
  let el = $( '#purchasesOut' )
  //empty
  el.empty();
  //loop thru purchases array
  for (purchase of purchases) {
  //for each purchase create a list item
    el.append( `<li>` + purchase.name + `: $` + purchase.price + `</li>` );
  }//end for
}//end displayNewPurchase
