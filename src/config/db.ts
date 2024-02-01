import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    console.log("connecting DB........  ")
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Database Connected');
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
