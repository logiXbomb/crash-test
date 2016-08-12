const app = require('express')();
const PORT = process.env.PORT || 3005;

app.get('/crash', (req, res) => {
  process.exit();
});
app.get('/crash/:code', (req, res) => {
  process.exit(req.params.code);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
