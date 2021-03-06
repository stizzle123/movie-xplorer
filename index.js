let results = "";
const app = document.getElementById("app");
const container = document.getElementById("listshows");
let output = "";

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const URL =
  "https://api.themoviedb.org/3/tv/popular?api_key=a4d9ad8d2d072c50dc998cc0d1a508fa&language=en-US&page=1";

fetch(URL)
  .then(response => response.json())
  .then(data => {
    let tvshows = data.results;
    console.log(tvshows);
    return tvshows.map(tvshow => {
      // let li = createNode('li'),
      // 	img = createNode('img'),
      // 	span = createNode('span');
      // 	img.src = `https://image.tmdb.org/t/p/w185/${tvshow.poster_path}`;
      // 	console.log(img.src)
      // span.innerHTML = `<br>Name -${tvshow.original_name}<br> Overview - ${tvshow.overview.slice(0, 500)}<br> First Air-Date - ${tvshow.first_air_date}<br> Vote Average ${tvshow.vote_average}`;
      // append(li, img);
      // append(li, span);
      // append(ul, li);
      output += `
	  <div class="shows-content">
		<li class="shows-img">
			<img src="https://image.tmdb.org/t/p/w400/${tvshow.poster_path}" alt="${
        tvshow.original_name
      }" height="500px">
		</li>
		<div class="shows-details">
			<li>
				<span class="shows-title">${tvshow.original_name}</span>
			</li>
			<li>
			<span class="shows-title">Overview</span> &mdash; ${tvshow.overview.slice(
        0,
        500
      )} First Air-Date - ${tvshow.first_air_date}Vote Average ${
        tvshow.vote_average
      }
			</li>
		</div>
	  </div>
	  `;
      container.innerHTML = output;
    });
  });

search = () => {
  let input, filter, ul, li, span, i;
  input = document.getElementById("movieInput");
  filter = input.value.toUpperCase();
  ul = document.getElementsByTagName("ul");
  li = document.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[0];
    if (span.textContent.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
};
