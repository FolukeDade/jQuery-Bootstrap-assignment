$( document ).ready(function() {

  $( ".changelink" ).click(function() {

    console.log("change link clicked");
    $(".changebtn4").addClass("changebtn4");
    
  })

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
        $(".box1").css({"background":"purple","border":"2px dashed pink"});
        $(".box2").css({"background":"grey","border":"2px solid black"});
        $(".box3").css({"background":"cyan","border":"2px dashed red"});
        
      }); 

      $( ".hidelink" ).click(function() {

        console.log("hide link clicked");
        $(".changebtn4").addClass("changebtn4");
        
      })

      $( ".hidebtn1" ).click(function() {

        console.log("hide btn 1 clicked");
        $(".box1").addClass("newbox4");
        
      });

      $( ".hidebtn2" ).click(function() {

        console.log("hide btn 2 clicked");
        $(".box2").addClass("newbox4");
        
      });

      $( ".hidebtn3" ).click(function() {

        console.log("hide btn 3 clicked");
        $(".box3").addClass("newbox4");
        
      });

      $( ".hidebtn4" ).click(function() {

        console.log("hide all clicked");
        $(".box1").css({"background":"white","border":"2px solid white"});
        $(".box2").css({"background":"white","border":"2px solid white"});
        $(".box3").css({"background":"white","border":"2px solid white"});
        
      });

      $( ".resetcolors" ).click(function() {

        console.log("change all clicked");
        $(".box1").css({"background":"red","border":"2px solid black"});
        $(".box2").css({"background":"blue","border":"2px dashed yellow"});
        $(".box3").css({"background":"green","border":"2px solid purple"});
        
      }); 

      $( ".showall" ).click(function() {

        console.log("show all clicked");
        $(".box1").css({"background":"purple","border":"2px dashed pink"});
        $(".box2").css({"background":"grey","border":"2px solid black"});
        $(".box3").css({"background":"cyan","border":"2px dashed red"});
        
      });
});