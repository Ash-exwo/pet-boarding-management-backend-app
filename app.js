const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://aswathy:ashexhere22@ac-d01d9ty-shard-00-00.36nhatr.mongodb.net:27017,ac-d01d9ty-shard-00-01.36nhatr.mongodb.net:27017,ac-d01d9ty-shard-00-02.36nhatr.mongodb.net:27017/petdb?ssl=true&replicaSet=atlas-sg5pws-shard-0&authSource=admin&appName=Cluster0")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((error) => {
        console.log(error)
    })


const Boarding = mongoose.model("Boardings", new mongoose.Schema(
    {
        bookingId: Number,
        petName: String,
        petType: String,
        breed: String,
        age: Number,
        weight: Number,
        vaccinationStatus: String,
        ownerName: String,
        ownerPhone: String,
        ownerEmail: String,
        checkInDate: String,
        checkOutDate: String,
        kennelNumber: Number
    }
))


app.post("/add-boarding", async (req, res) => {

    await Boarding.create(req.body)
    res.json({"status": "success"})
})


app.get("/view-boarding", async (req, res) => {

    const boardings = await Boarding.find()
    res.send(boardings)
})


app.listen(5003, () => {
    console.log("Server Started")
})