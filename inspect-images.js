const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://foundrydb:MqdAMrst2d7dQwFD@192.168.1.119:27017/foundrydb?authSource=admin";

async function inspectImages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to DB');
    
    const courses = await mongoose.connection.db.collection('courses').find({}).toArray();
    console.log('Inspecting course images:');
    courses.forEach(c => {
      console.log(`Course: ${c.title}`);
      if (c.image) console.log(`  - image: ${c.image}`);
      if (c.thumbnail) console.log(`  - thumbnail: ${c.thumbnail}`);
    });
    
    const users = await mongoose.connection.db.collection('users').find({ image: /localhost/ }).toArray();
    console.log('\nUsers with localhost images:', users.length);
    users.forEach(u => console.log(`  - ${u.email}: ${u.image}`));

    await mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

inspectImages();
