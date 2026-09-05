import { Client, Databases } from 'node-appwrite';

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
      const response = await databases.createDocument(
        process.env.APPWRITE_DATABASE_ID,
        process.env.APPWRITE_COLLECTION_ID,
        'unique()', // Unique ID for the document
        data
      );
      return res.json({ success: true, data: response });
    } catch (err) {
      error('Error creating document:', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  } else if (req.method === 'GET') {
    try {
      const response = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        process.env.APPWRITE_COLLECTION_ID
      );
      return res.json({ success: true, data: response.documents });
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
