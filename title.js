      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.title = Link.symbol + Link.user + " | Instalink";
          document.getElementById("Atrubution").innerHTML =   "This page was created by " + Link.user + "! "+ Link.user + " used InstaLink to create this page Click here to get yours now!" ;

        }
      };
      xmlhttp.open("GET", "link.json", true);
      xmlhttp.send();


function Atrubution() {
  window.location.href = "refer.html"
}