import { useEffect, useState } from 'react';

function useOverlayStyle(disabled) {
  const [blurValue, setBlurValue] = useState(0);
  const [brightnessValue, setBrightnessValue] = useState(100);

  useEffect(() => {
    if (disabled) {
      setBlurValue(0);
      setBrightnessValue(100);
    } else {
      setBlurValue(10);
      setBrightnessValue(60);
    }
  }, [disabled]);

  return { blurValue, brightnessValue };
}

export default useOverlayStyle;
