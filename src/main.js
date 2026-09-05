export default async (context) => {
  //Default response to the / endpoint
  context.log('SPXPERT Lead Capture Function is running!');
  return context.res.send('SPXPERT Lead Capture Function is running!');
};
