require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config/database');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📚 Book Reviews API: http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('❌ Database connection error:', err);
  process.exit(1);
});