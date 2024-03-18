const apiKey = process.env.REACT_APP_API_KEY;
const test = () => {
  return <h1>test page 1.0, Secret: {apiKey}</h1>;
};
export default test;