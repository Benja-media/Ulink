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
  var icon_clr = jsonObj["icon"]
  /* Image style */
    var doc = document.documentElement.style
    doc.setProperty('--color', jsonObj["img_main_color"]);
    doc.setProperty('--tr_spd', jsonObj["img_speed"]);
    doc.setProperty('--image', "url(" +jsonObj["img_image"] + ")");
    doc.setProperty('--hover_color', jsonObj["img_hover_color"]);
  /* Gradient style */
    doc.setProperty('--1', jsonObj["gdr_1"]);
    doc.setProperty('--2', jsonObj["gdr_2"]);
    doc.setProperty('--Direction', jsonObj["gdr_direction"])
    doc.setProperty('--clr', jsonObj["gdr_color"])

}


/*
  "gdr_direction":"to right",
  "gdr_color":"white"
  */
