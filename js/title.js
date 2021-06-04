function title() {
var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.getElementById("user").innerHTML = Link.symbol + Link.user;





        }
      };
      xmlhttp.open("GET", "/config.json", true);
      xmlhttp.send();
}