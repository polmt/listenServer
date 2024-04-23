const http = require("http");

// ------- IPv4 SERVER ---------
const httpserver = http.createServer();
httpserver.on("request", (req, res) => res.end("Connected to IPv4 Server"))
httpserver.on("listening", () => {
    console.log(`IPv4 server listening on port http://127.0.0.1:${httpserver.address().port}/ on ${httpserver.address().address} family ${httpserver.address().family}`)
})
httpserver.on("error", err => console.error(`Error ${err}`))
// :: ipv6 => 0.0.0.0 ipv4
// unspecified address
// httpserver.listen(0, "127.0.0.1");
httpserver.listen(8888, "127.0.0.1"); // http://[::1]:59244


// ------- IPv6 SERVER ---------
const httpserver6 = http.createServer();
httpserver6.on("request", (req, res) => res.end("Connected to IPv6 Server"))
httpserver6.on("listening", () => {
    console.log(`IPv6 server listening on port http://[::1]:${httpserver6.address().port}/ on ${httpserver6.address().address} family ${httpserver6.address().family}`)
})
httpserver6.on("error", err => console.error(`Error ${err}`))
httpserver6.listen(8888, "::1"); // http://[::1]:59244
