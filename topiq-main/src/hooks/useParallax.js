// src/hooks/useParallax.js

import { useEffect, useRef, useState } from "react";

/**
 * ==========================================================
 * useParallax
 * ==========================================================
 *
 * Production-ready parallax movement hook.
 *
 * Features
 * ----------
 * ✅ Smooth scroll based movement
 * ✅ RequestAnimationFrame optimization
 * ✅ SSR safe
 * ✅ Configurable speed
 * ✅ Configurable direction
 * ✅ Automatically cleans listeners
 * ✅ Perfect for hero illustrations/background blobs
 *
 *
 * Usage
 * ----------
 *
 * const { ref, style } = useParallax();
 *
 * <div
 *   ref={ref}
 *   style={style}
 * >
 *    Image
 * </div>
 *
 *
 * Advanced:
 *
 * const { ref, style } = useParallax({
 *   speed: 0.3,
 *   direction: "up"
 * });
 *
 */


export default function useParallax({
  speed = 0.15,
  direction = "up",
  disabled = false,
} = {}) {

  const elementRef = useRef(null);

  const animationFrame = useRef(null);

  const [offset, setOffset] = useState(0);



  useEffect(() => {

    if (
      disabled ||
      typeof window === "undefined"
    ) {
      return;
    }


    const element =
      elementRef.current;


    if (!element) return;



    const updatePosition = () => {

      const rect =
        element.getBoundingClientRect();


      const windowHeight =
        window.innerHeight;



      const elementCenter =
        rect.top +
        rect.height / 2;



      const distance =
        elementCenter -
        windowHeight / 2;



      let movement =
        distance * speed;



      if (direction === "down") {
        movement = -movement;
      }


      if (direction === "left") {
        movement =
          distance *
          speed *
          -1;
      }


      if (direction === "right") {
        movement =
          distance *
          speed;
      }



      setOffset(movement);

    };



    const handleScroll = () => {

      if (!animationFrame.current) {

        animationFrame.current =
          requestAnimationFrame(() => {

            updatePosition();

            animationFrame.current =
              null;

          });

      }

    };



    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive:true,
      }
    );


    updatePosition();



    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );


      if(animationFrame.current){

        cancelAnimationFrame(
          animationFrame.current
        );

      }

    };


  }, [
    speed,
    direction,
    disabled,
  ]);



  return {

    ref: elementRef,


    style:{
      transform:
        `translate3d(0, ${offset}px, 0)`,

      willChange:
        "transform",
    },

  };

}