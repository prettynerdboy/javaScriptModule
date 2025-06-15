import { Character } from "./character.mjs";
import say,{bye} from "./utils.mjs";

const obiwan = new Character("Obi-Wan",45);

say("Anakin");//defaultにした方は名前を変えてもいい
bye("Anakin");
obiwan.greet();