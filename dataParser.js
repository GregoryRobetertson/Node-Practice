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
