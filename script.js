/* global gistachio jsyaml */

var vendorSelect = document.getElementById('vendor-select');

var vendorsGistId = 'd068a8c1c9cd396093c4';

var vendorInfo;

function populateVendors(vendorContactInfo){
  vendorInfo = vendorContactInfo;
  
  var presentVendors = {};
  for (var i=0; i < vendorSelect.options.length; i++) {
    presentVendors[vendorSelect.options[i].text] = true;
  }
  
  var vendorList = Object.keys(vendorContactInfo);
  
  for (var i=0; i < vendorList.length; i++) {
    var vendorName = vendorList[i];
    if (!presentVendors[vendorName]) {
      var vendorOption = document.createElement('option');
      vendorOption.text = vendorName;
      vendorSelect.add(vendorOption);
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

