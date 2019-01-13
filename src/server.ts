require("./utils/config")
import App from "./app"
import PostsController from "./posts/posts.controller"

const app = new App(
    [
        new PostsController()
    ], process.env.APP_PORT)
app.listen()
