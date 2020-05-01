import AppController from "./controller/constroller.js";
import '../scss/main.scss'; 
import Selector from "./components/selector.js";


const app = new AppController();
const selector = new Selector();
app.render();
selector.renderSelector();