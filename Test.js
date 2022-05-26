const instareel = require("insta-reel");
const URL = "https://www.instagram.com/p/Cdv2LBaDqUK/";
// const URL = "https://www.google.com";
(async() => {
    const reel = await instareel(URL);

    if(reel){
        console.log(reel);
    }else{
        console.log("Invaild Link");
    }

})();