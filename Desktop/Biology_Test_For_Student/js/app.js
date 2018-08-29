$(document).ready(function(){

	//form submit event
    $('#questions').on('submit',function(e){

    	 	// mark  variable
			 let marks=0;
			 let wrongNumber=[];
    	   e.preventDefault();

    	   //pull the answer from the form

    	   var answers=$(this).serializeArray();

    	   //loop through the answers arry by jquery each method

    	    console.log(answers);

    	    $.each(answers,function(index,mark){
    	    	      //push the mark into marks var
                      marks+=parseInt(mark.value);
                      //if the answer is wrong push the index value into wrong nuber array
                      if(mark.value==0){
                      	         //pushing wrong number index
                                wrongNumber.push(index+1);
                      }
    	    });
            console.log(marks);
    	    console.log(wrongNumber);

    	    //show the pop up plate
    	    $('#pop-up').fadeIn();
    	    //write the html code
             let htmlDoc="";

             if(wrongNumber!=""){

    	               htmlDoc="<table><tr></tr><th>Total Marks = </th><th>"+marks+" mark</th><tr><th>Wrong answer number = </th><th>"+wrongNumber+"</th></tr></table><div><strong>Press 'Esc' to go to questions!</strong></div>";
             }else{

    	              htmlDoc="<table><tr></tr><th>Total Marks = </th><th>"+marks+" mark</th><tr><th colspan='2'>All True ! Congradulation !</th></tr></table><div><strong>Press 'Esc' to go to questions!</strong></div>";
             }

    	    //push the value

    	    $('#result').html(htmlDoc);

    });

    //on keypress event
    $(window).on('keydown',function(e){
                 //hide the pop up plate
                  if(e.keyCode==27){
                  	    $('#pop-up').fadeOut();
                  }
    });

    //pop up 
    $('#pop-up').on('click',function(){
    	    $(this).fadeOut();
    });
});