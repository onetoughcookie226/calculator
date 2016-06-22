
   // $(".screen").text("Results");

//Add a .click() listener to receive input from the buttons
    //$(".clear").click( function () {

    // when it is clicked change the .text of .screen to "clear"
      //  $(".screen").text("clear");

    //});

    var number = "";
    var nwnumber = "";
    var operator = "";
   var total = "";

    $(".keys").click(function(){
        number += $(this).html;


        $(".screen").text(number);
        //  $(".keys").val();
        //$(".screen").text("number");
    });
   document.write("number");
//take  .text and append i to the nmber



    // Get al the keys from the document

// Add onclick event to all the keys and perform operation

    // Get the input and button values

// If clear event is pressed, erase everything

// If eva key is pressed, calculate and display the result