gapi.load("client", loadClient);

function loadClient() {
    gapi.client.setApiKey("AIzaSyA7J8fK1MTQkZVVQfGUsqXjbHwaXhvNvpw");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

const catId = document.getElementById('music');
const catId2 = document.getElementById('gaming');
const catId3 = document.getElementById('news');
const catId4 = document.getElementById('sports');
const catId5 = document.getElementById('movies');
const catId6 = document.getElementById('auto');
const catId7 = document.getElementById('pets');
const catId8 = document.getElementById('edu');
const catId9 = document.getElementById('blogs');
const catId10 = document.getElementById('travel');
const videoList = document.getElementById('videoListContainer');

function paginate(e, obj) {
    e.preventDefault();
    pageToken = obj.getAttribute('data-id');
    execute();
}

// Make sure the client is loaded before calling this method.
function execute() {
    const cat = catId.value;

    var arr_search = {
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "maxResults": 50,
        "videoCategoryId": cat
    };

    return gapi.client.youtube.videos.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Music Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id;
                        const videoTitle = item.snippet.title;
                        const vc = item.statistics.viewCount;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>Title: ${videoTitle}</p>
                    <p>Views: ${vc}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute2() {
    const cat2 = catId2.value;

    var arr_search = {
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "maxResults": 50,
        "videoCategoryId": cat2
    };

    return gapi.client.youtube.videos.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Gaming Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id;
                        const videoTitle = item.snippet.title;
                        const vc = item.statistics.viewCount;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>Title: ${videoTitle}</p>
                    <p>Views: ${vc}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute3() {
    const cat3 = catId3.value;

    var arr_search = {
        "part": [
            "snippet"
        ],
        "maxResults": 50,
        "order": "relevance",
        "regionCode": "US",
        "type": [
            "video"
        ],
        "videoCategoryId": cat3
    };


    return gapi.client.youtube.search.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>News Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id.videoId;
                        const videoTitle = item.snippet.title;

                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a>
                    <p>${videoTitle}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute4() {
    const cat4 = catId4.value;

    var arr_search = {
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "maxResults": 50,
        "videoCategoryId": cat4
    };


    return gapi.client.youtube.videos.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Sports Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id;
                        const videoTitle = item.snippet.title;
                        const vc = item.statistics.viewCount;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>Title: ${videoTitle}</p>
                    <p>Views: ${vc}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute5() {
    const cat5 = catId5.value;

    var arr_search = {
        "part": [
            "snippet"
        ],
        "maxResults": 50,
        "order": "relevance",
        "regionCode": "US",
        "type": [
            "video"
        ],
        "videoCategoryId": cat5
    };


    return gapi.client.youtube.search.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Movies Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id.videoId;
                        const videoTitle = item.snippet.title;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a>
                    <p>${videoTitle}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute6() {
    const cat6 = catId6.value;

    var arr_search = {
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "maxResults": 50,
        "videoCategoryId": cat6
    };


    return gapi.client.youtube.videos.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Auto Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id;
                        const videoTitle = item.snippet.title;
                        const vc = item.statistics.viewCount;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>Title: ${videoTitle}</p>
                    <p>Views: ${vc}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute7() {
    const cat7 = catId7.value;

    var arr_search = {
        "part": [
            "snippet,contentDetails,statistics"
        ],
        "chart": "mostPopular",
        "maxResults": 50,
        "videoCategoryId": cat7
    };


    return gapi.client.youtube.videos.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Pets Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id;
                        const videoTitle = item.snippet.title;
                        const vc = item.statistics.viewCount;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>Title: ${videoTitle}</p>
                    <p>Views: ${vc}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute8() {
    const cat8 = catId8.value;

    var arr_search = {
        "part": [
            "snippet"
        ],
        "maxResults": 50,
        "regionCode": "US",
        "type": [
            "video"
        ],
        "videoCategoryId": cat8
    };


    return gapi.client.youtube.search.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Education Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id.videoId;
                        const videoTitle = item.snippet.title;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a>
                    <p>${videoTitle}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute9() {
    const cat9 = catId9.value;

    var arr_search = {
        "part": [
            "snippet"
        ],
        "maxResults": 50,
        "regionCode": "US",
        "type": [
            "video"
        ],
        "videoCategoryId": cat9
    };


    return gapi.client.youtube.search.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Blogs Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id.videoId;
                        const videoTitle = item.snippet.title;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a>
                    <p>${videoTitle}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}

function execute10() {
    const cat10 = catId10.value;

    var arr_search = {
        "part": [
            "snippet"
        ],
        "maxResults": 50,
        "type": [
            "video"
        ],
        "videoCategoryId": cat10
    };


    return gapi.client.youtube.search.list(arr_search)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                const listItems = response.result.items;
                if (listItems) {
                    let output = '<h4>Travel Videos</h4><ul>';

                    listItems.forEach(item => {
                        const videoId = item.id.videoId;
                        const videoTitle = item.snippet.title;
                        output += `
                    <li><div class="solid"><a class="inner" data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a>
                    <p>${videoTitle}</p></div></li>`;
                    });
                    output += '</ul>';

                    // Output list
                    videoList.innerHTML = output;
                }
            },
            function(err) { console.error("Execute error", err); });
}