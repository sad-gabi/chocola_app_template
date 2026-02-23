import HTML from "./html/title-span.html";
import CSS from "./css/title-span.css";

function RUNTIME(self, ctx) {
    setTimeout(() => {
        self.textContent = "Welcome to Chocola JS!";

        setTimeout(() => {
            self.textContent = ctx.title;

            setTimeout(() => {
                
            }, RUNTIME(self, ctx));
        }, 2000);
    }, 2000);
}

export default function TitleSpan() {
    return {
        body: HTML,
        styles: CSS,
        script: RUNTIME
    }
}