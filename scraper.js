"use strict";

const axios = require("axios");
const cheerio = require("cheerio");

async function getData(url) {
  try {
    const response = await axios.get(url); // Removed quotes around url variable
    const html = response.data;
    const $ = cheerio.load(html);
    const data = dataParser($);
    console.log(data);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

function dataParser($) {
  // Corrected function declaration syntax
  console.log($("h1").text());
  const extractedData = [];
  $("h1, h2, h3, h4, h5, h6").each((index, element) => {
    // Corrected selector syntax
    const title = $(element).text().trim();

    let link = $(element).find("a").attr("href");
    if (!link) {
      link = $(element).next("a").attr("href");
    }
    if (title) {
      extractedData.push({ title, link: link || "No Link found" });
    }
  });
  return extractedData; // Moved return statement outside of the each loop
}

getData("https://www.nbcnews.com/");
module.exports = dataParser;
