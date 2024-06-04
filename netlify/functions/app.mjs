const data = require('./api-data/data');

export const handler = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify(data)
	}
}