const { DynamoDBClient, PutItemCommand, GetItemCommand, UpdateItemCommand, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
    region: "localhost",
    region: "eu-central-1",
    endpoint: "http://localhost:8000",
});
async function createItem(item) {
    const params = {
        TableName: "creditCards",
        Item: item
    };

    const command = new PutItemCommand(params);
    const response = await client.send(command);

    return response;
}

async function getItem(key) {
    const params = {
        TableName: "creditCards",
        Key: key
    };

    const command = new GetItemCommand(params);
    const response = await client.send(command);

    return response.Item;
}

async function updateItem(key, updateExp, expAttrNames, expAttrValues) {
    const params = {
        TableName: "creditCards",
        Key: key,
        UpdateExpression: updateExp,
        ExpressionAttributeNames: expAttrNames,
        ExpressionAttributeValues:expAttrValues
    };

    const command = new UpdateItemCommand(params);
    const response = await client.send(command);

    return response;
}

async function deleteItem(key) {
    const params = {
        TableName: "creditCards",
        Key: key
    };

    const command = new DeleteItemCommand(params);
    const response = await client.send(command);

    return response;
}

module.exports = {
    createItem,
    deleteItem,
    updateItem,
    getItem
}