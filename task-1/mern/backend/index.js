const express = require('express');
const mongoose = require('mongoose');

const app = express();

// 🔥 MongoDB Connection
mongoose.connect("mongodb://mongo:27017/testdb", )
.then(() => {
  console.log("✅ MongoDB connected");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Test route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'MERN backend is alive',
    timestamp: new Date()
  });
});

app.listen(3000, () => {
  console.log('🚀 Backend running on port 3000');
});
