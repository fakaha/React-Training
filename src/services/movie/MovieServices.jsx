import axios from "axios"


class MovieServices {

  fetchPopularMovie = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}api/v1/movie/popular`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      console.log('popular movie : ', response.data);
      return response.data.data;
    } catch (error) {
      console.log("Error fetching API : ", error);
    }
  };


  fetchDetailMovie = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}api/v1/movie/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.log("Error fetching API : ", error);
    }
  };


  fetchSearchMovie = async (querySearch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}api/v1/search/movie?page=1&query=${querySearch}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.log("Error fetching API : ", error);
    }
  };


}

const movieServiceInstance = new MovieServices();
export default movieServiceInstance