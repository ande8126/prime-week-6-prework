console.log( "js" );

$( document ).ready( readyNow );

function readyNow(){
  console.log( 'JQ' );
  $( '#sayHelloButton' ).on( 'click', sayHello);
  $( 'h2' ).mouseenter( h2MouseEnter );
  $( 'h2' ).mouseleave( h2MouseLeave );
  $( '.clicker' ).on( 'click', changeTextColor )
}//end readyNow

function changeTextColor() {
  console.log('in changeTextColor');
  $( this ).css( 'color', 'blue' )
}//end changeTextColor


function h2MouseEnter() {
  console.log( 'in h2MouseEnter' );
  $( this ).css( 'background-color', 'red');
}//end h2MouseEnter

function h2MouseLeave() {
  console.log( 'h2MouseLeave' );
  $( this ).css( 'background-color', 'white' );
}//end h2MouseLeave

function sayHello(){

  //target input element by ID
  //get value of the text input
  let outputText = 'Hello, ' + $( '#nameInput' ).val();
  //display text on the DOM
  //target the output element
  let outputEl = $( '#helloOut' );
  //empty it
  outputEl.empty();
  //append the output text in it
  outputEl.append( outputText );
  //empty input
  $( '#nameInput' ).val( '' );
}//end sayHello
