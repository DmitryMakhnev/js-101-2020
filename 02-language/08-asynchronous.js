/** setTimeout **/
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

setTimeout(
  () => {
    console.log('Timeout');
  },
  1000
);

const timeoutId = setTimeout(
  () => {
    console.log('Cancelled timout');
  },
  0
);
clearTimeout(timeoutId);


/** setInterval **/
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

const intervalId = setInterval(
  () => {
    console.log('Interval step');
  },
  1500
);

setTimeout(
  () => {
    clearInterval(intervalId);
  },
  3100
);


/** Callback **/

function sendRequest(url, callback) {
  setTimeout(
    () => {
      callback(`data from '${url}'`);
    },
    51
  );
}

sendRequest(
  'https://google.com',
  response => console.log(response)
);

// callback hell

sendRequest(
  'https://jb.dev',
  response => {
    console.log(response);

    sendRequest(response, response2 => {
      console.log(response2);
    });
  }
);


/** Promise **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// ES 2015
// Aka Futures
// Please, watch this talk https://www.youtube.com/watch?v=S_j44BVijRE

function sendRequestWithPromise(url) {
  return new Promise(resolve => {
    setTimeout(
      () => {
        resolve(`data from '${url}'`);
      },
      45
    );
  });
}

sendRequestWithPromise('https://jb.dev')
  .then(response => {
    console.log(response);
  });

sendRequestWithPromise('https://jb.dev')
  .then(response => {
    console.log(response);
    return sendRequestWithPromise(response);
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });


/** async / wait **/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// ES 2017 https://kangax.github.io/compat-table/es2016plus/#test-async_functions

async function run() {
  try {
    const response1 = await sendRequestWithPromise('jb.dev');
    console.log(response1);

    const response2 = await sendRequestWithPromise(response1);
    console.log(response2);

  } catch (e) {
    console.log(e);
  }
}

run();

console.log('1' + 1);
