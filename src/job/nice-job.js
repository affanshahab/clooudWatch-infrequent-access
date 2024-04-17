const util = require("utility/index")

exports.handler = async () => {

    const time = util.getTime()

    console.log("time in lambda: ", time);

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from NiceJOB!',
            currentTime: time
        }),
    };

    console.log("final response: ", response)

    return response;
};
