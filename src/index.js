import "dotenv/config";
let deps = [];
function* saga() {
    yield 1;
    yield 2;
    yield 3;
}
class Modules {
    static getModules() {
        return ["react", "react-dom"];
    }
}

const stream = saga();
console.log(
    "modern legacy build",
    Modules.getModules().toString(),
    stream.next(),
    process.env.MY_SECRET
);
