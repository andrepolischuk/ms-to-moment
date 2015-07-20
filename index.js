export default (date) => {
  return Math.abs((new Date()).valueOf() - date.valueOf());
};
