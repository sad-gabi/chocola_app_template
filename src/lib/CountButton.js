import HTML from "./html/count-button.html";

function RUNTIME(self, ctx = { log: "Hello World from Chocola Runtime!", show: true}) {
    self.addEventListener("click", () => {
        const numDis = document.querySelector("#number");
        numDis.textContent = parseInt(numDis.textContent) + 1;
        console.log(ctx.log);
    })
}

export default function Button() {
    return {
        body: HTML,
        script: RUNTIME
    }
}