const center = document.querySelector("center");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var icon_res = JSON.parse(this.responseText);
      createicon();

    function createicon() {
      const icons = icon_res.icons;
      console.log("Found " + icons.length + " Icons");
      for (let i = 0; i < icons.length; i++) {
        const iconelem = document.createElement("i");
        iconelem.setAttribute(
          "class",
          icons[i].fa + " " + icon_res.size + " " + icon_res.space
        );
        iconelem.setAttribute("style", "color:" + icon_res.color);
        iconelem.addEventListener("click", function() {
          window.location.href = icons[i].url;
        });

        center.appendChild(iconelem);
      }
    }
  }
};
xmlhttp.open("GET", "/config/icon.json", true);
xmlhttp.send();
