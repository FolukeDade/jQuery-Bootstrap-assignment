$( document ).ready(function() {

    console.log( "ready!" );

    $( ".changebtn1" ).click(function() {

        console.log("change btn 1 clicked");
        $(".box1").addClass("newbox1");
        
      });

      $( ".changebtn2" ).click(function() {

        console.log("change btn 2 clicked");
        $(".box2").addClass("newbox2");
        
      });

      $( ".changebtn3" ).click(function() {

        console.log("change btn 3 clicked");
        $(".box3").addClass("newbox3");
        
      });

        $( ".changebtn4" ).click(function() {

        console.log("change all clicked");
        $(".box1").css({"background":"red","border":"2px solid black"});
        $(".box2").css({"background":"blue","border":"2px dashed yellow"});
        $(".box3").css({"background":"green","border":"2px solid pink"});
        
      }); 

   
});