//    Access the HTML Elements

// Access the body
// const myBody = document.body;
// console.log(myBody);

// // Access particular element with the help of id
// const box2 = document.getElementById('box-2');
// console.log(box2);


// // Access the element with the help of tag name
// const divs = document.getElementsByTagName('div');
// console.log(divs);


// // Access element with the help of class name
// const boxxxes = document.getElementsByClassName('box');
// console.log(boxxxes);

// const box = document.getElementsByClassName('random');
// console.log(box);

// //Access the element with the help of query selector
// const random = document.querySelector('.container .random');
// console.log(random);


// const boxx = document.querySelector('.container .box');  // this querySelector will select only first box of the container
// console.log(boxx);


// const boxxes = document.querySelectorAll('.container .box');  // this querySelector will select all the boxes of the container
// console.log(boxxes);


// //                    Change the Property or Attribute of the HTML element

const box1 = document.getElementById('box-1');
box1.innerHTML ="<h1> Hello </h1>"   // change the content/inner HTML, we can write any HTML query here
box1.style.backgroundColor = "red";  // change the background color of box-1


box1.classList.add('round-border');  // add newly created class in box1

const boxes = document.getElementsByClassName('box');   // here boxes is  array of all box classes
console.log(boxes);

// for(let i=0;i<boxes.length;i++){   // add newly created class with all boxes with the help of for-loop
//     boxes[i].classList.add('round-border');  // we can access this boxes array by the index value
// }

// const boxxes3 = document.getElementById('box-3');   // remove random class from box-3
// boxxes3.classList.remove('random');

// const boxxes2 = document.getElementById('box-2');
// boxxes2.classList.toggle('random');            // if class is present then it will remove otherwise add the class


// // const particularDiv = document.getElementsByTagName('p');
// // console.log(particularDiv);
// // particularDiv.style.backgroundColor = "red";

//  //        Creating new HTML
// const newParagraph = document.createElement('p');
// newParagraph.innerText = "This is brand new Paragraph";
// newParagraph.classList.add('box');