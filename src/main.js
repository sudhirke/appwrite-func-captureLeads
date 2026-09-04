export default async ({ req, res, log, error }) => {
  //Default response to the / endpoint
  return res.json({
    motto: "SPXPERT Lead Capture Service",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};
