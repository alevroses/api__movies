import { autorization } from "../API/authorization.mjs";

/* const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRjZWZhYzNhM2QyMzRjNThlZjQ2OTAzY2U3ZWJkMyIsInN1YiI6IjY1NjIxMjMyYTZjMTA0MDBmZWIwYjc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w49IQG4OZJuFx_It37mXvTWZtbyWPFHotHB0yEA2dP0",
  },
}; */

const getMoviesGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: autorization,
      },
    }
  );
  const data = await response.json();

  return data;
};

export { getMoviesGenres };
