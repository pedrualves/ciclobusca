var http = require('http'),
app = require('./config/express')
db = require('./config/database');

http.createServer(app).listen(process.env.PORT || 3000, function() {
console.log('Servidor escutando na porta: ' + this.address().port);
});
