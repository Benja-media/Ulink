window.onload = title()
var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.title = Link.name + " |   Ulink"


        }
      };
      xmlhttp.open("GET", "/config.json", true);
      xmlhttp.send();


function title() {
  var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.title = Link.user + " | Ulink"


        }
      };
      xmlhttp.open("GET", "/config.json", true);
      xmlhttp.send();

  
}
