const mongoose = require('mongoose');

// Correct Local IP provided by the user
const MONGODB_URI = "mongodb://foundrydb:MqdAMrst2d7dQwFD@192.168.1.119:27017/foundrydb?authSource=admin";

async function findCourseIds() {
  try {
    console.log('Attempting to connect to:', MONGODB_URI);
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    console.log('✅ Connected to DB');
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));

    const courses = await mongoose.connection.db.collection('courses').find({}).toArray();
    console.log('Found courses:');
    courses.forEach(c => {
      console.log(`- Title: ${c.title}, Slug: ${c.slug}, ID: ${c._id}`);
    });
    
    await mongoose.connection.close();
  } catch (err) {
    console.error('❌ Connection Error:', err.message);
    process.exit(1);
  }
}

findCourseIds();
