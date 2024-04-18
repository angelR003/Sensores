import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING_DB)
    .then(db=>console.log("Connection Succesful with the database"))
    .catch(err=>console.error(err))

export default mongoose;