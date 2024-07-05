var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://amuturia:Apollemi.30@cluster0.siuemsl.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://amuturia:Apollemi.30@cluster0.siuemsl.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://amuturia:Apollemi.30@cluster0.siuemsl.mongodb.net/darkroom-test?retryWrites=true&w=majority',

//    mongodb+srv://amuturia:Apollemi.30@cluster0.siuemsl.mongodb.net/
}
module.exports = config;
