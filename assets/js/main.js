$(function(){

    $('select').formSelect();
 	$('.modal').modal();
 	 $(window).scroll(function(){
      if ($(this).scrollTop() > 280) {
          $('header').addClass('fixed');
      } else {
          $('header').removeClass('fixed');
      }
      var d = new Date();
	  d.setFullYear( d.getFullYear() - 100 );
      $('.datepicker').datepicker({
     //  	selectMonths: true,
   		// selectYears: 100,
   		// max: new Date()
      });

    $('#add-btn').unbind('click').on('click',function(){
    	var data=$('#pi').val();
    	if(data.trim()!='')
    	$('#interests').append("<span class='chip blue-grey darken-4 white-text'>"+data+'</span>');
    	$('#allInterests').val( $('#allInterests').val()+data+"," );
    });

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
});

function validate(){
	alert($('#allInterests').val());
	alert(
		$('#firstName').val()+'\n'+
		$('#middleName').val()+'\n'+
		$('#lastName').val()+'\n'+
		$('#gender').val()+'\n'+
		$('#dob').val()+'\n'+
		$('#email').val()+'\n'+
		$('#phone').val()+'\n'+
		$('#password').val()+
		$('#allInterests').val()
		
	);
}