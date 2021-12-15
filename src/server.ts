import express from 'express';

const app = express();

app.get("/test", (req, res) => {
    return res.send("hello word")
});

app.post("/test-post", (req, res) => {
    return res.send("Hello word post")
})

app.listen(3000, () => {
    console.log('Server is runing')
})