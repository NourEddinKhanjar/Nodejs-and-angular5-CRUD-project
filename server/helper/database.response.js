let response = {
    status: 200,
    data: [],
    message: null,
    success: true
};

const sendHttpError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message: err;
    response.data = [];
    response.success = false;
    res.status(501).json(response);
};

const sendHttpSuccess = (message, data, success, res) => {
    response.status = 200;
    response.message = message;
    response.data = data;
    response.success = success;
    res.status(200).json(response);
};

module.exports = {sendHttpError, sendHttpSuccess};

