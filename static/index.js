function getCount() {
  fetch("http://127.0.0.1/count")
    .then(res => res.json())
    .then(res => {
      console.log(res);

      if (res.count === null || res.count === 0) {
        let paragraph = document.getElementById("current");
        paragraph.textContent = `No words have been counted yet. Be the first one!`;
        return;
      } else {
        let count = res.count;
        console.log(count);
        let paragraph = document.getElementById("current");
        paragraph.textContent = `Words counted: ${count}`;
        return;
      }
    });
}
getCount();

//Form submission
function postData(url = "http://127.0.0.1", data) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => {
    console.log(res);
  });
}

//On submission function
function logSubmit(event) {
  let id = document.getElementById("inputID").value;
  let msg = document.getElementById("inputMessage").value;
  let data = {
    id: `${id}`,
    message: `${msg}`
  };
  console.log(data);
  postData("http://127.0.0.1", data);
}
//Listen for Submission
const form = document.getElementById("form-sendCount");
form.addEventListener("submit", logSubmit);
