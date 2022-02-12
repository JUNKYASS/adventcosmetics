import React, { useEffect, useRef, useState } from 'react';
import { Layout } from 'components/Layout/Layout';
import WelcomeScreen from 'components/WelcomeScreen/WelcomeScreen';
import AboutScreen from 'components/AboutScreen/AboutScreen';
import AdvantagesScreen from 'components/AdvantagesScreen/AdvantagesScreen';
import BoxComposition from 'components/BoxComposition/BoxComposition';

const Home: React.FC = () => {
  const welcomeScreenRef = useRef();
  const aboutScreenRef = useRef();
  const boxCompositionRef = useRef();
  const advantagesScreenRef = useRef();
  const [childRefs, setChildRef] = useState<any[]>([]);

  useEffect(() => {
    setChildRef([welcomeScreenRef, aboutScreenRef, boxCompositionRef, advantagesScreenRef]);
  }, []);

  return (
    <Layout childRefs={childRefs}>
      <WelcomeScreen id='welcomescreen' refProp={welcomeScreenRef} />
      <AboutScreen id='aboutscreen' refProp={aboutScreenRef} />
      <BoxComposition id='boxcomposition' refProp={boxCompositionRef} />
      <AdvantagesScreen id='advantagesscreen' refProp={advantagesScreenRef} />
    </Layout>
  );
};

export default Home;