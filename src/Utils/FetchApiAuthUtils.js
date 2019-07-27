function fetchApiAuthUtils(endpoint, details) {
  const options = {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(endpoint, options);
}
export default fetchApiAuthUtils;
