const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://foundrydb:MqdAMrst2d7dQwFD@192.168.1.119:27017/foundrydb?authSource=admin";

async function fixIndex() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to DB');
    
    const db = mongoose.connection.db;
    const collection = db.collection('enrollments');
    
    const indexes = await collection.indexes();
    console.log('Current indexes:', JSON.stringify(indexes, null, 2));
    
    const targetIndex = indexes.find(idx => idx.name === 'userId_1_courseId_1');
    
    if (targetIndex) {
      console.log('Found problematic index. Dropping and re-creating as sparse...');
      await collection.dropIndex('userId_1_courseId_1');
      console.log('Dropped index.');
      
      await collection.createIndex({ userId: 1, courseId: 1 }, { unique: true, sparse: true });
      console.log('✅ Re-created index as UNIQUE and SPARSE.');
    } else {
      console.log('❌ Could not find index userId_1_courseId_1');
    }

    await mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

fixIndex();
