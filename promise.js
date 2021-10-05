const condition = true; // true -> resolve, false -> reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("success");
    }
    else {
        reject("failure");
    }
});

// <case1>
promise
    .then((message) => {
        // console first
        console.log("message1", message);   // when resolve
    })
    .catch((error) => {
        console.error(error);   // when reject
    })
    .finally(() => {
        // console second
        console.log("must operate it");
    });

// <case2>    
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            // console 
            resolve("a", message);
            reject("aa", message);
        });
    })
    .then((message2) => {
        // console 
        console.log("console b", message2); // message2 = a
        return new Promise((resolve, reject) => {
            resolve("b", message2);
            reject("bb", message2);
            // console 
            console.log("console c", message2);
        });
    })
    .then((message3) => {
        // console 
        console.log("console d", message3);
    })
    .catch((error) => {
        console.error(error);
    });
