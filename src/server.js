const app = require('./app');

const porta = 3333;

app.listen(porta, () => {
  console.log(`Server started ON: ${porta}`);
});
