// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  // const wordResults = [];
  // fs.readFile(file1, "utf-8", (err, data) => {
  //   if (err) throw fnCallback(err);
    
  //   const word = JSON.parse(data).message.split(' ');
    
  //   if ( word.length > 2 ) {
  //     return fnCallback('Tidak boleh lebih dari 1 kata', null);
  //   } else {
  //     wordResults.push(word[1]);
  //   }
  //   // console.log(wordResults);
  //   fnCallback(null, wordResults);
  // });

  // Cara Lain
  const wordResults = [];
  fs.readFile(file1, "utf-8", (err, data1) => {
    if (err) throw fnCallback(err);
    return data1;
  });

  fs.readFile(file2, "utf-8", (err, data2) => {
    if (err) throw fnCallback(err);
    return data2;
  });

  fs.readFile(file3, "utf-8", (err, data3) => {
    if (err) throw fnCallback(err);
    return data3;
  });
    
    const word1 = JSON.parse(data1).message.split(' ');
    const word2 = JSON.parse(data2)[0].message.split(' ');
    const word3 = JSON.parse(data3)[0].data.message.split(' ');
    
    if ( word1.length > 2 || word2.length > 2 || word3.length > 2 ) {
      return fnCallback('Tidak boleh lebih dari 1 kata', null);
    } else {
      wordResults.push(word1[1]);
      wordResults.push(word2[1]);
      wordResults.push(word3[1]);
    }
    // console.log(wordResults);
    fnCallback(null, wordResults);
};
console.log(bacaData);

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
