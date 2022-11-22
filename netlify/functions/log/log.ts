// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
export const handler = async () => {
  console.log(`Hello`);

  return {
    statusCode: 200,
  };
};
