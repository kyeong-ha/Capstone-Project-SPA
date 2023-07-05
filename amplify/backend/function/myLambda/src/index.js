/* Amplify Params - DO NOT EDIT
	API_MYMBTI_GRAPHQLAPIENDPOINTOUTPUT
	API_MYMBTI_GRAPHQLAPIIDOUTPUT
	API_MYMBTI_GRAPHQLAPIKEYOUTPUT
	API_MYMBTI_INPUTTABLE_ARN
	API_MYMBTI_INPUTTABLE_NAME
	API_MYMBTI_MBTITABLE_ARN
	API_MYMBTI_MBTITABLE_NAME
	AUTH_MYAUTH_USERPOOLID
	ENV
	REGION
	STORAGE_INPUTDB_ARN
	STORAGE_INPUTDB_NAME
	STORAGE_INPUTDB_STREAMARN
	STORAGE_MBTIDB_ARN
	STORAGE_MBTIDB_NAME
	STORAGE_MBTIDB_STREAMARN
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
