const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://foundrydb:MqdAMrst2d7dQwFD@192.168.1.119:27017/foundrydb?authSource=admin";

async function inspectCollections() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to DB');
    
    const db = mongoose.connection.db;
    
    const collections = ['payments', 'transactions', 'enrollments'];
    
    for (const colName of collections) {
      const doc = await db.collection(colName).findOne({});
      console.log(`\n--- Collection: ${colName} ---`);
      if (doc) {
        console.log(JSON.stringify(doc, null, 2).slice(0, 500) + '...');
      } else {
        console.log('No documents found.');
      }
    }

    await mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

inspectCollections();
