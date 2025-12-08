const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("hello there hehe");
        res.end();
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});