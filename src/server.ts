import { connectDB } from "./utils/index.js";
import { app } from "./app.js";

connectDB();
app.listen(process.env.PORT, () => {
  console.log("Server is up and running");
});
