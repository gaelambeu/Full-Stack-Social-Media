// ERROR MIDDLEWARE | NEXT FUNCTION

const errorMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: 404,
        success: "failed",
        message: err,
    };

    if (err?.name === "ValidationError") {
        defaultError.statusCode = 404;

        defaultError.message = Object.values(err, errors)
            .map((el) => el.message)
            .join(",");
    }

    //duplicate error
}