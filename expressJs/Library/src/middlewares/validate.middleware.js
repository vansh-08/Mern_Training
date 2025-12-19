// export const validateUser = (res, req, next) => {
//     console.log("User validated Successfully");
//     next();
// }

export const validateUser = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false, // dont just stop on first error
            stripUnknown: true // remove fields not in schema
        });

        if (error) {
            return res.status(400).json({ message: 'Validation failed',
                details: error.details.map(err => err.message)
            });
        }
        req.body = value;
        next();
    };
};