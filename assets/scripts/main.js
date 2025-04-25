const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/images/smiley_orig.png") {
    myImage.setAttribute("src", "assets/images/default_user.png");
    myImage.setAttribute("alt", "default_user.png");
  } else {
    myImage.setAttribute("src", "assets/images/smiley_orig.png");
    myImage.setAttribute("alt", "smiley_orig.png");
  }
});

/*
personalized greeting
*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  // if the user clicks cancel, the prompt will be called again
  // if the user clicks ok, the name will be saved in local storage
  // and the heading will be updated with the new name
}

myButton.addEventListener("click", () => {
    setUserName();
});
// will need to find a way to select which button will trigger the function 
// ************** getElementById("myButton").addEventListener("click", setUserName);

  