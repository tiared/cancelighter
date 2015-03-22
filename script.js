/* global gistachio jsyaml */

var contactContainer = document.getElementById('contacts');
var gistPrompt = document.getElementById('gistprompt');
var gistIdInput = document.getElementById('gistid');
var gistSubmit = document.getElementById('gistsubmit');
var gistForm = document.getElementById('gistform');

var vendorsGistId = localStorage.getItem('gistId');

var vendorInfo;

var defaultEmailSubject = 'Item cancellation - PO #';

function populateVendors(vendorContactInfo){
  vendorInfo = vendorContactInfo;

  var vendorList = Object.keys(vendorContactInfo);

  for (var i=0; i < vendorList.length; i++) {
    var vendorName = vendorList[i];
    var vendorContainer = document.createElement('div');
    var vendorHeader = document.createElement('h2');
    vendorHeader.textContent = vendorName;
    vendorContainer.appendChild(vendorHeader);
    if (vendorNotes) {
      var notesContainer = document.createElement('p');
      notesContainer.textContent = vendorNotes;
      vendorContainer.appendChild(notesContainer);
    }
    var vendorEmails = vendorInfo[vendorName].emails;
    if (vendorEmails) {
      var emailTypes = Object.keys(vendorEmails);
      var vendorEmailContainer = document.createElement('dl');
      for (var j = 0; j < emailTypes.length;j++){
        var emailType = emailTypes[j];
        var emailDt = document.createElement('dt');
        emailDt.textContent = emailType;
        var emailDd = document.createElement('dd');
        var emailLink = document.createElement('a');
        var emailAddress = vendorEmails[emailType];
        emailLink.textContent = emailAddress;
        emailLink.href = 'mailto:' + encodeURIComponent(emailAddress) +
          '?subject=' + encodeURIComponent(defaultEmailSubject);
        emailDd.appendChild(emailLink);
        vendorEmailContainer.appendChild(emailDt);
        vendorEmailContainer.appendChild(emailDd);
      }
      vendorContainer.appendChild(vendorEmailContainer);
      contactContainer.appendChild(vendorContainer);
    }
    var vendorNotes = vendorInfo[vendorName].notes;
  }
}

if (vendorsGistId) {
  startEverything();
} else {
  gistPrompt.showModal();
}

gistForm.addEventListener("submit", function(evt) {
  vendorsGistId = gistachio.parseGistId(gistIdInput.value);
  localStorage.setItem('gistId', vendorsGistId);
  startEverything();
});

function startEverything() {
  gistachio.getFiles(vendorsGistId, function gistRetrieval(err, files) {
    if (err) return console.error(err);
    else return populateVendors(jsyaml.load(files["vendors.yaml"]));
  });
}

var actionSelect = document.getElementById('action-select');
var ponumInput = document.getElementById('ponum-input')

function addItem() {

}

