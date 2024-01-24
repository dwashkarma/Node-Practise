// const { rejects } = require("assert");
// const fs = require("fs");
// const { resolve } = require("path");

// // to create a file ...

// // fs.open('newTextFile.txt','w', function (err){
// // if(err){
// //     throw err;
// // }
// // console.log('file created..')

// // })

// // to write inside the file;;

// // fs.writeFile("newTextFile.txt", "Hello kxa", function (err) {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log("File has been written...");
// // });

// // fs.readFile("C:UsersLenovoDesktop\newProject\nodeJs\newTextFile.txt", (err, data) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log(data);
// // });

// // const FetchData = () => {
// //   return new Promise((resolve, rejects) => {
// //     setTimeout(() => {
// //       const data = { message: "Data resolved.." };
// //       resolve(data);
// //     }, 2000);
// //   });
// // };

// // FetchData()
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// const FetchData = (thisFunc) => {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       const data = { message: "Data resolved......" };
//       resolve(data);
//       thisFunc(data);
//     }, 2000);
//   });
// };

// FetchData(
//   (thisFunc = (data) => {
//     console.log(data);
//   })
// );
