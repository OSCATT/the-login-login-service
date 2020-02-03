const express = require("express");
const PORT = 1234;
var userCount = 0;
const app = express();

app.use(express.static('public'))

app.get("/hello", (req, res) => {
  userCount++;
    if(userCount%10 == 0){
    userCount = 0;
    res.sendFile(__dirname + '/public/tenth.html');
    }
    else{
      res.send("Hello world " + userCount + "th login" + __dirname);
    }
});

app.get('/indextest', function(request, response){
    response.sendFile('absolutePathToYour/htmlPage.html');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
