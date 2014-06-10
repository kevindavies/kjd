
$(document).ready(function() {

//   $('#navit').click(function() {
//     $('#navlinks').slideToggle('slow');
//   });
//   
//   
//   
//   // conditional showing and hiding of the nav
//   function hideNav() {
//     console.log("I'm big!");
//     $('#navlinks').show();
//   };
//   
//   function showNav() {
//     console.log("I'm little...");
//     
//     if( $('#navlinks').is(":visible") ) {
//       console.log('nav links is visible');
//       $('#navlinks').delay(1000).slideUp('slow').delay(800);
//     }
//   };
//   
//   
//   if($(window).width() > 700) {
//       $('#navlinks').show();
//   } else {
//     if( $('#navlinks').is(":visible") ) {
//       console.log('nav links is visible');
//       $('#navlinks').delay(1000).slideUp('slow').delay(800);
//     }
//   }
// 
//   minwidth(700, hideNav, showNav);


  // external links 
  $('a[rel=external]').attr('target','_blank');

  
  // form
		$('#send').click(function() {
			$('#getintouch').submit();
		});

function showResponse(responseText, statusText, xhr, $form)  { 
//     console.log('status: ' + statusText + '\n\nresponseText: \n' + responseText + 
//         '\n\nThe output div should have already been updated with the responseText.'); 

		$('#getintouch').fadeOut( function(){
				$('#thanks').html("<h3>Thanks!</h3><p>We&rsquo;ll be in touch shortly.</p>").fadeIn();
		});

}


		$("#getintouch").validate({
			rules: {
				name: "required",
				msg: "required",
				from: {
					required: true,
					email: true
				},
			},
			messages: {
				name: "Please enter your name",
				msg: "Please enter a message",
				from: "Please enter a your email address"
			},
			submitHandler: function(form) {
				jQuery(form).ajaxSubmit({
// 					beforeSubmit:  showRequest,
          success: showResponse,  // post-submit callback 
					type: 'post',
          target: '#thanks',
					clearForm: true 
				});
			}
		});


});