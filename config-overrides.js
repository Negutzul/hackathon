module.exports = {
    webpack: (config) => {
        config.node = {
            global: false,
        };
        return config;
    },
};