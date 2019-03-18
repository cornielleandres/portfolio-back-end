const server	= require('./api/server.js');
const port		= process.env.PORT;

server.listen(port, () => console.log(`\n=== Server listening on port ${ port } ===`));
