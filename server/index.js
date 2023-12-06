// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const multer = require('multer'); // Add this line
const path = require('path'); 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect('mongodb+srv://Alumni:Alumni@cluster0.chohr2w.mongodb.net/Alumni?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const storage = multer.memoryStorage(); // Using memory storage for handling image files
// const upload = multer({ storage });
// Routes
const adminRoutes = require('./routes/adminRoutes');
const navbarRoutes = require('./routes/navbarRoutes');

app.use('/admin', adminRoutes);
app.use('/navbar', navbarRoutes);


const adminRoute = require('./routes/adminRoute'); // Add this line
const adminEventRoutes = require('./routes/adminEventRoutes'); // Add this line
// const adminAlumniRoutes = require('./routes/adminAlumniRoutes'); // Add this line
const adminUser = require('./routes/adminUser');
app.use('/fetchuser', adminUser);
app.use('/fetchalumni', adminRoute); // Adjust the path if needed
app.use('/fetchevent', adminEventRoutes); // Adjust the path if needed
// app.use('/admin/alumni', adminAlumniRoutes); // Adjust the path if needed


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
