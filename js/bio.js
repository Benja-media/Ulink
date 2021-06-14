/*Bio*/
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var Bio = JSON.parse(this.responseText);
    document.getElementById("bio").innerHTML = Bio.bio;
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();

/*ATR*/


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var Link = JSON.parse(this.responseText);
      document.getElementById("Atrubution").innerHTML =
        "This page was created by " +
        Link.user +
        "! " +
        Link.user +
        " used Ulink to create this page Click here to get yours now!";
    }
  };
  xmlhttp.open("GET", "/config.json", true);
  xmlhttp.send();



/*User*/

var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.getElementById("user").innerHTML = Link.symbol + Link.user;


        }
      };
      xmlhttp.open("GET", "/config.json", true);
      xmlhttp.send();
