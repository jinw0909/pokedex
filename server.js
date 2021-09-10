const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const router = require('./router.js');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, 'uploads/');
      },
      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
  });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// 정적 리소스를 관리하는 폴더를 static()으로 지정하면 해당 폴더 경로가 라우터로 인식되지 않고 리소스 파일에 접근 가능
app.use(express.static('views'));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

//request 객체의 body 데이터를 중첩된 json 객체 형식으로 사용하기 위한 설정
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, (error) => {
    if (error) {
        console.log("에러발생!", error);
    }
    console.log(port + "번 포트에서 로컬 서버 대기중입니다.");
});
// 모듈화된 Router를 호출하면서 express 실행
router(app);

// app.get("/", (req, res) => {
//     console.log(req);
//     console.log("클라이언트로부터 호출 받음!!!!");
//     res.send("<h2>Hello~<h2>"+"<div style='width: 200px; height: 200px; background: red'>box</div>");
// });
