function adjustButtonTextOnScreenSize () {
  var screenWidth = window.innerWidth;
  var Button = document.getElementById('opco');

  if (screenWidth < 767) {
    Button.textContent = '☰';
  } else {
    Button.textContent = 'Menu';
  }
}

window.addEventListener('resize', adjustButtonTextOnScreenSize);

