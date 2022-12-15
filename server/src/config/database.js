import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://test:test@pwa.focqibj.mongodb.net/test")
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`))