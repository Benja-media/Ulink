// Checking display.

console.log("Booting Instacheck...");
console.log("2021 Benja Media");
console.log("Reporting:");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var link = JSON.parse(this.responseText);
    if (
      link.link1 === null ||
      link.link1 === "" ||
      link.title1 === null ||
      link.title1 === ""
    ) {
      document.getElementById("Link1").style.display = "none";
      console.error("Link 1 || Display = none");
    }

    if (
      link.link2 === null ||
      link.link2 === "" ||
      link.title2 === null ||
      link.title2 === ""
    ) {
      document.getElementById("Link2").style.display = "none";
      console.warn("Link 2 || Display = none");
    }

    if (
      link.link3 === null ||
      link.link3 === "" ||
      link.title3 === null ||
      link.title3 === ""
    ) {
      document.getElementById("Link3").style.display = "none";
      console.warn("Link 3 || Display = none");
    }

    if (
      link.link4 === null ||
      link.link4 === "" ||
      link.title4 === null ||
      link.title4 === ""
    ) {
      document.getElementById("Link4").style.display = "none";
      console.warn("Link 4 || Display = none");
    }

    if (
      link.link5 === null ||
      link.link5 === "" ||
      link.title5 === null ||
      link.title5 === ""
    ) {
      document.getElementById("Link5").style.display = "none";
      console.warn("Link 5 || Display = none");
    }

    if (
      link.link6 === null ||
      link.link6 === "" ||
      link.title6 === null ||
      link.title6 === ""
    ) {
      document.getElementById("Link6").style.display = "none";
      console.warn("Link 6 || Display = none");
    }

    if (
      link.link7 === null ||
      link.link7 === "" ||
      link.title7 === null ||
      link.title7 === ""
    ) {
      document.getElementById("Link7").style.display = "none";
      console.warn("Link 7 || Display = none");
    }

    if (link.topic1 === null || link.topic1 === "") {
      document.getElementById("Topic 1").style.display = "none";
      console.warn("Topic 1 || Display = none");
    }

    if (link.topic2 === null || link.topic2 === "") {
      document.getElementById("Topic 2").style.display = "none";
      console.warn("Topic 2 || Display = none");
    }
    if (link.photo === null || link.photo === "") {
      console.warn("Photo || Display = none")
      console.error("Profile photo is required!")
    }
  }
};
xmlhttp.open("GET", "/config.json", true);
xmlhttp.send();
