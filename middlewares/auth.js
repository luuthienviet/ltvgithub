module.exports = (req, res, next) => {
    // Dummy middleware for authentication
    console.log('Auth middleware');
    next();
  };