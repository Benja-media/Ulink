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
    var img_elem = document.createElement("a");

    img_elem.style.position = "absolute";
    img_elem.style.left = width + "px";
    img_elem.style.right= width +  "px"; 
    /*img_elem.style.top = "10px";*/
    img_elem.style.margin = json.img_margin;
    img_elem.style.borderRadius = "50%";
    img_elem.href = json.media + "/" + json.user_url;
    img_elem.alt = "Go to " + json.user + "&#39;s " + json.media_name + "!";

    var img = document.createElement("img");
    img.src = json.photo;
    img_elem.appendChild(img);

    document.body.appendChild(img_elem);
    document.getElementById("img").style.borderRadius = "25px";
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();
