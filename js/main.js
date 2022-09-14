// Change the image src to value of photoUrl
var photoImg = document.querySelector('.imageInput');
var photoUrl = document.querySelector('[name="photoUrl"]');
// Function for listening to input on the PhotoUrl, possibly ask on how to add regex for input. Need to find what part of the object to set to the new src.
function urlInput(e) {
  if (photoUrl.value !== undefined) {
    photoImg.src = photoUrl.value;
  }
}
photoUrl.addEventListener('input', urlInput);
