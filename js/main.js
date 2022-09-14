// defining nessessary elements to listen to or change.
var submitButton = document.querySelector('.submit-button');
var titleInput = document.querySelector('[name="titleInput"]');
var notesInput = document.querySelector('[name="notesInput"]');
var inputForm = document.querySelector('.inputForm');
var photoUrl = document.querySelector('[name="photoUrl"]');
var photoImg = document.querySelector('.image-input');
// Change the image src to value of photoUrl
// Function for listening to input on the PhotoUrl, possibly ask on how to add regex for input. Need to find what part of the object to set to the new src.
function urlInput(e) {
  if (photoUrl.value !== undefined) {
    photoImg.src = photoUrl.value;
  }
}
photoUrl.addEventListener('input', urlInput);

function handleSubmit(e) {
  var newInput = {
    title: titleInput.value,
    photoUrl: photoUrl.value,
    notes: notesInput.value,
    nextEntryId: data.nextEntryId
  };
  data.entries.push(newInput);
  data.nextEntryId++;
  photoImg.src = './images/placeholder-image-square.jpg';
  inputForm.reset();
}
// Preventing default behavior of the submit button.
var submitForm = document.querySelector('.inputForm');
submitForm.onsubmit = function (e) {
  e.preventDefault();
};
//
submitButton.addEventListener('click', handleSubmit);
// Put the form's input values into a new object.
// Add the nextEntryId to the object.
// Increment the nextEntryId on the data model.
// Prepend the new object to the entries in the data model.
// Reset the image preview's `src' attribute.
// Reset the form inputs
