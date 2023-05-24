const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'ca_L4lHNSily9H1wpMrdlVZLxcEUdDaZCZJ',
  stripe_test_secret_key: 'sk_test_51KOLYcHVDC5fQQKLVNBS6VmYOf0scPS35qWgdZmxWxwrENmMXhxKaJSXcEgnFg7Q4VBhdNAx1pC0deu78woMEeyv00oSB9G6XB',
  stripe_test_api_key: 'pk_test_51KOLYcHVDC5fQQKLHYrs8lq0YBV2Rd9n29Ixqlqm5nsYAKOoJW9IP11I31RvVIzY5XZYZVGSxp9uRoF16mcIxckC007bks50bi'
};

export default config;
