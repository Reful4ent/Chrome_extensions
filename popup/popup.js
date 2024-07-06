const button_list = document.querySelector('.popup-button.button');
const button_click = document.querySelector('.popup-button__click-other');
const inputButton = document.querySelector('.button-settings__input-button')
button_click.style.color = "red";

button_list.addEventListener("click",(e) => {
    chrome.tabs.query({active:true}, (tabs) => {
        const tab = tabs[0];
        if(tab) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id, allFrames: true },
                func: grabButtons,
            }, onResult);
        } else {
            alert("no buttons");
        }
    })
})


function grabButtons(){
    const buttons = document.querySelectorAll("button");
    return Array.from(buttons).map((buttons, index) => {
        if(buttons.className) {
            return "class "+buttons.className;
        } else if(buttons.id) {
            return  "id "+buttons.id;
        }
    })
}

function onResult(frames) {
    const list = document.querySelector(".popup-form__button-lust");
    const buttonsString = frames.map(frame=>frame.result)
        .reduce((r1,r2)=>r1.concat(r2));
    for(let i=0;i<imageUrls.length;i++){
        const item = document.createElement("option");
        item.value = i;
        item.innerHTML = buttonsString[i];
        list.appendChild(item);
    }
}


button_click.addEventListener("click",(e) => {
    //if(input.value === ' ' || input.value === null)
      //  return;
    chrome.tabs.query({active:true}, (tabs) => {
        const tab = tabs[0];
        if(tab) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id, allFrames: true },
                func: clickButton,
                args: [inputButton.value],
            });
        } else {
            alert("no buttons");
        }
    })
    const button = document.querySelectorAll()
})

function clickButton(inputText){
    const button_temp = document.querySelector(`.${inputText}`);
    button_temp.click();
}
