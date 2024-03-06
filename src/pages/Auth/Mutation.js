export const mutationLogin = async () => {
    // calling TMBD APi to create a guest session
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGRlMWJhNDA5MTE3YjU2Y2RiMzk1ZmRjNDI2MGI1MCIsInN1YiI6IjY1ZGUyMDhjYzkyYzVkMDE3YzQ4N2Q1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.99zSdkjP2tu5PJ_bFzkdzFdOvjDxs1ITQ6AII-6NMjA",
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  console.log(res);
  return res.json();
};
