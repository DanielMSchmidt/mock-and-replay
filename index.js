var http = require("http");
var yakbak = require("yakbak");

const url = process.env.MOCKED_URL;

if (!url) {
  throw new Error(
    "Please the provide MOCKED_URL as an environment variable. It should include the port as well as the host."
  );
}
function getPort() {
  try {
    return parseInt(process.env.PORT, 10);
  } catch (e) {
    throw new Error("Please the provide PORT as an environment variable.");
  }
}

const port = getPort();

http
  .createServer(
    yakbak(url, {
      dirname: __dirname + "/tapes"
    })
  )
  .listen(port);
