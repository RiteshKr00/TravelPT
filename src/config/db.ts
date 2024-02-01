import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    console.log("connecting DB........  ")
    console.log('Database Connected');
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    process.exit(1);
  }
};

export { connectDB };
