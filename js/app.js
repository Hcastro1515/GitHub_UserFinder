// //Toggle theme switcher
// const toggleButton = document.querySelector("#toggle");
// toggleButton.addEventListener("click", function(){
//     trans();
//     document.documentElement.setAttribute("data-theme", "light");

// });

// let trans = () => {
//     document.documentElement.classList.add("transition");
//     window.setTimeout(()=> {
//         document.documentElement.classList.remove("transition");
//     }, 1000)
// }

//Making API calls
const searchValue = document.querySelector("#devName");

const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", async () => {
  let gitUsername = searchValue.value;

  //api url
  const token = "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";
  const url = `https://api.github.com/search/users?q=${gitUsername}in:user`;
  const headers = {
    Accept: "application/vnd.github.v3+json",
    authorization: token,
  };
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const result = await response.json();
  console.log(result);

  searchValue.value = "";
});
