const runArea = document.querySelector(".run-area");
const htmlCodeArea = document.querySelector(".html-area");
const jsCodeArea = document.querySelector(".js-area");
const cssCodeArea = document.querySelector(".css-area");
const htmlBtn = document.querySelector("#htmlBtn");
const cssBtn = document.querySelector("#cssBtn");
const jsBtn = document.querySelector("#jsBtn");
const runBtn = document.querySelector("#runBtn");

runBtn.addEventListener("click" , () => {
    let getHtmlCode = htmlCodeArea.value;
    let getCssCode = cssCodeArea.value;
    let getJsCode = jsCodeArea.value;
    console.log(eval);
    runCode(getHtmlCode,getCssCode,getJsCode)
})
 function runCode(getHtml , getCss , getJs){
    try{
    runArea.innerHTML  =  `${getHtml} <style>${getCss}</style>`
    const func = new Function(getJs);
    func()
    }catch(error){
        runArea.innerHTML = `<p style="color : red">Error Occurs : ${error}</p>`
    }
}



function toggleArea(targetArea) {
    const allAreas = ['.js-area', '.html-area', '.css-area'];
    allAreas.forEach(area => {
        const element = document.querySelector(area);
        element.classList.toggle('none', area !== targetArea);
    });
}

jsBtn.addEventListener('click', () => toggleArea('.js-area'));
cssBtn.addEventListener('click', () => toggleArea('.css-area'));
htmlBtn.addEventListener('click', () => toggleArea('.html-area'));
