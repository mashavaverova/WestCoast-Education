export const state = {
    api: {
        baseUrl: 'http://localhost:3000',
    },
};
const convertFormDataToJson = (formData) => {
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value.toString();
    });
    return data;
};
export { convertFormDataToJson };
