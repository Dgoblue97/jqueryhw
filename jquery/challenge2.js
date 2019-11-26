
$(document).ready(function(){
	$('#useBilling').click(function(){
		if ($(this).is(':checked')){
			$('#home').prop('disabled', true);
      $('#home').val($('#billing').val());
		}
		else {
			$('#home').prop('disabled', false);
			$('#home').val('');
		}
	})
})











// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");
//
// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}
