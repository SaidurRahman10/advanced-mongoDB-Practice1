import express, { Application} from "express";
import cors from "cors";
const app: Application = express();

//Application Route
import userRoute from './app/modules/user/user.route';

// using cors
app.use(cors());
//parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute );

export default app;

// Pattern MVC , Modular


// save - save() --> method -> data validate -> schema

