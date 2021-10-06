function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!!");  // method 2 can use resolve and reject  
            // reject("wait error!!"); // method 1 just only use this
        }, sec * 1000);
    });
}

async function myAsync() {
    console.log(new Date());

    // method 1 can only get error not return
    // const result = await wait(2).catch(e => {
    //     console.error(e);
    // });

    // method 2 can get both error and return
    try {
        await wait(2);
    } catch(ee) {
        console.error(ee);
    }

    console.log(result);
    console.log(new Date());
}

const result = myAsync();

// just for catch missed spell errors
myAsync().catch(eee => console.log(eee));