// 1. 기본 모듈 세팅 (cors, cookieParser, express 등)
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

// 2. 환경변수 세팅 (dotenv 모듈 설치)
const dotenv = require("dotenv");
dotenv.config();

// 3. 분기별 라우팅 변수 선언
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");

// 4. 미들웨어 세팅
// 4-1. cors는 보안을 잡기 위해 우선 디폴트로 세팅
app.use(cors());
// 4-2. bodyParser의 역할
app.use(express.json());
// 4-3. url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
// 4-4. 토큰을 쿠키에 저장할 계획이기에 추가
app.use(cookieParser());
// 4-5. 라우터 세팅
app.use("/main", mainRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);

module.exports = app;
