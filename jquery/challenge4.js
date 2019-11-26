$(document).ready(function(){
  $('form').submit(function(event){
  var validInput = true
  var address = $('#streetaddr').val();
  var name = $('#fullname').val();
  if (name == 0){
    $('#nameerrormsg').css('display', 'block');
    event.preventDefault();
    validInput = false;
  }
  else {
    $('#nameerrormsg').css('display', 'none');
    }
    if (address == 0){
      $('#addrerrormsg').css('display', 'block');
      validInput = false
    }
    else {
      $('#addrerrormsg').css('display', 'none');
      }
    return validInput
  })

})









// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }
