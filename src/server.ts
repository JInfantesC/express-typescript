import * as express from 'express';
import * as bodyParser from 'body-parser';
const apiRouter = express.Router();


function loggerMiddleware(request: express.Request, response: express.Response, next) {
    console.log(`${request.method} ${request.path} ${request.ip} ${request.headers['user-agent']}`);
    next();
}

const app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(loggerMiddleware);
// app.use();

apiRouter.get('/hello', (request, response) => {
    response.send(`Hello ` + (request.query.hello || "world") + "!");
});

apiRouter.post('/hello', (request, response) => {
    response.send(request.body);
});

app.use("/api", apiRouter)
app.listen(3000);
