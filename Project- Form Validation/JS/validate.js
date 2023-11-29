// Validation Code.....

// return true - if form is valid
// return false - if form is not valid
function validation(){
    let f = false;
    // validation here

    // validation for name field
    let name = $('.name-field').val();
    if(name == "" || name == undefined){
        $('.name-field-msg').html("Name is required").addClass("text-danger");
        // f=false;
    }
    else{
        $('.name-field-msg').html("Ok..").removeClass("text-danger").addClass("text-success");
        // f=true;
    }

    // validation for email field
    let email = $('.email-field').val();
    if(email == "" || email == undefined){
        $('.email-field-msg').html("Email is required").addClass("text-danger");
        // f=false;
    }
    else{
        $('.email-field-msg').html("Ok").removeClass("text-danger").addClass("text-success");
        // f=true;
    }

    // validation for password
    let password = $('.password-field').val();
    if(password == "" || password == undefined){
        $('.password-field-msg').html("Password is required").addClass("text-danger");
        // f=flase;
    }
    else{
        $('.password-field-msg').html("Ok").removeClass("text-danger").addClass("text-success");
        // f=true;
    }

    // validation for phone number
    let phone_no = $('.phone-field').val();
    if(phone_no == "" || phone_no == undefined){
        $('.phone-field-msg').html("Phone no. is required").addClass("text-danger");
    }
    else if(phone_no.lenght()!=10){
        $('.phone-field-msg').html("Phone no. should be 10 character").addClass("text-danger");
        // f=true;
    }
    else{
        $('.phone-field-msg').html("Ok").removeClass("text-danger").addClass("text-success");
        // f=true;
    }


    return f;
}