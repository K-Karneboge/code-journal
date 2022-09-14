// First off, preventing default behavior of the submit button.
var submitForm = document.querySelector('.formClass');
submitForm.onsubmit = function (e) {
  e.preventDefault();
};
// defining nessessary elements to listen to or change.
var submitButton = document.querySelector('.submit-button');
var photoUrl = document.querySelector('.photoUrl');
var photoImg = document.querySelector('.imageInput');
// Function for listening to input on the PhotoUrl, possibly ask on how to add regex for input.
function urlInput(e) {
  if (photoUrl.textContent !== null && undefined) {
    photoImg.src = photoUrl.textContent;
  }
}
photoUrl.addEventListener('input', urlInput);
// function for listening submit
function handleSubmit(e) {
}
submitButton.addEventListener('click', handleSubmit);
