export default (min, max) => {
  const convertedMax = Math.floor(max);
  return Math.floor(Math.random() * (convertedMax - min + 1)) + min;
};
