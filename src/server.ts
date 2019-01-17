require("./utils/config")
import App from "./app"
import PostsController from "./posts/posts.controller"
import HelloController from "./hello/hello.controller"

const app = new App(
    [
        new HelloController(),
        new PostsController()
    ], process.env.APP_PORT)
app.listen()
