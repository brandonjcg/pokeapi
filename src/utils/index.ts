export const sentenceCase = (str = '') =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const removeHyphen = (str = '') => str.replace(/-/g, ' ');
