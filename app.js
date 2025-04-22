import expresss from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import hpp from "hpp";
import * as path from "path";
import router from "./routes/api";
import cookes from "cookie-parser";
import {
	MONGODB_CONNECTION,
	JWT_SECRET,
	PORT,
	ENCODED,
	REQUEST_LIMIT_TIME,
	WEB_CACHE,
	JWT_EXPIRATION,
    MAX_JSON_SIZE
} from "./app/config/config";


const app = expresss(); 

app.use(cors());
app.use(helmet());
app.use hpp();
app.use(expresss.json(limit: MAX_JSON_SIZE));