

// Part 4
// const http = require("http");
// const hostname = '127.0.0.1'
// const port = 4000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<h1 style="color: red">Hello World!</h1>');
//   res.write('<p>I wonder what else we can send...</p>');
//   res.end('Hello World!!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const http = require("http");
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
      case "/test":
        res.write("You've reached the test endpoint");
        break;
      case "/practice":
        res.write("You've reached the practice endpoint.");
        break;
      default:
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write("<p>I wonder what else we can send...</p>");
        break;
    }

    res.end();
  })
  .listen(3000, () => {
    console.log(`Server running.`);
  });



  //CommonJS
// const http = require("http");
// http is an object,
//createServer is a method takes callback as an argument
// 2 parameters are the req (request) and res (response)
// Its standard to use req and res as the names

// http.createServer((req, res) => {});

// The response object allows us to set the HTTP status code, headers, content, and more.
//For a full breakdown of the available response object properties and methods,
//see the Node documentation.
// http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write("Hello World");
//   res.end();
// });
//Tell the server to listen for the requests using the liste method
//This method accrpts nan optional port, hostname and callback function
// http
//   .createServer((req, res) => {
//     switch (req.url) {
//       case "/test/":
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.write("Hello World");
//         res.end();
//         break;
//     case '/':
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.write("Home Page");
//         res.end();
//         break;
//     // default:
//     //         res.statusCode = 404;
//     //         res.setHeader("Content-Type", "text/html");
//     //         res.write("Not found");
//     //         res.end();
//     //         break;

//     }
//   })
//   .listen(3000, () => {
//     //3000 is the port, 3000-8000 is the range
//     console.log(`Server running.`); //set the server to listen to port 3000, and log when it starts.
//   });