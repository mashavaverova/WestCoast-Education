export const state = {
    api: {
        baseUrl: 'http://localhost:3000',
    },
};




const convertFormDataToJson = (formData: FormData): Record<string, string> => {
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    return data;
  };
  
  export { convertFormDataToJson };