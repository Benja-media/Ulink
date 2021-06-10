/*Bio*/
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var no = JSON.parse(this.responseText);
    document.getElementById("bio").innerHTML = no.name + " Has not setup this link! Please try a different link";
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();

/*ATR*/

window.onload = title();

function title() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var Link = JSON.parse(this.responseText);
      document.getElementById("Atrubution").innerHTML =
        "This page was created by " +
        Link.user +
        "! " +
        Link.user +
        " used InstaLink to create this page Click here to get yours now!";
    }
  };
  xmlhttp.open("GET", "/config.json", true);
  xmlhttp.send();
}


/*User*/

var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.getElementById("user").innerHTML = Link.symbol + Link.user;
          document.getElementById("name").innerHTML = Link.name;



        }
      };
      xmlhttp.open("GET", "/config.json", true);
      xmlhttp.send();