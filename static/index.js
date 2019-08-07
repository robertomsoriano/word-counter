/*
Get current number of words counted.
Function updates the UI based on the current 
"count" value.
*/

function getCount() {
  fetch("/count")
    .then(res => res.json())
    .then(res => {
      if (res.count === null || res.count === 0) {
        let paragraph = document.getElementById("current");
        paragraph.textContent = `No words have been counted yet. Be the first one!`;
        return;
      } else {
        let count = res.count;
        let paragraph = document.getElementById("current");
        paragraph.textContent = `Words counted: ${count}`;
        return;
      }
    });
}
// Call function on load.
getCount();

//Form submission
function postData(url = "/", data) {
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
  }).catch(err => {
    throw err;
  });
}

/*
On submission function
Take form data and run POST request.  
*/

function logSubmit(event) {
  let id = document.getElementById("inputID").value;
  let msg = document.getElementById("inputMessage").value;
  let data = {
    id: `${id}`,
    message: `${msg}`
  };
  postData("/", data);
}
//Listen for Submission
const form = document.getElementById("form-sendCount");
form.addEventListener("submit", logSubmit);
