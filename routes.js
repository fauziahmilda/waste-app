//file ini memuat navigasi
"use strict";

//ekport dg memanggil file controller
module.exports = function (app) {
  const myjson = require("./controller");

  app.route("/").get(myjson.index);

  //data sampah
  app.route("/getSampah").get(myjson.getSampah);
  app.route("/showWastebyID/:id").get(myjson.showWastebyID);
  app.route("/showHistory").get(myjson.showHistory);

  //data transaksi
  app.route("/addTransaction").post(myjson.addTransaction); //menambahkan data transaksi

  //data jasa
  app.route("/getJasa").get(myjson.getJasa);
};
