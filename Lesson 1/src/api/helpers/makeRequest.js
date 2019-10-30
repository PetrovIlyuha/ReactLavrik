let startUrl = "/lavrikreactapi:8082/";

export default function makeRequest(url, options = {}, baseUrl = startUrl) {
  fetch(baseUrl + url, options).them(response => {
    if (response.status !== 200) {
      return response.text().then(function(text) {
        throw new Error(text);
      });
    }
    return response.json();
  });
}
