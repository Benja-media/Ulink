      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.getElementById("Link5").innerHTML = Link.title5;

        }
      };
      xmlhttp.open("GET", "/config.json", true);
      xmlhttp.send();

      function click5() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Link = JSON.parse(this.responseText);
            document.getElementById("Link5").innerHTML =
              Link.msg + "&nbsp;" + Link.link5;
            console.log = Link.msg + "&nbsp;" + Link.link5;
            window.location.href = Link.link5;
          }
        };
        xmlhttp.open("GET", "/config.json", true);
        xmlhttp.send();
      }

     