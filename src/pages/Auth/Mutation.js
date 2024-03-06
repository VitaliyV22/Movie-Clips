import axios from "axios";

export const mutationLogin = async () => {
  const APITOKEN = import.meta.env.VITE_API_KEY;

  const guestSess = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/guest_session/new",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APITOKEN}`,
    },
  };

  axios
    .request(guestSess)
    .then(function (response) {
      // setting the guest ID to local storage 
      const guestID = response.data.guest_session_id
      
      localStorage.setItem("guest_id", guestID);
    })
    .catch(function (error) {
      console.error(error);
    });
};
