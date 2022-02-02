/* Query DIV */
const header = document.getElementById("head");
const section = document.getElementById("links");
/* Query JSON */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var json_res = JSON.parse(this.responseText);
    /* Please leave me!*/
    document.getElementById("Attribution").innerHTML =
     "This page was made with ❤️ by Benja Media and " + json_res.name;
    document.title = json_res.display + " |   Ulink";

    /* Call Head */
    head();
    /* Call links */
    links();
    /* Write head */
    function head() {
      const profile = document.createElement("img");
      profile.src = json_res.photo;
      header.appendChild(profile);

      const user = document.createElement("a");
      user.textContent = json_res.name;
      user.setAttribute("href", json_res.profile);
      user.setAttribute("class", "h1");
      user.setAttribute("id", "h1");
      header.appendChild(user);

      const username = document.createElement("p");
      username.textContent = json_res.symbol + json_res.user;
      header.appendChild(username);
    }
    /* Write links */
    function links() {
      const links = json_res.links;
      console.log("Found " + links.length + " Links");

      for (let i = 0; i < links.length; i++) {
        const list = document.createElement("div");
        const h2 = document.createElement("h2");
        const link = document.createElement("a");
        const url = document.createElement("p");
        const myList = document.createElement("ul");

        h2.textContent = links[i].name;
        link.textContent = links[i].title;
        link.setAttribute("href", links[i].url);
        link.setAttribute("class", "link");
        link.setAttribute("id", links[i].id + "-title");

        list.appendChild(h2);
        list.appendChild(link);
        list.appendChild(url);
        list.appendChild(myList);

        section.appendChild(list);
      }
    }
  }
};
xmlhttp.open("GET", "/config/config.json", true);
xmlhttp.send();
