const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('resume');

dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('highlight');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('highlight');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('highlight');

  if (e.dataTransfer.files.length) {
    fileInput.files = e.dataTransfer.files;
    dropZone.querySelector('p').textContent = `File: ${e.dataTransfer.files[0].name}`;
    dropZone.classList.add('drop-animate');
    setTimeout(() => {
      dropZone.classList.remove('drop-animate');
    }, 800);
  }
});
