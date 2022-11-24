let myHeading = document.querySelector("h1");
let myButton = document.querySelector('button');
// myHeading.textContent = "Hello =v=!";

// let myImage = document.querySelector('img');
// myImage.onclick = () => {
//     let src = myImage.getAttribute('src');
//     if (src === "images/ev07222.jpg")
//         myImage.setAttribute('src', 'images/QQ图片20220623105031.jpg');
//     else
//         myImage.setAttribute('src', 'images/ev07222.jpg');
// }

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = myHeading.textContent = 'Hello ' + storedName + '!';
}

myButton.onclick = () => { setUserName(); }

function setUserName() {
    let myName = prompt('What\'s your name?');
    localStorage.setItem('name', myName);
    
    myHeading.textContent = 'Hello ' + myName + '!';
}

// document.querySelector("html").onclick = () => {
//     alert("=v=");
// };