const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/search", (req,res) => {
    res.status(500).json({
    })
})

app.get("/:id", (req,res) => {
    if (req.params.id == 1) {
        res.status(200).json({
            status: 0, stinky: "true"
        })
    } else {
        res.status(400).json({
            status: 1, stinky: "false"
        })
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));