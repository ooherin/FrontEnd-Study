export const timeHelper = (date: Date) => {
  let convertedTime = "";
  const currentTime = new Date(date).getTime();
  const msDiff = Date.now() - currentTime;
  const minDiff = Math.floor(msDiff / 60000);
  const hourDiff = Math.floor(minDiff / 60);
  const dayDiff = Math.floor(hourDiff / 24);

  if (hourDiff >= 24 * 365) {
    return (convertedTime = `오래 전`);
  }
  if (hourDiff >= 24) {
    return (convertedTime = `${dayDiff}일 전`);
  }
  if (minDiff >= 60) {
    return (convertedTime = `${hourDiff}시간 전`);
  }
  if (minDiff >= 1) {
    return (convertedTime = `${minDiff}분 전`);
  }
  convertedTime = "방금 전";
  return convertedTime;
};
