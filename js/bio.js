/*ATR*/
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var atr = JSON.parse(this.responseText);
      document.getElementById("Atrubution").innerHTML = "This page was made with ❤️ by Benja Media and " + atr.name
    }
  };
  xmlhttp.open("GET", "/config/config.json", true);
  xmlhttp.send();



/*User*/

var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.getElementById("user").innerHTML = Link.symbol + Link.user;


        }
      };
      xmlhttp.open("GET", "/config/config.json", true);
      xmlhttp.send();
