import express, {Router} from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser'
import UserRoute from "./routes/users.js"


const app = express();



app.use(bodyParser.json())
app.use(cors())
app.use("/users", UserRoute);

const PORT = 4000;
const URL = "mongodb://127.0.0.1:27017/usermanagement";

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log("DB CONNECTED"))
.catch(error => {
    console.log("DB CONNECTION ERROR");
    console.log(error)

})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
