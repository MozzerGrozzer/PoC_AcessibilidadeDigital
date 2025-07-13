document.getElementById('buttonThatsAnimate').addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.add('buttonAnim');
  setTimeout(() => {window.location = this.href;}, 500);});