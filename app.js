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

  /*
  // List of tabs that need to load from external files
  const externalTabs = ['Colors', 'Profile', 'Choices'];

  if (externalTabs.includes(cityName) && target.innerHTML === "") {
    // Maps the tab ID to the filename (e.g., Choices -> tab5.html)
    const fileMap = { 'Colors': 'tab3.html', 'Profile': 'tab4.html', 'Choices': 'tab5.html' };
    
    fetch(fileMap[cityName])
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
  */

  // List of tabs that load from other files
  const externalTabs = ['Colors', 'Profile', 'Choices', 'ToDo'];

  if (externalTabs.includes(cityName)) {
    // We define which file goes with which tab
    const fileMap = { 
      'Colors': 'tab3.html', 
      'Profile': 'tab4.html', 
      'Choices': 'tab5.html',
      'ToDo': 'tab6.html'
    };
    
    // We ALWAYS fetch so the content stays fresh and doesn't break
    fetch(fileMap[cityName])
      .then(response => response.text())
      .then(html => {
        target.innerHTML = html;
        
        // This part is CRITICAL: it re-runs the "Print" button logic
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