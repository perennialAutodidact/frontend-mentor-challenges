import { useEffect, useState, useContext } from "react";
import { gsap } from "gsap";
import { NavbarContext } from "./store";
import { resetDropdowns } from "./store/actions";

export const useMobileNavTimeline = (
  mobileNavRef: React.RefObject<HTMLDivElement>,
  sideNavId: string,
  backdropId: string
) => {
  function onReverseComplete() {
    dispatch(resetDropdowns());
  }
  const [mobileNavTimeline, _] = useState<GSAPTimeline>(() =>
    gsap.timeline({
      onReverseComplete
    })
  );
  const [state, dispatch] = useContext(NavbarContext);
  const { mobileNavIsOpen } = state;
  useEffect(() => {
    if (!mobileNavRef.current || !mobileNavTimeline) return;
    const navbarSelector: gsap.utils.SelectorFunc =
      gsap.utils.selector(mobileNavRef);

    let sideNav: ReturnType<typeof navbarSelector> = navbarSelector(
      `#${sideNavId}`
    );
    let backdrop: ReturnType<typeof navbarSelector> = navbarSelector(
      `#${backdropId}`
    );

    mobileNavTimeline
      .to(sideNav, {
        duration: 0.3,
        right: "-50px",
        ease: "back.inOut(1.7)",
        immediateRender: false,
      })
      .to(
        backdrop,
        {
          duration: 0.3,
          xPercent: 100,
          immediateRender: false,
        },
        "-=0.3"
      );
  }, [mobileNavRef, mobileNavTimeline, backdropId, sideNavId, dispatch]);

  useEffect(() => {
    mobileNavIsOpen ? mobileNavTimeline.play() : mobileNavTimeline.reverse();
  }, [mobileNavIsOpen, mobileNavTimeline]);

  return mobileNavTimeline;
};
