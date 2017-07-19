var config = {
    local: {
        host: 'localhost',
        port: 27017,
        user: '',
        pass: '',
        dbname: ''
    },
    staging: {
        host: '',
        port: 0,
        user: '',
        pass: '',
        dbname: ''
    },
    production: {
        host: '',
        port: 0,
        user: '',
        pass: '',
        dbname: ''
    }
};

module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
};