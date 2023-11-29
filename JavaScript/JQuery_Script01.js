$(document).ready(function(){
    console.log("First Code...");
})

//  JQuery Effects
$('#btn1').click(function(){
    // this will execute/occur after click on button

    // Mehod 1: will 'hide' the element which id we have given
    $('#container').hide();

    // Mehod 2: will 'fade out' the element which id we have given
    $('#container').fadeOut(2000,function(){
        console.log("Fade Out");
        alert("gone...");
    });
});


$('#btn2').click(function(){
    // this will execute/occur after click on button

    // Mehod 3: will 'show' the element which id we have given
    // $('#container').show();

    // Mehod 4: will 'fade in' the element which id we have given
    $('#container').fadeIn(2000,function(){
        console.log("Fade In");
        alert("Visible");
    })
})



$('#btn3').click(function(){
    // this will execute/occur after click on button

    // Method 5: will 'fade in' if element is 'fade out' (vice-versa)
    $('#container').fadeToggle(2000);
})


$('#btn4').click(function(){
    // this will execute/occur after click on button

    // Mehod 5: will 'fade out' upto n% opacity which we passed, we can also pass callback function
    $('#container').fadeTo(2000,0.2);
})


//     Sliding Mehods

$('#btn5').click(function(){

    // Mehod 6: will 'slide up' after 2 second and print the message which we want
    $('#container').slideUp(2000,function(){
        console.log("Slide Up");
    })
})

$('#btn6').click(function(){

    // Mehod 7: will 'slide down' after 2 second and print the message which we want
    $('#container').slideDown(2000,function(){
        console.log("Slide Down");
    })
})


$('#btn7').click(function(){

    // Mehod 8: will 'slide up and down' after 2 second and print the message which we want
    $('#container').slideToggle(2000,function(){
        console.log("Slide Toggle");
    })
})

// animat({params},speed,function)

$('#btn8').click(function(){
    // Mehod 9 : will animate the element
    $('#container').animate({width: "100", height: "100"},2000);
})


// $('#btn8').click(function(){
//     // Mehod 9 : will animate the element
//     $('#container').animate({width: "+=100", height: "+=100"},2000);
// })