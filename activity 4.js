// Task 1:
// const fs = require('fs');

// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   try {
//     const jsonData = JSON.parse(data);
//     jsonData.updatedAt = new Date().toISOString();
//     const modifiedJsonData = JSON.stringify(jsonData, null, 2);

//     fs.writeFile('data.json', modifiedJsonData, 'utf8', (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log('File successfully updated!');
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });



// Task 2:
// const fs = require('fs');
// const zlib = require('zlib');

// function compressFile(inputFile, outputFile) {
//   const gzip = zlib.createGzip();
//   const inputStream = fs.createReadStream(inputFile);
//   const outputStream = fs.createWriteStream(outputFile + '.gz');

//   inputStream.pipe(gzip).pipe(outputStream);

//   outputStream.on('finish', () => {
//     console.log('File compressed successfully!');
//   });
// }

// function decompressFile(inputFile, outputFile) {
//   const gunzip = zlib.createGunzip();
//   const inputStream = fs.createReadStream(inputFile);
//   const outputStream = fs.createWriteStream(outputFile);

//   inputStream.pipe(gunzip).pipe(outputStream);

//   outputStream.on('finish', () => {
//     console.log('File decompressed successfully!');
//   });
// }

// function compareFileSizes(file1, file2) {
//   const stats1 = fs.statSync(file1);
//   const stats2 = fs.statSync(file2);

//   console.log(Original File Size: ${stats1.size} bytes);
//   console.log(Compressed File Size: ${stats2.size} bytes);
// }

// const inputFile = 'example.txt';
// const compressedFile = 'example.txt.gz';
// const decompressedFile = 'example_decompressed.txt';

// compressFile(inputFile, compressedFile);
// decompressFile(compressedFile, decompressedFile);
// compareFileSizes(inputFile, compressedFile);