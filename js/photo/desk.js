var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.responseText);
    var link = document.createElement("a");
    link.style.position = "absolute";
    link.style.top = json.img_top +"px";
    link.style.left = json.img_left +"%";
    link.style.margin = json.img_margin;
    link.style.borderRadius = "25px"
    link.href = json.media + "/" + json.user_url;
    link.alt = "Go to " + json.user + "&#39;s " + json.media_name + "!";

    var img = document.createElement("img");
    img.src = json.photo;
    link.appendChild(img);

    document.body.appendChild(link);
    document.getElementById("img").style.borderRadius = "25px";
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();
