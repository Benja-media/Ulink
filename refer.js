      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.title = Link.symbol + Link.user + " | Instalink";


        }
      };
      xmlhttp.open("GET", "link.json", true);
      xmlhttp.send();


  window.location.href = "https://github.com/Benjamin-del/instalink"
