"use client";

import { createContext, useContext, useState } from "react";

const useValue = () => {
  const [displayGallery, setDisplayGallery] = useState<boolean>(false);
  const [displayGiftUs, setDisplayGiftUs] = useState<boolean>(false);

  return {
    displayGallery,
    displayGiftUs,
    setDisplayGiftUs,
    setDisplayGallery,
  };
};

export const WidgetContext = createContext({} as ReturnType<typeof useValue>);

function WidgetProvider(props: any) {
  return (
    <WidgetContext.Provider value={useValue()}>
      {props.children}
    </WidgetContext.Provider>
  );
}

export const useWidget = () => useContext(WidgetContext);

export default WidgetProvider;
