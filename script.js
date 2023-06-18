function readFile(file) {
    var reader = new FileReader();
    var cnt="";
    reader.onload = function(event) {
      var fileContent = event.target.result;
      // Do something with the file content
    //   console.log(fileContent);
    document.getElementById("output-area1").textContent+=fileContent
    };
    
    reader.readAsText(file);
  }
  
  // Example usage:
  var input = document.getElementById('file-input'); // Replace 'file-input' with your file input element ID
  input.addEventListener('change', function(e) {
    var fileList = e.target.files;
    console.log(fileList)
    for(let i=0;i<fileList.length;i++){
        readFile(fileList[i])
    }
    // console.log(content)
    // if (fileList.length > 0) {
    //   var file = fileList[0];
    //   readFile(file);
    // }
  });
document.getElementById("merge-btn").addEventListener("click",(e)=>{
    downloadMergedFile(document.getElementById("output-area1").textContent)
})
  function downloadMergedFile(content) {
    var blob = new Blob([content], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var downloadLink = document.querySelector('a');
    downloadLink.href = url;
    downloadLink.download = 'merged.txt';
    downloadLink.textContent = 'Yüklə';
    // downloadLink.style.display = 'block';

    // var outputArea = document.getElementById('output-area');
    // document.getElementById("output-area1").parentNode.insertBefore(downloadLink,document.getElementById("output-area1"))
    // outputArea.append(downloadLink);
}
