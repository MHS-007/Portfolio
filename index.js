
document.getElementById("downloadButton").addEventListener("click", function() {
    var pdfUrl = 'My-Resume.pdf';
    
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'myresume.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
  });