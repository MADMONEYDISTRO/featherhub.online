require('dotenv').config();

module.exports = {
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  },
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  adminSecret: process.env.ADMIN_SECRET
};
