import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect(process.env.MANGODB_URI).then(() => {
        console.log('Database is connected')
    })
        .catch((error) => {
            console.log(`MANGODB Connection Error: ${error.message}`)
        })
};
export default connectDB;