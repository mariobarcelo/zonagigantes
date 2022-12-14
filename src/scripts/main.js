const API =
	"https://youtube-v31.p.rapidapi.com/search?channelId=UC9MUffNRPYDd3S2JlVXpBlw&part=snippet%2Cid&order=date&maxResults=9";

const content = null || document.getElementById("content");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "53395de7bemsh3ad7af5ec98d194p188ffdjsn75672ef848b3",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
}

(async () => {
	try {
		const videos = await fetchData(API);
		let view = `
    ${videos.items
			.map(
				(video) => `
          <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank class="group relative hover:cursor-pointer">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                ${video.snippet.title}
              </h3>
            </div>
          </a>
        `
			)
			.slice(0, 8)
			.join("")}
    `;
		content.innerHTML = view;
	} catch (error) {
		console.log(error);
	}
})();
