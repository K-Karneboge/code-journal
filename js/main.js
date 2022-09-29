// defining nessessary elements to listen to or change.
var titleInput = document.querySelector('[name="titleInput"]');
var notesInput = document.querySelector('[name="notesInput"]');
var inputForm = document.querySelector('.inputForm');
var photoUrl = document.querySelector('[name="photoUrl"]');
var photoImg = document.querySelector('.image-input');
var submitForm = document.querySelector('.inputForm');

// Change the image src to value of photoUrl
// Function for listening to input on the PhotoUrl, possibly ask on how to add regex for input. Need to find what part of the object to set to the new src.
function urlInput(e) {
  if (photoUrl.value !== '') {
    photoImg.src = photoUrl.value;
  } else {
    photoImg.src = './images/placeholder-image-square.jpg';
  }
}
function handleSubmit(e) {
  e.preventDefault();
  var newInput = {
    title: titleInput.value,
    photoUrl: photoUrl.value,
    notes: notesInput.value,
    nextEntryId: data.nextEntryId
  };
  var latestEntry = createEntry(newInput);
  userEntries.prepend(latestEntry);
  data.entries.unshift(newInput);
  data.nextEntryId++;
  photoImg.src = './images/placeholder-image-square.jpg';
  inputForm.reset();
  view('entries');
}

photoUrl.addEventListener('input', urlInput);
submitForm.addEventListener('submit', handleSubmit);
// Put the form's input values into a new object.
// Add the nextEntryId to the object.
// Increment the nextEntryId on the data model.
// Prepend the new object to the entries in the data model.
// Reset the image preview's `src' attribute.
// Reset the form inputs

function createEntry(e) {
  // create a li, create two divs. place both divs within the li
  var entryItem = document.createElement('li');
  entryItem.className = 'row entry-li';
  var entryImgDiv = document.createElement('div');
  var entryImg = document.createElement('img');
  entryImg.className = 'image-input';
  entryImg.src = e.photoUrl;
  entryImg.alt = e.title + ' Image';
  entryImgDiv.className = 'column-half';
  var entryTextDiv = document.createElement('div');
  var entryTextTitle = document.createElement('h4');
  var entryTextNotes = document.createElement('p');
  entryTextNotes.textContent = e.notes;
  entryTextTitle.textContent = e.title;
  entryTextDiv.className = 'column-half entry-text';
  entryItem.appendChild(entryImgDiv);
  entryItem.appendChild(entryTextDiv);
  entryImgDiv.appendChild(entryImg);
  entryTextDiv.appendChild(entryTextTitle);
  entryTextDiv.appendChild(entryTextNotes);
  return entryItem;
}
var userEntries = document.querySelector('.entries-ul');

function onLoad(e) {
  for (var i = 0; i < data.entries.length; i++) {
    userEntries.appendChild(createEntry(data.entries[i]));
  }
  if (data.view !== null) {
    view(data.view);
  }
}
document.addEventListener('DOMContentLoaded', onLoad);

function view(property) {
  var allViews = document.querySelectorAll('[data-view]');
  for (var i = 0; i < allViews.length; i++) {
    allViews[i].className = 'hidden';
  }
  document.querySelector('[data-view="' + property + '"]').className = property;
  data.view = property;
}

function viewNewEntry(a) {
  view('entry-form');
}

var newEntryButton = document.querySelector('[name="new-entry"]');
newEntryButton.addEventListener('click', viewNewEntry);
