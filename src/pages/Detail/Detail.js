import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailIntroduction from './DetailIntroduction';
import DetailNav from './DetailNav';
import DetailProduct from './DetailProduct';
import { API } from '../../config';
import validator from '../../utills/validator';

function Detail() {
  const [detailInfo, setDetailInfo] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);
  const [showReward, setShowReward] = useState(false);
  const [closeReward, setCloseReward] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(`${API.PROJECT_START}/${params.id}`)
      .then(res => res.json())
      .then(res => {
        setDetailInfo(res.result);
      });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', mobileResize);
    return () => {
      window.removeEventListener('resize', mobileResize);
    };
  }, []);

  const activeReward = () => {
    setShowReward(!showReward);
  };

  const mobileResize = () => {
    setIsMobile(!isMobile);
  };

  if (validator.isEmptyObject(detailInfo)) return <div>Loading...</div>;

  return (
    <>
      <DetailIntroduction
        detailInfo={detailInfo}
        showReward={showReward}
        setShowReward={setShowReward}
        activeReward={activeReward}
        isMobile={isMobile}
      />
      <DetailNav />
      <DetailProduct
        detailInfo={detailInfo}
        showReward={showReward}
        setShowReward={setShowReward}
        isMobile={isMobile}
        closeReward={closeReward}
        setCloseReward={setCloseReward}
        activeReward={activeReward}
      />
    </>
  );
}

export default Detail;
