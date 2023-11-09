const generateRandomId = () =>
  Date.now().toString().substring(9) +
  Math.random().toString(36).substring(2, 8);

export const assignId = object => ({ ...object, id: generateRandomId() });
