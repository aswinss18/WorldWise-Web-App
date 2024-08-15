import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add delay middleware
server.use((req, res, next) => {
  setTimeout(next, 500); // 500 ms delay
});

server.use(router);
const PORT = process.env.PORT || 8001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
