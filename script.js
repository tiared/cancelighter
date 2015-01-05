/* global XLSX */
var fileInput = document.getElementById("order-change-file");
var mailOl = document.getElementById("mail-link-list");

function handleFile(e) {
  var files = fileInput.files;
  var i,f;
  for (i = 0, f = files[i]; i != files.length; ++i) {
    var reader = new FileReader();
    var name = f.name;
    reader.onload = readWorkbook;
    reader.readAsBinaryString(f);
  }
  function readWorkbook(e) {
    var data = e.target.result;

    var workbook = XLSX.read(data, {type: 'binary'});

    makeMailLinks(workbook);
  };
}

function makeMailLinks(workbook) {
  
}

fileInput.addEventListener('change', handleFile, false);
