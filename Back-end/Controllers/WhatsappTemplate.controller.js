import https from 'https';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.BASE_URL;
const authorization = process.env.AUTHORIZATION;

export const getTemplates = (req, res) => {
    console.log("Fetching templates from InfoBip")
    const { senderNumber } = req.query;

    const options = {
        method: 'GET',
        hostname: baseUrl,
        path: `/whatsapp/2/senders/${senderNumber}/templates`,
        headers: {
            'Authorization': `App ${authorization}`,
            'Accept': 'application/json'
        },
        maxRedirects: 20
    };

    // Debugging: Log the request options to verify correctness
    console.log('Request Options:', options);

    const reqGet = https.request(options, function (resGet) {
        let chunks = [];

        resGet.on("data", function (chunk) {
            chunks.push(chunk);
        });

        resGet.on("end", function () {
            const body = Buffer.concat(chunks);
            // Debugging: Log the response status and body
            console.log('Response Status:', resGet.statusCode);
            console.log('Response Body:', body.toString());
            res.status(resGet.statusCode).json(JSON.parse(body.toString()));
        });

        resGet.on("error", function (error) {
            console.error('Request Error:', error);
            res.status(500).json({ error: error.message });
        });
    });
    reqGet.end();
};

// Similar updates and debugging added to other functions as well

export const createTemplate = (req, res) => {
    const { senderNumber, name, language, category, allowCategoryChange, structure } = req.body;

    const postData = JSON.stringify({
        name,
        language,
        category,
        allowCategoryChange,
        structure
    });

    const options = {
        method: 'POST',
        hostname: baseUrl,
        path: `/whatsapp/2/senders/${senderNumber}/templates`,
        headers: {
            'Authorization': `App ${authorization}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        maxRedirects: 20
    };

    // Debugging: Log the request options and data to verify correctness
    console.log('Request Options:', options);
    console.log('Post Data:', postData);

    const reqPost = https.request(options, function (resPost) {
        let chunks = [];

        resPost.on("data", function (chunk) {
            chunks.push(chunk);
        });

        resPost.on("end", function () {
            const body = Buffer.concat(chunks);
            // Debugging: Log the response status and body
            console.log('Response Status:', resPost.statusCode);
            console.log('Response Body:', body.toString());
            res.status(resPost.statusCode).json(JSON.parse(body.toString()));
        });

        resPost.on("error", function (error) {
            console.error('Request Error:', error);
            res.status(500).json({ error: error.message });
        });
    });

    reqPost.write(postData);
    reqPost.end();
};

export const deleteTemplate = (req, res) => {
    const { senderNumber } = req.body;
    const { id } = req.params;

    const options = {
        method: 'DELETE',
        hostname: baseUrl,
        path: `/whatsapp/2/senders/${senderNumber}/templates/${id}`,
        headers: {
            'Authorization': `App ${authorization}`,
            'Accept': 'application/json'
        },
        maxRedirects: 20
    };

    // Debugging: Log the request options to verify correctness
    console.log('Request Options:', options);

    const reqDelete = https.request(options, function (resDelete) {
        let chunks = [];

        resDelete.on("data", function (chunk) {
            chunks.push(chunk);
        });

        resDelete.on("end", function () {
            const body = Buffer.concat(chunks);
            // Debugging: Log the response status and body
            console.log('Response Status:', resDelete.statusCode);
            console.log('Response Body:', body.toString());
            res.status(resDelete.statusCode).json(JSON.parse(body.toString()));
        });

        resDelete.on("error", function (error) {
            console.error('Request Error:', error);
            res.status(500).json({ error: error.message });
        });
    });

    reqDelete.end();
};

export const sendMessage = (req, res) => {
    const {
        from,
        to,
        messageId,
        templateName,
        placeholders,
        language,
        callbackData,
        notifyUrl,
        urlOptions
    } = req.body;

    const postData = JSON.stringify({
        messages: [
            {
                from,
                to,
                messageId,
                content: {
                    templateName,
                    templateData: {
                        body: {
                            placeholders
                        }
                    },
                    language
                },
                callbackData,
                notifyUrl,
                urlOptions
            }
        ]
    });

    const options = {
        method: 'POST',
        hostname: baseUrl,
        path: '/whatsapp/1/message/template',
        headers: {
            'Authorization': `App ${authorization}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        maxRedirects: 20
    };

    // Debugging: Log the request options and data to verify correctness
    console.log('Request Options:', options);
    console.log('Post Data:', postData);

    const reqPost = https.request(options, function (resPost) {
        let chunks = [];

        resPost.on("data", function (chunk) {
            chunks.push(chunk);
        });

        resPost.on("end", function () {
            const body = Buffer.concat(chunks);
            // Debugging: Log the response status and body
            console.log('Response Status:', resPost.statusCode);
            console.log('Response Body:', body.toString());
            res.status(resPost.statusCode).json(JSON.parse(body.toString()));
        });

        resPost.on("error", function (error) {
            console.error('Request Error:', error);
            res.status(500).json({ error: error.message });
        });
    });

    reqPost.write(postData);
    reqPost.end();
};
