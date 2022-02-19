import React, { useEffect, useRef, useState } from 'react';
import { Layout } from 'components/Layout/Layout';
import WelcomeScreen from 'components/WelcomeScreen/WelcomeScreen';
import AboutScreen from 'components/AboutScreen/AboutScreen';
import AdvantagesScreen from 'components/AdvantagesScreen/AdvantagesScreen';
import BoxCompositionScreen from 'components/BoxCompositionScreen/BoxCompositionScreen';

const Home: React.FC = () => {
  const welcomeScreenRef = useRef();
  const aboutScreenRef = useRef();
  const boxCompositionScreenRef = useRef();
  const advantagesScreenRef = useRef();
  const [childRefs, setChildRef] = useState<any[]>([]);

  useEffect(() => {
    setChildRef([welcomeScreenRef, aboutScreenRef, boxCompositionScreenRef, advantagesScreenRef]);
  }, []);

  return (
    <Layout childRefs={childRefs}>
      <WelcomeScreen id='welcomescreen' refProp={welcomeScreenRef} />
      <AboutScreen id='aboutscreen' refProp={aboutScreenRef} />
      <BoxCompositionScreen id='boxcomposition' refProp={boxCompositionScreenRef} />
      <AdvantagesScreen id='advantagesscreen' refProp={advantagesScreenRef} />
    </Layout>
  );
};

export default Home;