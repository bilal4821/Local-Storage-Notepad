

// document.getElementById("btn")




// addEventListener("input", (e)=>{



//     localStorage.getItem("text", e.target.value)


//     localStorage.setItem ("text", e.target.value);
    
    



// })

document.addEventListener("DOMContentLoaded", () => {  
    var  textarea = document.getElementById("input");    
    var storageKey = "text";

    var storedValue = localStorage.getItem(storageKey);
    if (storedValue) {
        textarea.value = storedValue;
    }

    localStorage.getItem("text")

    textarea.addEventListener("input", (e) => {
        localStorage.setItem(storageKey, e.target.value);
    });
});



