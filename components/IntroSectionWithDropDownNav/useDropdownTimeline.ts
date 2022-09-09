import React, { useEffect, useContext, useState, useRef } from "react";
import { gsap } from "gsap";
import { NavbarContext } from "./store";
import { closeDropdown, openDropdown } from "./store/actions";
export const useDropdownTimeline = (
  navItemRef: React.RefObject<Element>,
  navItemId: string
) => {
  const [state, dispatch] = useContext(NavbarContext);
  const { openDropdownIds } = state;
  const [dropdownTimeline, _] = useRef<GSAPTimeline>(gsap.timeline());
  //   const timelineRef = useRef<GSAPTimeline>();
  //   let dropdownTimeline: GSAPTimeline | undefined;
  const dropdownIsOpen = !!(
    navItemRef.current && openDropdownIds.includes(navItemRef.current)
  );

  useEffect(() => {
    // if (!navItemRef.current) return;
    // timelineRef.current = gsap.timeline({});
    // dropdownTimeline = timelineRef.current;
    //   console.log({ current: navItemRef.current, dropdownIsOpen });
    const navItemSelector: gsap.utils.SelectorFunc = gsap.utils.selector(
      navItemRef.current
    );
    const dropdown: ReturnType<typeof navItemSelector> =
      navItemSelector(`.dropdown`);
    const arrowIcon: ReturnType<typeof navItemSelector> =
      navItemSelector(".arrow-icon");

    console.log({ navItemId, dropdown, arrowIcon, navItemRef });

    if (dropdownTimeline) {
      dropdownTimeline.progress(0).kill();

      dropdownTimeline;

      // .to(dropdown, {
      //   maxHeight: 200,
      //   duration: 0.5,

      //   onComplete: function () {
      //     console.log("COMPLETE");
      //     navItemRef.current &&
      //       dispatch(
      //         dropdownIsOpen
      //           ? closeDropdown(navItemRef.current)
      //           : openDropdown(navItemRef.current)
      //       );
      //   },
      // })
      // .to(dropdown, {
      //   opacity: 1,
      //   duration: 0.2,
      //   delay: -0.3,
      // })
      // .to(arrowIcon, {
      //   rotation: 180,
      //   duration: 0.3,
      //   delay: -0.5,
      // });
    }
    // return () => {
    //   dropdownTimeline?.progress(0).kill();
    // };
  }, [navItemRef]);

  return { dropdownTimeline, dropdownIsOpen };
};
