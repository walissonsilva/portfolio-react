import React, { useState, useEffect } from "react";

const WindowWidthSize = () => {
  const [windowWidthSize, setWindowWidthSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      const { width } = document.body.getBoundingClientRect();

      console.log(width);

      setWindowWidthSize(Math.ceil(width));
    }

    window.addEventListener('resize', handleResize)
  }, []);

  return (<h1>windowWidthSize</h1>);
};

export default WindowWidthSize;