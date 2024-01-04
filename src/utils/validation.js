export const checkInputFields = (requiredFields, inputFields) => {
    const missingFields = [];

    for (const field of requiredFields) {
        const trimmedValue = inputFields[field].trim();

        if (!trimmedValue) {
            missingFields.push(field);
        } else if (field === 'email' && !isValidEmail(trimmedValue)) {
            missingFields.push(field);
        }
    }

    return missingFields;
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
