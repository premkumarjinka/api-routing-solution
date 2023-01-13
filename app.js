const differentStrings = require("express");
const call = differentStrings();

call.get("/", (request, response) => {
  response.send("Home Page");
});
call.get("/about", (request, response) => {
  response.send("About Page");
});

call.listen(3000);

module.exports = call;
