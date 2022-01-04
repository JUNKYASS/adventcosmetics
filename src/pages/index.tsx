import React from 'react';
import { Layout } from 'components/Layout/Layout';
import WelcomeScreen from 'components/WelcomeScreen/WelcomeScreen';

const Home: React.FC = () => {
  return (
    <Layout>
      <WelcomeScreen />
    </Layout>
  );
};

export default Home;