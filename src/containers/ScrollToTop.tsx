import {FC} from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return null;
}

export default ScrollToTop;

// Helper
export const paginateScroll = () => {
  window.scrollTo(0, 0);
}