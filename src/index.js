const $form = document.getElementById("search_form");
const $input = document.getElementById("search");
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newQuery = location.search.split("&").map((query) => {
    if (query.includes("?q=")) {
      return `${query.split("=")[0]}=${$input.value}`;
    } else {
      return query;
    }
  });
  location.search = newQuery;
});
