/* global gistachio jsyaml */

var contactContainer = document.getElementById('contacts');

var vendorsGistId = 'd068a8c1c9cd396093c4';

var vendorInfo;

function populateVendors(vendorContactInfo){
  vendorInfo = vendorContactInfo;
  
  var vendorList = Object.keys(vendorContactInfo);
  
  for (var i=0; i < vendorList.length; i++) {
    var vendorName = vendorList[i];
    var vendorContainer = document.createElement('div');
    var vendorHeader = document.createElement('h2');
    vendorHeader.textContent = vendorName;
    vendorContainer.appendChild(vendorHeader);
    var vendorEmailHeader = document.createElement('h3');
    vendorEmailHeader.textContent = 'Emails';
    vendorContainer.appendChild(vendorEmailHeader);
    var vendorEmails = vendorInfo[vendorName].emails;
    if (vendorEmails) {
      var emailTypes = Object.keys(vendorEmails);
      var vendorEmailContainer = document.createElement('dl');
      for (var j = 0; j < emailTypes.length;j++){
        var emailType = emailTypes[j];
        var emailDt = document.createElement('dt');
        emailDt.textContent = emailType;
        var emailDd = document.createElement('dd');
        emailDd.textContent = vendorEmails[emailType];
        vendorEmailContainer.appendChild(emailDt);
        vendorEmailContainer.appendChild(emailDd);
      }
      vendorContainer.appendChild(vendorEmailContainer);
      contactContainer.appendChild(vendorContainer);
    }
  }  
}

gistachio.getFiles(vendorsGistId, function gistRetrieval(err, files) {
  if (err) return console.error(err);
  else return populateVendors(jsyaml.load(files["vendors.yaml"]));
});

var actionSelect = document.getElementById('action-select');
var ponumInput = document.getElementById('ponum-input')

function addItem() {
 
}

