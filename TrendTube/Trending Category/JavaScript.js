$(document).ready(function () {
        document.getElementById("Logo").onclick = function () {
            document.location = "index.html";
        }

}
)
 function newAdded() {
        $.getJSON("music.json", function (myData) {
            for (let i = 0; i < myData.length; i++) {
              var showID = (myData[i].show_id).toString();
                    var aListing = document.createElement("div");
                    aListing.id = "anElement";
                    aListing.innerHTML = (
                        "<div id=image>" +
                        "<img src='images/netflix-thumbnail.jpg' " +
                        "</div>")

            };

            }