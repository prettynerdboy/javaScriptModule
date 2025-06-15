import { Character } from "./character.mjs";
import { printLine } from "./utils.mjs";

const obiwan = new Character("obiwan",45);
printLine("登場人物");

obiwan.greet();
