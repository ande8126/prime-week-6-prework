$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

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


}

function readyNow() {
  console.log( 'JQ' );
  //display budget
  //target budgetOut by id
  let el = $( '#budgetOut');
  el.empty();
  el.append( budget );
  //handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase )
}//end readyNow
