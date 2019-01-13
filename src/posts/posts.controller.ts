import * as express from "express"
import Post from "./posts.interface"
const path = require("path")

class PostsController {
    public path = "/posts";
    public router = express.Router();

    private posts: Post[] = [
        {
            author: 'Marcin',
            content: 'Dolor sit amet',
            title: 'Lorem Ipsum',
        }
    ];

    constructor() {
        this.initializeRoutes()
    }
    public initializeRoutes() {
        this.router.get(this.path, this.getAllPosts.bind(this))// Se asocia la instancia de la clase con Bind. al llamarse como función, el contexto cambia.
        this.router.post(this.path, this.createAPost.bind(this))

        this.router.get(this.path + "/form", function(request: express.Request, response: express.Response) {
            response.sendFile(path.join(__dirname, "../../files", "form.html"))
        })
    }
    private getAllPosts(request: express.Request, response: express.Response) {// Se asocia la instancia de la clase con Bind. al llamarse como función, el contexto cambia.
        response.send(this.posts)
    }

    private createAPost(request: express.Request, response: express.Response) {
        const post: Post = request.body
        this.posts.push(post)
        response.send(post)
    }

}
export default PostsController;
