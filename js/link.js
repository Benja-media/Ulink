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
			profile.setAttribute("class","prf-img")
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
      const links = json_res.body;
      console.log("Found " + links.length + " Links");

      for (let i = 0; i < links.length; i++) {
				if (links[i].type === "link") {
  	      const list = document.createElement("div");
  	      const link = document.createElement("a");
	
   	     link.textContent = links[i].title;
   	     link.setAttribute("href", links[i].url);
   	     link.setAttribute("class", "link");
   	     link.setAttribute("id", i + "-title");

        	list.appendChild(link);

        	section.appendChild(list);
      	} else if (links[i].type === "title") {
					const list = document.createElement("div")
					const title = document.createElement("h2")
					
					title.textContent = links[i].title
					
					list.appendChild(title)
					section.appendChild(list);
				} else if (links[i].type === "image") {
					if (links[i].url === undefined || links[i].url === "none") {
						var list = document.createElement("div")
					} else {
						var list = document.createElement("a")
						list.setAttribute("href",links[i].url)
					}
					list.setAttribute("class","list-img-div")
					const img = document.createElement("img")
					
					img.src = links[i].src
					img.setAttribute("class","list-img")
					
					list.appendChild(img)
					section.appendChild(list);
				} else {
					console.log("Unknown type: " + links[i].type)
				}
    	}
 	 	}
	}
};
xmlhttp.open("GET", "config/config.json", true);
xmlhttp.send();
