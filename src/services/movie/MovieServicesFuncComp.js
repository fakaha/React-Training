import axios from "axios";

export const fetchPopularMovie = (callback) => {  
    axios.get(
      `${process.env.REACT_APP_SERVER}api/v1/movie/popular`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    ).then((res) => {
      console.log('API Response:', res.data.data);
        callback(res.data.data)
    })
    .catch((err) => {
      console.error('API Error:', err);
        console.log(err);
    })
};

export const fetchSearchMovie = (query, callback) => {
  axios.get(
    `${process.env.REACT_APP_SERVER}api/v1/search/movie?page=1&query=${query}`,
    {
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      }
    }
  ).then((res) => {
    console.log(res.data.data, 'API search response');
    callback(res.data.data)
  })
  .catch((err) => {
    console.log(err);
  })
}