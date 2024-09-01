import mongoose from "mongoose";
import dotEnv from "dotenv";

dotEnv.config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.qmivnkm.mongodb.net/LevelTwoModuleEight?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.qmivnkm.mongodb.net/?retryWrites=true&w=majority`;

const dbConnect = async () => {
  try {
    await mongoose
      .connect(uri as string, { dbName: "LevelTwoModuleEight" })
      .then(() => {
        console.log("connect by setup mongoose");
      });
  } catch (error: unknown) {
    console.log(error);
  }
};

export default dbConnect;
