const http = require("http");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");

  if (url === "/") {
    res.statusCode = 200;
    res.write("<h1>Manai delguurt tavtai moril</h1>");
    res.write(`<br><br>Login hiihiin tuld <a href="/login">END DARNA UU</a> `);
    res.end();
  } else if (url === "/login") {
    // Login form html butsaana
    res.statusCode = 200;
    res.write("<h1>Login hiih</h1>");
    res.write(`<form action="/logincheck" method="POST"> `);
    res.write(`<br><input type="text" name="email" /> `);
    res.write(`<br><input type="password" name="password" /> `);
    res.write(`<br><input type="submit" value="Login" /> `);
    res.write(`<form /> `);
    res.end();
  } else if (url === "/logincheck" && method === "POST") {
    // login hiisnii daraa usreh heseg
    res.statusCode = 200;
    res.write("<h1>Login hiij uzlee...</h1>");
    res.write("<br><h1>" + method + "</h1>");
    res.end();
  } else if (url === "/home") {
    // login hiisnii daraa usreh heseg
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("http сэрвэр 5000 порт дээр аслаа...");
});
