(function () {
  var ul = document.querySelector("ul");
  ul.onclick = function (e) {
    console.log(e.target);
  };
})();
