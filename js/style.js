let styleURL = "/config/style.json";
let style = new XMLHttpRequest();
style.open("GET", styleURL);
style.responseType = "text";
style.send();

style.onload = function() {
  const js_res = style.response;
  const js_par = JSON.parse(js_res);
  icon_style(js_par);
};

function icon_style(jsonObj) {
  var icon_clr = jsonObj["icon"];
  /* Image style */
  var doc = document.documentElement.style;
  doc.setProperty("--color", jsonObj["img_main_color"]);
  doc.setProperty("--tr_spd", jsonObj["img_speed"]);
  doc.setProperty("--image", "url(" + jsonObj["img_image"] + ")");
  doc.setProperty("--hover_color", jsonObj["img_hovercolor"]);
  /* Gradient style */
  doc.setProperty("--1", jsonObj["gdr_1"]);
  doc.setProperty("--2", jsonObj["gdr_2"]);
  doc.setProperty("--Direction", jsonObj["gdr_direction"]);
  doc.setProperty("--clr", jsonObj["gdr_color"]);
  doc.setProperty("--font_size", jsonObj["root_fontsize"]);
  doc.setProperty("--width", jsonObj["root_width"]);
  doc.setProperty("--fontfamily", jsonObj["root_fontfamily"])
  doc.setProperty("--fontname",jsonObj["root_fontname"])
  
  var stElem = document.createElement("div");
  stElem.innerHTML =
    '<link href="https://fonts.googleapis.com/css2?family=' + jsonObj["root_fontname"] + '" rel="stylesheet">';
  document.head.appendChild(stElem);
}

/*
{
  "root_fontsize":"1em",
  "root_width":"70%",
  "root_fontfamily":"sans-serif",
  "root_fontname":"Roboto",
  
  "img_icon":"#1A4EB4",
  "img_main_color":"#1A4EB4",
  "img_speed":"0.3s",
  "img_image":"https://live.staticflickr.com/65535/51711634426_458cef5415_h.jpg",
  "img_hovercolor":"white",
  
  "gdr_1":"red",
  "gdr_2":"yellow",
  "gdr_direction":"to right",
  "gdr_color":"white"
}
*/