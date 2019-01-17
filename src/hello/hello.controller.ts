import * as express from "express"
const path = require("path")

class HelloController {
    public path = "/hello";
    public router = express.Router();

    constructor() {
        this.initializeRoutes()
    }
    public initializeRoutes() {
        this.router.get(this.path + "/:name*?", this.sayHello.bind(this))// Se asocia la instancia de la clase con Bind. al llamarse como función, el contexto cambia.

    }
    private sayHello(request: express.Request, response: express.Response) {// Se asocia la instancia de la clase con Bind. al llamarse como función, el contexto cambia.
        response.send(`Hello ${(request.params.name || "world")}!`)
    }

}
export default HelloController;
