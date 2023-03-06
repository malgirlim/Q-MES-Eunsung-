const express = require("express");
const bodyParser = require("body-parser");
// const database = require("./database");
const { sql, pool } = require("../mssql");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const router = express.Router();
router.use(bodyParser.json());

router.use(cookieParser());

router.use((req, res, next) => {
  // console.log("middleware for test!");
  next();
});

// 로그인 되는지 확인하고 토큰 보내기
router.post("/login", async (req, res) => {
  try {
    const Pool = await pool;
    // select
    const result = await Pool.request()
      .input("id", sql.NVarChar, req.body.login_id)
      .input("pw", sql.NVarChar, req.body.login_pw)
      .query(
        "SELECT [USER_ID] AS id, [USER_PW] AS pw, [USER_NAME] AS name FROM [QINNOTEK].[dbo].[MASTER_USER_TB] WHERE [USER_ID] = @id AND [USER_PW] = @pw"
      );

    if (result.recordset.length == 0) {
      res.status(404);
      res.send("로그인 정보가 일치하지 않습니다.");
    } else {
      const token = jwt.sign(
        {
          id: result.recordset[0].id,
          pw: result.recordset[0].pw,
          name: result.recordset[0].name,
        },
        "토큰에대한비밀키입니다",
        { expiresIn: "24h", issuer: "africalib" }
      );
      res.send({ token: token, data: result.recordset[0] });
    }
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// 토큰 체크하기
router.post("/accessTokenCheck", async (req, res) => {
  if (req.cookies && req.cookies.token) {
    jwt.verify(req.cookies.token, "토큰에대한비밀키입니다", (err, decoded) => {
      if (err) {
        console.log(err);
        return res.sendStatus(401);
      }
      res.send(decoded);
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
