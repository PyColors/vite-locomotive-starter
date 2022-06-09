import LocomotiveScroll from 'locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import './style.css';
 
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});
