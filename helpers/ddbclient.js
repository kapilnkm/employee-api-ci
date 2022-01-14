const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

const ddbClient = new DynamoDBClient({
    region: process.env.REGION || 'us-east-1',
    endpoint: process.env.ENDPOINT || 'http://localhost:8000',
});

module.exports = {ddbClient};
