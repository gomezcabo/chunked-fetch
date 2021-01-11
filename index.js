const http = require("http");

http
  .createServer(function (request, response) {
    response.setHeader("Content-Type", "text/json; charset=UTF-8");
    response.setHeader("Transfer-Encoding", "chunked");
    response.setHeader("Access-Control-Allow-Origin", "*");

    setTimeout(
      () =>
        response.write(`[
          { "fieldA": 1, "fieldB": "a", "message": "First chunk of data" },
          { "fieldA": 1, "fieldB": "a", "message": "First chunk of data" },
        `),
      1000,
    );

    setTimeout(
      () =>
        response.write(`
          { "fieldA": 2, "fieldB": "b", "message": "Second chunk of data" },
          { "fieldA": 2, "fieldB": "b", "message": "Second chunk of data" },
        `),
      2000,
    );

    setTimeout(
      () =>
        response.write(`
          { "fieldA": 3, "fieldB": "c", "message": "Third chunk of data" },
          { "fieldA": 3, "fieldB": "c", "message": "Third chunk of data" },
        `),
      3000,
    );

    setTimeout(
      () =>
        response.end(`
          { "fieldA": 4, "fieldB": "d", "message": "Last chunk of data" },
          { "fieldA": 4, "fieldB": "d", "message": "Last chunk of data" }
        ]`),
      4000,
    );
  })
  .listen(8888, null);

console.log("Server listen on port 8888");
