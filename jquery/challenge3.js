
$(document).ready(function(){
  $('form').submit(function(onsubmit){
    var year = $('input[name="standing"]');
    var fruit = $('input[name="fruit"]');
    if((year.is(':checked')) && (fruit.is(':checked'))){
      return true;
    }
    alert('Please pick both a fruit and year');
    return false;
  })
})
