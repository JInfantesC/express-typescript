import * as express from "express"
import * as bodyParser from "body-parser"


class App {
    public app: express.Application;
    public port: number;
    constructor(controllers, port) { //Inicializamos el servidor
        this.app = express()
        this.port = port

        this.initializeMiddlewares()
        this.initializeControllers(controllers)
    }

    private initializeMiddlewares() {   //Ejecuta los middleware
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
        }))

        this.app.use(loggerMiddleware);

        function loggerMiddleware(request: express.Request, response: express.Response, next) {
            console.log(`${request.method} ${request.path} ${request.ip} ${request.headers['user-agent']}`);
            next();
        }
    }
    private initializeControllers(controllers) {    //Ejecuta todos los controladores
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    public listen() {   //Escuchando...
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
export default App; //Exportamos la clase
