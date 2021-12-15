import express from 'express';
import mongoose from 'mongoose';
import bookRouter from './routes.js'

const app = express();

app.use(express.json())

const dbURI = 'mongodb://localhost:27017/restApiDB'
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(error);
    else console.log("Mongoose connection started at: " + dbURI);
  }
);

const PORT = process.env.PORT || 3000;

app.use("/book", bookRouter);

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});


