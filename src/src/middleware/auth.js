const config = require('../config');

const validateAdminSecret = (req, res, next) => {
  const secret = req.headers['x-admin-secret'];
  if (secret !== config.adminSecret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

module.exports = { validateAdminSecret };
