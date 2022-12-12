export const handler = async () => {
  console.log(process.version);

  return {
    statusCode: 200,
  };
};
