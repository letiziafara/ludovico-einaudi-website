function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("myInnerTopnav");
  var z = document.getElementById("myBannerText");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.className += " responsive";
    z.className += " responsive";
  }else {
    x.className = "topnav";
    y.className = "topnav-right";
    z.className = "banner-text";
  }
}
