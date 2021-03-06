// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

//Fake CallbackHell
// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("It Worked!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("It Worked Again!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("It Worked!");
//             console.log(response);
//           },
//           function (err) {
//             console.log("It Failed!", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("It Failed!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("It Failed!", err);
//   }
// );

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("Page 1 worked");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("Page 2 worked");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("Page 3 worked");
//           })
//           .catch(() => {
//             console.log("Page 3 failed");
//           });
//       })
//       .catch(() => {
//         console.log("Page 2 failed");
//       });
//   })
//   .catch(() => {
//     console.log("Page 1 failed");
//   });

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("Page 1 worked");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("Page 2 worked");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("Page 3 worked");
    console.log(data);

  })
  .catch(()=>{
    console.log("Request Failed");
  });
