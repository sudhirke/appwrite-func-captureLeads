import { Client, Users } from 'node-appwrite';

const client = new Client()
  .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
  .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);
const users = new Users(client);

export default async ({ req, res, log, error }) => {
  //Default response to the / endpoint
  return res.send('SPXPERT Lead Capture Function is running!');
};
