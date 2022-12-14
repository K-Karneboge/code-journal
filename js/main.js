// defining nessessary elements to listen to or change.
var titleInput = document.querySelector('[name="titleInput"]');
var notesInput = document.querySelector('[name="notesInput"]');
var inputForm = document.querySelector('.inputForm');
var photoUrl = document.querySelector('[name="photoUrl"]');
var photoImg = document.querySelector('.image-input');
var submitForm = document.querySelector('.inputForm');

var entriesView = document.querySelector('[data-view="entries"]');

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
    notes: notesInput.value
  };
  // if the submission is new
  if (data.editing === null) {
    newInput.nextEntryId = data.nextEntryId;
    data.entries.unshift(newInput);
    var latestEntry = createEntry(data.entries[0]);
    userEntries.prepend(latestEntry);
    data.nextEntryId++;
  } else if (data.editing !== null) {
    newInput.nextEntryId = data.editing.nextEntryId;
    var newInputId = data.entries.findIndex(object => { return object.nextEntryId === newInput.nextEntryId; });
    data.entries.splice(newInputId, 1, newInput);
    document.querySelector('[data-entry-id="' + newInputId + '"]').replaceWith(createEntry(data.entries[newInputId]));
  }
  photoImg.src = './images/placeholder-image-square.jpg';
  inputForm.reset();
  data.editing = null;
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
  entryItem.setAttribute('data-entry-id', data.entries.findIndex(object => { return object.nextEntryId === e.nextEntryId; }));
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
  var editEntryIcon = document.createElement('i');
  editEntryIcon.className = 'fa-solid fa-pen-to-square';
  // data entry id of the entry icon and of the li itself are both set to the index of the data.entries object that they were created from.
  editEntryIcon.setAttribute('data-entry-id', data.entries.findIndex(object => { return object.nextEntryId === e.nextEntryId; }));
  entryTextNotes.textContent = e.notes;
  entryTextTitle.textContent = e.title;
  entryTextDiv.className = 'column-half entry-text';
  entryItem.appendChild(entryImgDiv);
  entryItem.appendChild(entryTextDiv);
  entryImgDiv.appendChild(entryImg);
  entryTextDiv.appendChild(entryTextTitle);
  entryTextTitle.appendChild(editEntryIcon);
  entryTextDiv.appendChild(entryTextNotes);
  return entryItem;
}

entriesView.addEventListener('click', editEntry);

function editEntry(e) {
  if (e.target.matches('i')) {
    data.editing = data.entries[e.target.getAttribute('data-entry-id')];
    viewNewEntry();
    document.querySelector('[id="entry-title"]').textContent = 'Edit Entry';
    populateEdit();
  }
}

function populateEdit(e) {
  titleInput.value = data.editing.title;
  photoUrl.value = data.editing.photoUrl;
  notesInput.value = data.editing.notes;
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
  if (data.editing !== null) {
    document.querySelector('[id="entry-title"]').textContent = 'Edit Entry';
  }
}

function viewNewEntry(a) {
  view('entry-form');
  document.querySelector('[id="entry-title"]').textContent = 'New Entry';
}

var newEntryButton = document.querySelector('[name="new-entry"]');
newEntryButton.addEventListener('click', viewNewEntry);
