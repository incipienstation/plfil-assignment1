import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Gallery: FC = () => {
  const galleryRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const handleScroll = () => {
      setScrollPosition(galleryElement.scrollLeft);
    };

    galleryElement.addEventListener('scroll', handleScroll);

    // Check if the gallery is scrollable
    setIsScrollable(
      galleryElement.scrollWidth > galleryElement.clientWidth
    );

    return () => {
      galleryElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsScrollable(true);
  };

  const handleMouseLeave = () => {
    setIsScrollable(false);
  };

  const handleScrollBy = (deltaX: number) => {
    const galleryElement = galleryRef.current;
    galleryElement.scrollLeft += deltaX;
    setScrollPosition(galleryElement.scrollLeft);
  };


  return (
    <div
      style={{
        height: "160px",
        whiteSpace: 'nowrap',
        overflowY: 'hidden',
        overflowX: 'auto',
        padding: '10px',
        transition: 'transform 0.3s ease',
        transform: `translateX(${scrollX}px)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src="pictures/test_profile.png" alt="이미지 1" />
      <Image src="pictures/test_profile.png" alt="이미지 1" />
      <Image src="pictures/test_profile.png" alt="이미지 1" />
      <Image src="pictures/test_profile.png" alt="이미지 1" />
      <Image src="pictures/test_profile.png" alt="이미지 1" />
      <Image src="pictures/test_profile.png" alt="이미지 1" />

    </div>
  );
};

const Image = styled.img`
  width: auto;
  height: 160px;
  margin-right: 8px;
`;

export default Gallery;
