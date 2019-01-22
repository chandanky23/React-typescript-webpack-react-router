import path from 'path'
import express from 'express'
import devServer from '../../webpack/dev'


const app = express(),
  port = process.env.PORT || 5000,
  isDevelopment = process.env.NODE_ENV || 'development';


if (isDevelopment) {
  devServer(app)
} else {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'build', 'index.html'));
  });
}
  
app.listen(port , () => {
  console.log(`Server running at port: ${port}`)
});