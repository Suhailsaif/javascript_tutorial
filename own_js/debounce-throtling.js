

// debouncing :  Run the function only after the user has stopped doing something for a while.
// When you type quickly, you don’t want to send a request on every keystroke.
// Instead, wait until the user stops typing for, say, 500ms, then run the function.
// function debounce(fn, delay) {
//     let timerId;

//     return function (...args){
//         clearTimeout(timerId); // reset the last call
//      timerId = setTimeout(() => {
//         fn(...args);
//        }, delay); 
//     }

// }


// const search = (query) => {
//     console.log("Search JS for ", query)
// }

// const searchWithDebounce = debounce(search, 300);

// searchWithDebounce("Ha");
// searchWithDebounce("Har");
// searchWithDebounce("Hard");
// searchWithDebounce("Hard J");
// searchWithDebounce("Hard JS");





/// throtling : Run the function at most once every X milliseconds. 
// Example: Scroll event
// While scrolling, events fire rapidly. Throttling ensures your function runs, say, once every 200ms.



function throttle(fn, delay){

    let lastCall = 0;

    return function(...args){
        const now = Date.now();
        if(now - lastCall < delay){
            return
        }
        lastCall = now;
        return fn(...args);
    };
    }
    function sendChatMessage(message){
        console.log("Sending Message", message);
    }


const SendMessageWithSlow = throttle(sendChatMessage, 100);

SendMessageWithSlow("Ha");
SendMessageWithSlow("Har");
SendMessageWithSlow("Hard");
SendMessageWithSlow("Hard J");
SendMessageWithSlow("Hard JS");