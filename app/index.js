// app/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes with NGINX Ingress and Autoscaling!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
