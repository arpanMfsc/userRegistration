$(function(){

    $('select').formSelect();
 	$('.modal').modal();
 	 $(window).scroll(function(){
	      if ($(this).scrollTop() > 280) {
	          $('header').addClass('fixed');
	      } else {
	          $('header').removeClass('fixed');
	      }
      });

 	 var d = new Date();
	 d.setFullYear( d.getFullYear() - 100 );
      $('.datepicker').datepicker({
      	selectMonths: true,
   		selectYears: 100,
   		max: new Date()
      });

    $('#add-btn').unbind('click').on('click',function(){
    	var data=$('#pi').val();
    	if(data.trim()!='')
    	$('#interests').append("<span class='chip blue-grey darken-4 white-text'>"+data+'</span>');
    	$('#allInterests').val( $('#allInterests').val()+data+"," );
    });

    // this is for disabling the submit button id the confirmed password not matched....
    $(document).on('change','#confirm_password,#password',function(){
    	var p1=$('#password').val();
    	var p2=$('#confirm_password').val();
    	console.log(p1==p2);
    	if(p1!="" && p2!="" && p1==p2){
    		$('#submit-btn').prop('disabled',false);
    		$('#error').html('');
    	}
    	else{
    		$('#submit-btn').prop('disabled',true);
    		
    		$('#error').html('Confirmed Password not matched');
    	}

    });

});

function validate(){

	var data =
		'First Name\t:\t'+$('#firstName').val()+'\n'+
		'Middle Name\t:\t'+$('#middleName').val()+'\n'+
		'Last Name\t:\t'+$('#lastName').val()+'\n'+
		'Gender\t:\t'+$('#gender').val()+'\n'+
		'Date of Birth\t:\t'+$('#dob').val()+'\n'+
		'Email\t:\t'+$('#email').val()+'\n'+
		'Phone\t:\t'+$('#phone').val()+'\n'+
		'Password\t:\t'+$('#password').val()+'\n'+
		'Interests\t:\t'+$('#allInterests').val();

	$('#entered-details .modal-content').html(data.replace(new RegExp('\r?\n','g'),'<br />').
													replace(new RegExp('\r?\t','g'),'&nbsp;&nbsp;&nbsp;&nbsp')
											  );
	$('#entered-details').modal('open');
	return false;
}