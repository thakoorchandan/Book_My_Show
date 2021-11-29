var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/title/find",
  params: { q: "death race" },
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "16d044cab1msh3178dbd191e3911p13daf8jsn5d855baaeaa3",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
