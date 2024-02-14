export const state = {
    api: {
        baseUrl: 'http://localhost:3000',
    },
};
// Convert FormData to JSON
const convertFormDataToJson = (formData) => {
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value.toString();
    });
    return data;
};
export { convertFormDataToJson };
