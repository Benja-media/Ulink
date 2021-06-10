var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var Topic = JSON.parse(this.responseText);
    document.getElementById("Topic 1").innerHTML = Topic.Topic1;
    document.getElementById("Topic 2").innerHTML = Topic.Topic2;
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();
