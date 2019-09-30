const timestamp = (req, res, next) => {
    console.log(new Date() + "New incoming request");
    next();
};

export { timestamp };
