
       function button_click(i)
	   {
	   	    var img_src = "img/"+i+".jpg";		  
//           slide mode
			 $("#main_image").animate({"left":-410},"slow",function(){
			   $("#main_image").attr("src",img_src);
			   $("#main_image").css({"left":410}); 
               $("#main_image").animate({"left":0},"slow");			   
			});
			//set radio&p&button 
			$('input').iCheck('uncheck');
			$('input').iCheck('enable');
			$('p#answer').css("visibility","hidden");
			$('#next_button').attr("disabled","disabled");
		  
/*          fade mode
		     $("#main_image").fadeOut("5000",function(){
			    $("#main_image").attr("src",img_src);
				setTimeout('$("#main_image").fadeIn("5000")',1000);
			 });
		  }); 
*/
	   
	   }
	   
	   function set_anwser()
	   {
	      	  //set p
			 if ("pic1_1" == $("input[type='radio']:checked").val())
			 {
			    $('#right_wrong').text("正确");
			 }
			 else
			 {
			    $('#right_wrong').text("错误");
			 }
			 $('p#answer').css("visibility","visible");   
	   }