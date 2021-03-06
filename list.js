import * as dynamoDbLib from "./libs/dynamodb-lib";
import {failure, success} from "./libs/response-lib";

export async function main(event, context) {
    const params = {
        TableName: "notes",
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.identity.cognitoIdentityId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        return success(result.Items);
    } catch (e) {
        return failure({status: false});
    }
}
