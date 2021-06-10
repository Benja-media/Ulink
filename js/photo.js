var width = window.innerWidth / 2 - 50;
// Recomended value is -50px
window.onresize = function(){ location.reload(); }

console.log("Width = "+  window.innerWidth);
console.log("Picture = "+ width);

// This is so that the image is positioned in the center every time
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.responseText);
    var link = document.createElement("a");

    link.style.position = "absolute";
    link.style.left = width + "px";
    link.style.right= width +  "px"; 
    link.style.top = json.img_top + "px";
    link.style.margin = json.img_margin;
    link.style.borderRadius = "25px";
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
