import { useState } from "react";

export function useVideo() {
  const [isWistiaReady, setIsWistiaReady] = useState(false);
  const [initWistia, setInitWistia] = useState(false);
  return {
    isWistiaReady,
    setIsWistiaReady,
    initWistia,
    setInitWistia,
  };
}
