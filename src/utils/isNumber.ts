// Function that will be exported from this file as isNumber and will be tested later as example of unit test
export const isNumber = (value: any): boolean => {
  return !isNaN(parseFloat(value)) && !isNaN(value - 0);
};
