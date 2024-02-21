import Express from "express"
import bodyParser from "body-parser";
import cors from "cors"

const app = Express()
const port = 3000;

app.use(cors()) // to get around the cors restrication
app.use(bodyParser.json()) // to parse the body


app.get("/", (req, res) => {
    res.send("Hello world")
})

app.post("/post", (req, res) => {
    console.log(req.body) // to get the contents of the body
    res.send(JSON.stringify({
        status_code: 200,
        message: "Everything went good"
    }))
})

app.listen(port, ()=>{
    console.log(`The app is listening ON: http://localhost:${port}`)
})