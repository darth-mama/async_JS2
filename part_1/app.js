let favNun = 777;
let baseURL = "http://numbersapi.com";

async function num_api() {
  let data = await $.getJSON(`${baseURL}/${favNum}?json`);
  console.log(data);
}
num_api();

const favNumbers = [1776, 1492, 22];
async function mult_num() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
mult_num();

async function four_facts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
four_facts();
