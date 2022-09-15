/* exported data */

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
