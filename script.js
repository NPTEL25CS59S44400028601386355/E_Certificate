document.getElementById('downloadBtn').addEventListener('click', function() {
    // Creating a sample PDF URL - Replace this with your actual certificate PDF URL
    const pdfUrl = 'sample-certificate.pdf';
    
    // Creating an anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course-certificate.pdf';
    
    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});