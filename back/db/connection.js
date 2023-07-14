import mongoose from "mongoose";

const connection=mongoose.connect(`mongodb+srv://az-alam:alam!az@cluster0.3w5wy6z.mongodb.net/?retryWrites=true&w=majority`)

export default connection;