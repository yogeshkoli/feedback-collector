module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({ erorr: 'You do not have enough credits!' })
    }

    next();
};