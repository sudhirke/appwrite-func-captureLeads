import { Client, Functions, Databases } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  // Initialize the Databases service
  const databases = new Databases(client);

  // Handle POST request to create a new document in the Appwrite database
  if (req.method === 'POST') {
    try {
      const data = req.body;

      return res.json({ success: true, data: data });
    } catch (err) {
      error('Error creating document:', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  } else if (req.method === 'GET') {
    try {
      const functions = new Functions(client);

      const response = await functions.listVariables({
        functionId: '6a9bc956003d71d42a92',
      });

      log('Fetched documents:', response);

      return res.json({ success: true, data: response });
    } catch (err) {
      error('Error fetching documents:', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: 'Method Not Allowed' });
  }

  //Default response to the / endpoint
  return res.send('SPXPERT Lead Capture Function');
};
