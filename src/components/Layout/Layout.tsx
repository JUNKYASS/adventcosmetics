
import React, { useCallback } from 'react';
import { createRef, useEffect, useRef, useState } from 'react';
import FloatNav from 'components/FloatNav/FloatNav';
import styles from './Layout.module.scss';
import { useMediaQuery } from 'react-responsive';

interface ILayoutProps {
  children: React.ReactNode,
  childRefs: any[],
}

const Layout = (props: ILayoutProps) => {
  const { children, childRefs } = props;
  const isLaptop = useMediaQuery({ maxWidth: 780 });
  const [isWindowScrolled, setIsWindowScrolled] = useState<boolean>(false);
  const [currentScreen, setCurrentScreen] = useState<number>(0);

  const handleScroll = (offsets: number[]) => {
    const index = offsets.findIndex((item, i) => item <= (document.body.scrollTop + 150) && offsets[i + 1] > (document.body.scrollTop + 150));

    index <= 0 ? setCurrentScreen(0) : setCurrentScreen(index);
    if(document.body.scrollTop > 0) setIsWindowScrolled(true); // Once we scroll page we will set the "isWindowsScolled" variable to "true"
    if(document.body.scrollTop == 0) setIsWindowScrolled(false); // If we stay at the top of the page the "isWindowsScolled" variable will be "false"
  };

  useEffect(() => {
    console.log(currentScreen);
    
  }, [currentScreen]);

  useEffect(() => {
    const topOffsets = childRefs.map((ref) => (ref.current.getBoundingClientRect().top));
    const handleScrollWrap = () => handleScroll(topOffsets);

    if (topOffsets && topOffsets.length > 0) window.addEventListener('scroll', handleScrollWrap, { capture: true });
    
    return () => {
      document.removeEventListener('scroll', handleScrollWrap);
    };
  }, [childRefs]);

  return (
    <div className={styles.layout}>
      {!isLaptop && <FloatNav elements={children} currentScreen={currentScreen} isWindowScrolled={isWindowScrolled} />}
      {children}
    </div>
  );
};

export {
  Layout
};