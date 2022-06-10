"use strict";
//file ini untuk menginformasikan hasil request kepada client: intinya ngasih RESPONSE

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};

//respon untuk NESTED transaksi, ceritanya sih gitu gatau bnr atau salah
exports.oknested = function (values, res) {
  //akumulasi
  const hasil = values.reduce((ekumulasikan, item) => {
    //menentukan key group
    if (akumulasikan(item.nama_user)) {
      //buat var group transaksi
      const group = akumulasikan[item.nama_user];
      //cek jika isi array adalah transaksi
      if (Array.isArray(grop.transaksi)) {
        //tambahkan val ke dalam group transaksi
        group.transaksi.push(item.nama_sampah);
      } else {
        group.transaksi = [group.transaksi, item.transaksi];
      }
    } else {
      akumulasikan[item.nama_user] = item;
    }
    return akumulasikan;
  }, {});

  var data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end();
};
