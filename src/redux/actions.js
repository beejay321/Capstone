const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

export const loggedInAction = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const details = {
        email: user.username,
        password: user.password,
      };

      const res = await fetch(`${MY_APP_API_URL}/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        localStorage.setItem("username", json.username);
        localStorage.setItem("id", json._id);
        dispatch({
          type: "LOGGED_IN",
          payload: true,
        });
        dispatch({
          type: "GET_USERNAME",
          payload: json.username,
        });
        // alert("successfully logged in");
      } else {
        console.log("there is an error");
      }
    } catch (error) {
      console.log(error);
      alert(error);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: true,
      });
    }
  };
};
