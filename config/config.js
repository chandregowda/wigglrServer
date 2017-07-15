module.exports = {
    server: {
            host: '0.0.0.0', // Change this to the host name 
            port: 3000, // Change this port to required port
            protocol: 'http',
            // private_key : "ssl/localhost/server.key",
            // certificate : "ssl/localhost/server.crt",
            // publicKey : "3bc0caa8d3c248d7821d3ee483202175"
    },
    database: {
        url: 'mongodb://127.0.0.1:27017/wigglr' // Change this to the Database Schema Name
    }
}