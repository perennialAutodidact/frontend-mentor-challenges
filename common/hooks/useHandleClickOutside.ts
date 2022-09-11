import React, { DOMElement, useCallback, useEffect } from "react";

export const useHandleClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  clickOutsideCallback: () => void
) => {
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        !refs.some((ref) => {
          console.log({
            ref: ref.current,
            target: e.target,
            contains: ref.current?.contains(e.target as Node),
          });
          return ref.current?.contains(e.target as Node);
        })
      ) {
        clickOutsideCallback();
      }
    },
    [refs, clickOutsideCallback]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, handleClickOutside]);
};
