gapi.load("client", loadClient);

function loadClient() {
    gapi.client.setApiKey("AIzaSyA7J8fK1MTQkZVVQfGUsqXjbHwaXhvNvpw");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

const ytForm = document.getElementById('yt-form');
const orderInput = document.getElementById('order-input');
const videoList = document.getElementById('videoListContainer');
var pageToken = '';

ytForm.addEventListener('submit', e => {
    e.preventDefault();
    execute();
});

function paginate(e, obj) {
    e.preventDefault();
    pageToken = obj.getAttribute('data-id');
    execute();
}

// Make sure the client is loaded before calling this method.
function execute() {
    const orderby = orderInput.value;

    var arr_search = {
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "maxResults": 50,
        "regionCode": orderby
    };

    if (pageToken != '') {
        arr_search.pageToken = pageToken;
    }

    return gapi.client.youtube.videos.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Trending Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id;
                        const videoTitle = item.snippet.title;
                        output += `
                    <li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>${videoTitle}</p></li>
                `;
                    });
                    output += '</ul>';

                    if (response.result.prevPageToken) {
                        output += `<br><a class="inner" href="#" data-id="${response.result.prevPageToken}" onclick="paginate(event, this)">Prev</a>`;
                    }

                    if (response.result.nextPageToken) {
                        output += `<a href="#" class="inner" data-id="${response.result.nextPageToken}" onclick="paginate(event, this)">Next</a>`;
                    }

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}