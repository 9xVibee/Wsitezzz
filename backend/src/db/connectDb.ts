import mongoose from "mongoose";

export const connectDb = () => {
  mongoose.connect(process.env.MONGO_URL);
  const conn = mongoose.connection;

  conn.once("open", () => {
    console.log("Database Connected");
  });

  conn.on("error", (err) => {
    console.log(err);
  });
};
