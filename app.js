import bodyParser from "body-parser";
import cookies from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import * as path from "path";
import { MAX_JSON_SIZE, REQUEST_LIMIT_TIME } from "./app/config/config";
import router from "./routes/api";

const app = express();

// 1. Security and middlewares
app.use(helmet()); // HTTP headers protection
app.use(cors()); // Cross-Origin requests
app.use(hpp()); // HTTP parameter pollution protection
app.use(cookies()); // Cookie parsing
app.use(morgan("dev")); // HTTP request logging

// 2. Body parser (for form submissions and JSON)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: MAX_JSON_SIZE }));
app.use(express.json({ limit: MAX_JSON_SIZE })); // Express built-in JSON parser

// 3. Rate limiting
const limiter = rateLimit({
	windowMs: REQUEST_LIMIT_TIME * 60 * 1000, // e.g. 15 minutes
	max: 100, // limit each IP to 100 requests per windowMs
	message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// 4. Static file serving (if needed)
app.use("/static", express.static(path.join(__dirname, "public")));

// 5. Routing
app.use("/api", router);

// 6. MongoDB Connection
// mongoose
// 	.connect(MONGODB_CONNECTION)
// 	.then(() => {
// 		console.log("MongoDB connected");
// 		app.listen(PORT, () => {
// 			console.log(`Server running on http://localhost:${PORT}`);
// 		});
// 	})
// 	.catch((err) => {
// 		console.error("MongoDB connection error:", err);
// 	});
