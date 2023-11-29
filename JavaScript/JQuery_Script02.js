$('#btn9').click(function(){
    // Method 1: val()-> fetch and set data/value from input feild and print in console
    let v = $('#field').val();  // fetch data from feild
    console.log("value is "+v);
    //
    $("#field").val("<h1>This is done using val() fun<h2>");  // set data inside a field
    //
    // // Method 2: text() -> fetch and set text in paragraph
    // let c=$('#content').text();   // fetch text from paragraph and include html tags and print in console
    // console.log(c);
    //
    // $('#content').text("<b>this is set by using text</b>");   // this will set content in place of paragraph and include html tags
    //
    // // Method 3: html() -> to get and set content(inner HTML)
    // let d=$('#content').html();       // return the content of paragraph and print in console
    // // console.log("This paragraph is by html() function ",d);
    //
    // // $('#content').html("This content is by html() funcition <b> Sayyad Mohammad Hassa </b>");   // this will also set content in place of paragraph but exclude html tags
    //
    // // Mehod 4: attr() -> to get and set attribute and values of selected elements
    // let s = $('#image').attr('src');  // return the link of the image which is in src
    // console.log(s);

    // to change the image after click on button
    // $('#image').attr('src',"https://media.istockphoto.com/id/496704108/photo/white-empty-plate-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=PqOwAQD3nxeoA81m6baNG9ayw-yew6OyEd19fy3j-Yg=")
    // $('#image').attr('alt',"Google Image2");  // to change the title of image after click on button

})