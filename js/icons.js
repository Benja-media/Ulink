const center = document.querySelector("center");

let iconURL = "/config/icon.json";
let icon = new XMLHttpRequest();
icon.open("GET", iconURL);
icon.responseType = "text";
icon.send();

icon.onload = function() {
  const js_res = icon.response;
  const js_par = JSON.parse(js_res);
  createicon(js_par);
};
function createicon(jsonObj) {
  const icons = jsonObj["icons"];
  console.log(jsonObj["icons"]);
  for (let i = 0; i < icons.length; i++) {
    const iconelem = document.createElement("i");
    iconelem.setAttribute(
      "class",
      icons[i].fa + " " + jsonObj["size"] + " " + jsonObj["space"]
    );
    iconelem.setAttribute("style", "color:" + jsonObj["color"]);
    iconelem.addEventListener("click", function() {
      window.location.href = icons[i].url;
    });

    center.appendChild(iconelem);
  }
}
