import {refineQuery} from "../src/index";

test("parses variations of \'volume\' term from file name", () => {
    const foo = refineQuery("201112 Fear Itself - Hulk vs Dracula 003");
    console.log(foo);
});