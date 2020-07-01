# sync-async-javascript
## This code repository is simple app to help understanding about sync-async in Javascript.

Disclaimer: This repo contains some Indonesia-English mix function name, but it doesn't interfere the essentials of the codes. For instances, `satu` means `one` in English, and so on. You may change the codes by your own flavors. Cheers.

### How to use this?
There are several files that use some model to call `async` and `Promise` with `SetTimeout`. `SetTimeout` is something like Python's ``sleep()``.

Now let's check. There are two main files that contain functions from another files. For example, if you are using `app.js` you may call it by `node app.js` in your terminal. 

The file called `app.js` is contain local functions that use parameter. Then, in `runner.js` is contains function from `exportModule.js`, `processOne.js`, and `processTwo.js`. 

You can call it simply by `node app.js` or `node runner.js` to know the difference. 

Happy Testing. 
---
You may read my personal blog in https://ardihanitya.id.