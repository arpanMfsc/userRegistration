$(function(){

    $('select').formSelect();
 
 	 $(window).scroll(function(){
      if ($(this).scrollTop() > 280) {
          $('header').addClass('fixed');
      } else {
          $('header').removeClass('fixed');
      }
       $('.datepicker').datepicker();

    $('#add-btn').unbind('click').on('click',function(){
    	var data=$('#pi').val();
    	if(data.trim()!='')
    	$('#interests').append("<span class='chip blue-grey darken-4 white-text'>"+data+'</span>');
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