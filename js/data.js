/* exported data */
// defining nessessary elements to listen to or change.
var submitButton = document.querySelector('.submit-button');
var titleInput = document.querySelector('[name="titleInput"]');
var notesInput = document.querySelector('[name="notesInput"]');
var inputForm = document.querySelector('.inputForm');
var photoUrl = document.querySelector('[name="photoUrl"]');

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
// check and retrieve previous items from localstorage if any
var previousSubmissions = localStorage.getItem('submissions');
// if there were any set data to previous submissions
if (previousSubmissions !== null) {
  data = JSON.parse(previousSubmissions);
}
// Save the entries to localstorage on unload
window.addEventListener('beforeunload', saveSubmissions);
function saveSubmissions(event) {
  var submissionsJSON = JSON.stringify(data);
  localStorage.setItem('submissions', submissionsJSON);
}
// Put the form's input values into a new object.
// Add the nextEntryId to the object.
// Increment the nextEntryId on the data model.
// Prepend the new object to the entries in the data model.
// Reset the image preview's `src' attribute.
// Reset the form inputs
function handleSubmit(e) {
  var newInput = {
    title: titleInput.value,
    photoUrl: photoUrl.value,
    notes: notesInput.value,
    nextEntryId: data.nextEntryId
  };
  data.entries.push(newInput);
  data.nextEntryId++;
  inputForm.reset();
}
// Preventing default behavior of the submit button.
var submitForm = document.querySelector('.inputForm');
submitForm.onsubmit = function (e) {
  e.preventDefault();
};
//
submitButton.addEventListener('click', handleSubmit);
