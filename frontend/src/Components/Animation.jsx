import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function Animation() {
  const imgArray = ['https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a',
    'https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3'];
  const [image, setImage] = useState(imgArray[0]);
  const [imageIndex, setImageIndex] = useState(0);

  let i = 0;
  const maxImgArray = imgArray.length - 1;

  useEffect(() => {
    let interval = null;
    if (i !== maxImgArray) {
      interval = setInterval(() => {
        let image = imgArray[imageIndex];
        const attr = document.getElementById("moving-image");
        attr.scr = image;
        setImageIndex((imageIndex) =>
          imageIndex === maxImgArray ? 0 : imageIndex + 1
        );
        setImage(attr.scr);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [image, imageIndex]); 
  return (
    <motion.div
      key={image}
      initial={{ x: -200, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 1,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 2 }
      }}
    >
      <img src={image} id="moving-image"></img>
    </motion.div>
  )
}

export default Animation
