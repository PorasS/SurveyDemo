import express from 'express';

const app = express();

const posts = [
    {
        username: "pratik",
        title: "post 1"
    },
    {
        username: "shital",
        title: "post 2"
    }
]

app.get("/posts", (req, res) => {
    res.json(posts)
});
app.listen(8087);