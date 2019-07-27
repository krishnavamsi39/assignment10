import * as Cookies from "js-cookie";

function fetchApiUtils(endpoint) {
  const options = {
    method: "POST",

    headers: {
      authorization: Cookies.get("login"),
      "Content-Type": "application/json"
    }
  };
  return fetch(endpoint, options);
}
export default fetchApiUtils;
