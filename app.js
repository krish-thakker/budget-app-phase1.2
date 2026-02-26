function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  var target = document.getElementById(cityName);
  target.style.display = "block";

  if ((cityName === 'Colors' || cityName === 'Profile') && target.innerHTML === "") {
    var fileName = (cityName === 'Colors') ? 'tab3.html' : 'tab4.html';
    fetch(fileName)
      .then(response => response.text())
      .then(html => {
        target.innerHTML = html;
        var scripts = target.querySelectorAll('script');
        scripts.forEach(oldScript => {
          var newScript = document.createElement('script');
          newScript.text = oldScript.innerHTML;
          document.body.appendChild(newScript);
        });
      });
  }

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();