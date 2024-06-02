const programs = require('./api-data/programs');

export const handler = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify(programs)
	}
}