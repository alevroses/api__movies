import { autorization } from "./authorization.mjs";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: autorization,
  },
};

const getTv = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?page=1",
    options
  );

  const data = await response.json();
  console.log(data);
  return data;
};

export { getTv };
