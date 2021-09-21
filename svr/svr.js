var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var SVR = JSON.parse(this.responseText);
    //THIS IS A PRE-PROGRAMED EXTRA

    if (SVR.NOTIF === "ENB") {
      var script_tag = document.createElement("script");
      script_tag.setAttribute(
        "src",
        "/extras/notif.js"
      );
      document.head.appendChild(script_tag);
      console.log("NOTIF_ENB");
    }

    
     if (SVR.INFO === "ENB") {
      var script_tag = document.createElement("script");
      script_tag.setAttribute(
        "src",
        "/extras/info.js"
      );
      document.head.appendChild(script_tag);
      console.log("NOTIF_ENB");
    }

    
    
    console.log("SVR MD = " + SVR.MD);

    if (SVR.MD === "ENB" || SVR.MD === "DBG" || SVR.MD === "RUN") {
      if (SVR.MD === "DBG") {
        // DEBUG MD - Set mode to "DBG" to start
        var script_tag = document.createElement("dbg");
        script_tag.setAttribute("src", "/dbg.js");
        document.head.appendChild(script_tag);
      }

      if (SVR.MD === "CLO") {
        var script_tag = document.createElement("script");
        script_tag.setAttribute("src", "/clo.js");
        document.head.appendChild(script_tag);
      }

      if (SVR.MD === "RUN") {
        console.log("SERVER IS OPEN");
      }
    } else {
      alert("SVR MD NOT RECONISED");
    }
  }
};
xmlhttp.open("GET", "/svr/svr.json", true);
xmlhttp.send();
