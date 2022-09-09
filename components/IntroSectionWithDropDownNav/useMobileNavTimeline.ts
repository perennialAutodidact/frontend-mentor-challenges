import { useEffect, useState } from "react";
import { gsap } from "gsap";

export const useMobileNavTimeline = (
  mobileNavRef: React.RefObject<Element>,
  sideNavId: string,
  backdropId: string
) => {
  const [mobileNavTimeline, _] = useState<GSAPTimeline>(gsap.timeline());

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

    mobileNavTimeline.progress(0).kill();

    mobileNavTimeline
      .to(sideNav, {
        duration: 0.5,
        right: "-50px",
        ease: "back.inOut(1.7)",
        immediateRender: false,
      })
      .to(backdrop, {
        duration: 0.5,
        xPercent: 100,
        delay: -0.3,
        immediateRender: false,
      });
  }, [mobileNavRef]);

  return mobileNavTimeline;
};
