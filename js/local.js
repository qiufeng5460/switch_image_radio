    
	//定义了一个的二维数组,用于记录选项
	var g_options = [["pic1_1","pic1_2","pic1_3","pic1_4"],["pic2_1","pic2_2","pic2_3","pic2_4"],["pic3_1","pic3_2","pic3_3","pic3_4"]];

    
	//定义了一个的一维数组,用于记录答案
	var g_anwser = ["pic1_1","pic2_1","pic3_1"];	

      
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
			
			//设置选项文字
			$('#option_1').text(g_options[i][0]);
			$('#option_2').text(g_options[i][1]);
		    $('#option_3').text(g_options[i][2]);
		    $('#option_4').text(g_options[i][3]);
			
			
/*          fade mode
		     $("#main_image").fadeOut("5000",function(){
			    $("#main_image").attr("src",img_src);
				setTimeout('$("#main_image").fadeIn("5000")',1000);
			 });
		  }); 
*/
	   
	   }
	   
	   
	   function set_anwser(i)
	   {
	      	  //set p
			 if (g_anwser[i] == $("input[type='radio']:checked").val())
			 {
			    $('#right_wrong').text("正确");
			 }
			 else
			 {
			    $('#right_wrong').text("错误");
			 }
			 $('p#answer').css("visibility","visible");   
	   }