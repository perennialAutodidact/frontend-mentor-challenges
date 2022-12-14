import React, { useEffect, useContext, useState, useRef } from "react";
import { gsap } from "gsap";
import { NavbarContext } from "./store";
import { closeDropdown, openDropdown, resetDropdowns } from "./store/actions";
export const useDropdownTimeline = (
  hasDropdownItems: boolean,
  navItemRef: React.RefObject<Element>,
  navItemId: string,
  dropdownId: string
) => {
  const [state, dispatch] = useContext(NavbarContext);

  const { openDropdownIds, closeAllDropdowns } = state;
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  function onStart() {
    dispatch(openDropdown(dropdownId));
    console.log("opening", dropdownId);
  }

  function onReverseComplete() {
    dispatch(closeDropdown(dropdownId));
    console.log("removing", dropdownId);
  }

  const [dropdownTimeline, _] = useState<GSAPTimeline>(() =>
    gsap.timeline({
      paused: true,
      onStart,
      onReverseComplete,
    })
  );

  useEffect(() => {
    if (hasDropdownItems) {
      setDropdownIsOpen(openDropdownIds.includes(dropdownId));
    }
  }, [openDropdownIds, dropdownId, hasDropdownItems]);

  useEffect(() => {
    if (navItemRef.current && hasDropdownItems) {
      const navItemSelector: gsap.utils.SelectorFunc = gsap.utils.selector(
        navItemRef.current
      );
      const dropdown: ReturnType<typeof navItemSelector> =
        navItemSelector(`.dropdown`);
      const arrowIcon: ReturnType<typeof navItemSelector> =
        navItemSelector(".arrow-icon");

      // dropdownTimeline?.progress(0).kill();
      dropdownTimeline
        .to(arrowIcon, {
          rotation: 180,
          duration: 0.3,
          immediateRender: false,
        })

        .to(
          dropdown,
          {
            maxHeight: 200,
            ease: "back.inOut(1.7)",
            duration: 0.3,
            immediateRender: false,
          },
          "<"
        )
        .to(
          dropdown,
          {
            opacity: 1,
            duration: 0.2,
            immediateRender: false,
          },
          "<"
        );
    }

    // return () => {
    //   dropdownTimeline?.progress(0).kill();
    // };
  }, [navItemRef, navItemId, dropdownTimeline, hasDropdownItems]);

  useEffect(() => {
    closeAllDropdowns && dropdownIsOpen && dropdownTimeline.reverse();
  });

  return { dropdownTimeline, dropdownIsOpen };
};
