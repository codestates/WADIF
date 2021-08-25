// 서버 포트 세팅 (인증서 파일 체크 및 https 프로토콜로 오픈)
const https = require("https");
const fs = require("fs");
const app = require("../app");

const PORT = process.env.PORT || 4000;

let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const key = fs.readFileSync(__dirname + "/key.pem", "utf-8");
  const cert = fs.readFileSync(__dirname + "/cert.pem", "utf-8");
  const credentials = { key, cert };
  
  server = https.createServer(credentials, app);
  server.listen(PORT, () => console.log("서버 가동"));
}
// 인증서 파일이 없으면 http프로토콜을 사용?
// else {
//   server = app.listen(PORT);
// }


module.exports = server;
