  function fetchImage(term) {
  return fetch(`https://pixabay.com/api/?key=22396340-e0d4683315286afcf7ffb4767&q=${term}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`No results on request ${term}`));
  });
}

const api = {
  fetchImage,
};

export default api;