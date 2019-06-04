import AWS from "aws-sdk";

export function call(action, params) {
    const dynamoDbDocumentClient = new AWS.DynamoDB.DocumentClient();

    return dynamoDbDocumentClient[action](params).promise();
}