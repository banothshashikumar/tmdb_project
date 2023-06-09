const API_KEY = 'api_key=ff66bab726f1691ab37b93e8322b3905';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

fetch(API_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const ans = data.results;
    let data1 = "";
    ans.map(values => {
      data1 += `
      <div class="grid">
      <div class="thumbnail-row">
          <img class="thumbnail" src="${IMG_URL}${values.poster_path}" alt=""  />
      </div>
      <p class="title">
      ${values.title}
      </p>
  </div>
      `;
    });
    document.getElementById("container").innerHTML = data1;
  })
  .catch(error => console.log('ERROR'));