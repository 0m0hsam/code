const davidrouter = (req, res) => {
    res.send('Hello David Jonathan!');
};

const samuelrouter = (req, res) => {
    res.send('Hello Samuel Jonathan!');
};

module.exports = {
    davidrouter,
    samuelrouter
};