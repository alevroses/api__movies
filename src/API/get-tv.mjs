import { autorization } from "./authorization.mjs";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: autorization,
  },
};

const getTv = async (page = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?page=${page}`,
    options
  );

  const data = await response.json();
  return data;
};

export { getTv };
