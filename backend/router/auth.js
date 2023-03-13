const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

router.use(bodyParser.json());
router.use(cookieParser());

router.use((req, res, next) => {
  // console.log("middleware for test!");
  next();
});

const jwtKey = "abc1234567";

const members = [
  {
    id: 1,
    name: "황병구",
    part: "품질개발부",
    rank: "부장",
    loginId: "admin",
    loginPw: "1234",
  },
  {
    id: 2,
    name: "홍길동",
    part: "영업팀",
    rank: "사원",
    loginId: "a",
    loginPw: "1",
  },
];

router.get("/", (req, res) => {
  if (req.cookies && req.cookies.token) {
    jwt.verify(req.cookies.token, jwtKey, (err, decoded) => {
      if (err) {
        return res.sendStatus(401);
      }
      res.send(decoded);
    });
  } else {
    res.sendStatus(401);
  }
});

router.post("/", (req, res) => {
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;

  const member = members.find(
    (m) => m.loginId === loginId && m.loginPw === loginPw
  );

  if (member) {
    const options = {
      domain: "localhost",
      path: "/",
      httpOnly: true,
    };

    const token = jwt.sign(
      {
        id: member.id,
        name: member.name,
        part: member.part,
        rank: member.rank,
      },
      jwtKey,
      {
        expiresIn: "24h",
        issuer: "malgirlim",
      }
    );

    res.cookie("token", token, options);
    res.send(member);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/", (req, res) => {
  if (req.cookies && req.cookies.token) {
    res.clearCookie("token");
  }
  res.sendStatus(200);
});

module.exports = router;
