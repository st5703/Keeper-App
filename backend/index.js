import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/keeper', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const noteSchema = mongoose.Schema({
    title: String,
    content: String
});


const Keeper = new mongoose.model('Keeper', noteSchema);


app.get('/api/getAll', (req, res) => {
    Keeper.find({}, (err, notes) => {
        if (err) {
            console.log(err);
        }
        else{
            res.status(200).send(notes);
        }
    })
});

app.post('/api/addNew', (req, res) => {

    const { title, content } = req.body;
    const noteobj = new Keeper({
        title: title,
        content: content
    })
    
    noteobj.save(err => {
        if (err) {
            console.log(err);
        }
        Keeper.find({}, (err, notes) => {
            if (err) {
                console.log(err);
            }
            else{
                res.status(200).send(notes);
            }
        })
    })
});

app.post('/api/delete', (req, res) => {
    const {id} = req.body;

    Keeper.deleteOne({_id:id},()=>{
        Keeper.find({}, (err, notes) => {
            if (err) {
                console.log(err);
            }
            else{
                res.status(200).send(notes);
            }
        })
    })
});


app.listen(3001, () => {
    console.log('Serving on port 3001')
})