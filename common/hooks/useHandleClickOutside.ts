import React, { DOMElement, useCallback, useEffect } from "react";

export const useHandleClickOutside = (
  ref: React.RefObject<HTMLElement>,
  clickOutsideCallback: () => void
) => {

    const handleClickOutside = useCallback((e:MouseEvent)=>{
        if(!ref.current?.contains(e.target as Node)){
          clickOutsideCallback()
        }
    }, [ref, clickOutsideCallback])

  useEffect(() => {

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handleClickOutside]);
};
