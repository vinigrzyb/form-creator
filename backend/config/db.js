import mongoose, { mongo } from "mongoose";

async function dbConnect() {
  mongoose.connect(process.env.DB_CONNECTION, {
    dbName: 'formCreator',
  });
  return mongoose.connection;
};

export default dbConnect;