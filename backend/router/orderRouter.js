const express = require("express");
const router = express.Router();

const orderAddRouter = require("./order/orderAdd");

router.use((req, res, next) => {
  // console.log("middleware for test!");
  next();
});

// 주문관리 / 수주등록 - router/order/orderAdd.js
router.use("/add", orderAddRouter);

module.exports = router;
