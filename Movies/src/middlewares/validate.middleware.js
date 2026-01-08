export const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false, // Return all errors, not just the first one
            stripUnknown: true // Remove unknown fields from the validated data
        });

        if (error) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.details.map(err => err.message)
            });
        }

        req.body = value;
        next();
    };
};