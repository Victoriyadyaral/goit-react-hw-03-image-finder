const API_KEY = '22396340-e0d4683315286afcf7ffb4767';
const BASE_URL = 'https://pixabay.com/api';

function fetchImage(requestTerm, page) {

  const url = `${BASE_URL}/?q=${requestTerm}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`No results on request ${requestTerm}`));
  });
}

const api = {
  fetchImage,
};

export default api;