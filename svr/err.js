function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

function text() {
  document.getElementById("ERR").innerHTML =
    "You're at the error page but we have not found an error...";
  document.getElementById("Link").style.display = "none";

  if (getUrlVars()["code"] == !"403" || getUrlVars()["code"] == !"404") {
    document.getElementById("Link").style.display = "none";
    document.getElementById("ERR").innerHTML = "Whops something went wrong...";
  }

  if (getUrlVars()["code"] === "403") {
    document.getElementById("code").innerHTML =
      "The user of this Ulink instalation has closed it | 403";
    document.getElementById("back").style.display = "none";
  }

  if (getUrlVars()["loc"] === "false") {
    document.getElementById("ERR").innerHTML =
      "Home location has not been set.";
    document.getElementById("code").innerHTML =
      "You're getting this error because we do not know where to go...";
  }
  if (getUrlVars()["dbg"] === "true") {
    document.getElementById("ERR").innerHTML =
      "The user of this Ulink instalation has closed it for maintenance";
    document.getElementById("code").innerHTML =
      "403";
        document.getElementById("Link").style.display = "block";

  }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var Link = JSON.parse(this.responseText);
    document.getElementById("Link").innerHTML = Link.err_link_title;

    if (Link.err_link_title === null || Link.err_link_title === "") {
      document.getElementById("Link").style.display = "none";
    }
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();

function click1() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var Link = JSON.parse(this.responseText);
      document.getElementById("Link").innerHTML =
        Link.msg + "&nbsp;" + Link.err_link_title;
      console.log = Link.msg + "&nbsp;" + Link.err_link_title;
      window.location.href = Link.err_link_url;
    }
  };
  xmlhttp.open("GET", "/config.json", true);
  xmlhttp.send();
}

function back() {
  document.getElementById("back").innerHTML = " &#171; Going back ";

  window.history.back();
}
