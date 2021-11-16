import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loader = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 25);
    // stop increase when its 90
    if (progress === 90) {
      return () => {
        clearInterval(loader);
      };
    }
    return () => {
      clearInterval(loader);
    };
  }, []);

  return <ProgressBar now={progress} animated className="sticky-top" />;
}
