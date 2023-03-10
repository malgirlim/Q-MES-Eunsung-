const express = require("express");
const bodyParser = require("body-parser");
// const database = require("./database");
const { sql, pool } = require("../../mssql");

const router = express.Router();
router.use(bodyParser.json());

router.use((req, res, next) => {
  // console.log("middleware for test!");
  next();
});

// 조회
router.get("/", async (req, res) => {
  try {
    const Pool = await pool;
    // select
    const result = await Pool.request().query(
      "exec [QMES].[dbo].[MANAGE_ITEM_BAD_READ_SP] '전체','','000101','990101'"
    );
    res.send(JSON.stringify(result.recordset));
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let stardDate = "000101";
    let endDate = "990101";
    if (req.body.date != "전체기간") {
      stardDate = req.body.date.replace(/\//g, "").slice(0, 6);
      endDate = req.body.date.replace(/\//g, "").slice(-6);
    }

    const Pool = await pool;
    // select
    const result = await Pool.request()
      .input("key", sql.NVarChar, req.body.key)
      .input("input", sql.NVarChar, req.body.input)
      .input("startDate", sql.NVarChar, stardDate)
      .input("endDate", sql.NVarChar, endDate)
      .query(
        "exec [QMES].[dbo].[MANAGE_ITEM_BAD_READ_SP] @key,@input,@startDate,@endDate"
      );
    res.send(JSON.stringify(result.recordset));
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// 등록
router.post("/insert", async (req, res) => {
  try {
    const Pool = await pool;
    // select
    const result = await Pool.request()
      .input(
        "불량일시",
        sql.NVarChar,
        !req.body.data.불량일시 ? "" : req.body.data.불량일시
      )
      .input(
        "품목코드",
        sql.NVarChar,
        !req.body.data.품목코드 ? "" : req.body.data.품목코드
      )
      .input(
        "거래처명",
        sql.NVarChar,
        !req.body.data.거래처명 ? "" : req.body.data.거래처명
      )
      .input(
        "품명",
        sql.NVarChar,
        !req.body.data.품명 ? "" : req.body.data.품명
      )
      .input(
        "규격",
        sql.NVarChar,
        !req.body.data.규격 ? "" : req.body.data.규격
      )
      .input(
        "단위",
        sql.NVarChar,
        !req.body.data.단위 ? "" : req.body.data.단위
      )
      .input(
        "불량수",
        sql.Int,
        !req.body.data.불량수 ? 0 : req.body.data.불량수
      )
      .input(
        "불량명",
        sql.NVarChar,
        !req.body.data.불량명 ? "" : req.body.data.불량명
      )
      .input(
        "불량내용",
        sql.NVarChar,
        !req.body.data.불량내용 ? "" : req.body.data.불량내용
      )
      .input(
        "비고",
        sql.NVarChar,
        !req.body.data.비고 ? "" : req.body.data.비고
      )
      .query(
        "exec [QMES].[dbo].[MANAGE_ITEM_BAD_INS_SP] @불량일시,@품목코드,@거래처명,@품명,@규격,@단위,@불량수,@불량명,@불량내용,@비고"
      );
    res.send("등록완료");
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// 한번에 등록
router.post("/insertAll", async (req, res) => {
  try {
    const Pool = await pool;
    for (var i = 0; i < req.body.data.length; i++) {
      // select
      await Pool.request()
        .input(
          "불량일시",
          sql.NVarChar,
          !req.body.data[i].불량일시 ? "" : req.body.data[i].불량일시
        )
        .input(
          "품목코드",
          sql.NVarChar,
          !req.body.data[i].품목코드 ? "" : req.body.data[i].품목코드
        )
        .input(
          "거래처명",
          sql.NVarChar,
          !req.body.data[i].거래처명 ? "" : req.body.data[i].거래처명
        )
        .input(
          "품명",
          sql.NVarChar,
          !req.body.data[i].품명 ? "" : req.body.data[i].품명
        )
        .input(
          "규격",
          sql.NVarChar,
          !req.body.data[i].규격 ? "" : req.body.data[i].규격
        )
        .input(
          "단위",
          sql.NVarChar,
          !req.body.data[i].단위 ? "" : req.body.data[i].단위
        )
        .input(
          "불량수",
          sql.Int,
          !req.body.data[i].불량수 ? 0 : req.body.data[i].불량수
        )
        .input(
          "불량명",
          sql.NVarChar,
          !req.body.data[i].불량명 ? "" : req.body.data[i].불량명
        )
        .input(
          "불량내용",
          sql.NVarChar,
          !req.body.data[i].불량내용 ? "" : req.body.data[i].불량내용
        )
        .input(
          "비고",
          sql.NVarChar,
          !req.body.data[i].비고 ? "" : req.body.data[i].비고
        )
        .query(
          "exec [QMES].[dbo].[MANAGE_ITEM_BAD_INS_SP] @불량일시,@품목코드,@거래처명,@품명,@규격,@단위,@불량수,@불량명,@불량내용,@비고"
        );
    }
    res.send("등록완료");
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// 수정
router.post("/edit", async (req, res) => {
  try {
    const Pool = await pool;
    // select
    const result = await Pool.request()
      .input("기본키", sql.Int, req.body.data.NO)
      .input("불량일시", sql.DateTime, req.body.data.불량일시)
      .input("품목코드", sql.NVarChar, req.body.data.품목코드)
      .input("거래처명", sql.NVarChar, req.body.data.거래처명)
      .input("품명", sql.NVarChar, req.body.data.품명)
      .input("규격", sql.NVarChar, req.body.data.규격)
      .input("단위", sql.NVarChar, req.body.data.단위)
      .input("불량수", sql.Int, req.body.data.불량수)
      .input("불량명", sql.NVarChar, req.body.data.불량명)
      .input("불량내용", sql.NVarChar, req.body.data.불량내용)
      .input("비고", sql.NVarChar, req.body.data.비고)
      .query(
        "exec [QMES].[dbo].[MANAGE_ITEM_BAD_UDT_SP] @기본키,@불량일시,@품목코드,@거래처명,@품명,@규격,@단위,@불량수,@불량명,@불량내용,@비고"
      );
    res.send("수정완료");
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// 삭제
router.post("/delete", async (req, res) => {
  try {
    const Pool = await pool;
    for (var i = 0; i < req.body.data.length; i++) {
      // insert
      await Pool.request()
        .input("key", sql.Int, req.body.data[i])
        .query(`exec [QMES].[dbo].[MANAGE_ITEM_BAD_DEL_SP] @key`);
    }
    res.send("삭제완료");
  } catch (err) {
    // console.log(err);
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
