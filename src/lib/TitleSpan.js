import HTML from "./html/title-span.html";

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
        script: RUNTIME
    }
}