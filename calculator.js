    
    var number = "";
    var nwnumber = "";
    var operator = "";
    var total = "";

// Add onclick event to all the keys and perform operation

    $(".keys").click(function(){
        number += $(this).html;
        
        $(".screen").text(number);
        //  $(".keys").val();
        //$(".screen").text("number");
    });
   document.log (number);


    // Get the input and button values

// If clear event is pressed, erase everything

// If eva key is pressed, calculate and display the result