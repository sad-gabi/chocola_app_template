import { createComponent, api } from "chocola/components";

const Counter = createComponent();

Counter.body = "./html/counter.html";

Counter.ctx = {
    text: "Click Me!",
    count: 0
};

Counter.script = (self, ctx) => {
    const button = self.querySelector("button");

    button.addEventListener("click", () => {
        ctx.count++;
    })
}

Counter.api = (self, ctx) => api({
    increment() {
        ctx.count++;
    }
})

export default Counter;