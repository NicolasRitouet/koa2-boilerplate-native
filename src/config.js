const config = {
	test: {
		environment: 'dev',
		port: process.env.PORT || 3000,
    db: {
      client: 'sqlite3',
      connection: {
        filename: '../data.db'
      }
    }
	},
	staging: {
		environment: 'staging',
		port: process.env.PORT || 3000
	},
	production: {
		environment: 'production',
		port: process.env.PORT || 3000
	}
};

module.exports = (environment) => config[ environment || process.env.NODE_ENV || 'test' ];