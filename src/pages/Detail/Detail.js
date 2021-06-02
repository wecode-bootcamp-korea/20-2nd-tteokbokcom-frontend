import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailIntroduction from './DetailIntroduction';
import DetailNav from './DetailNav';
import DetailProduct from './DetailProduct';
import { API } from '../../config';
import validator from '../../utills/validator';

function Detail() {
  const [detailInfo, setDetailInfo] = useState({});
  const [showReward, setShowReward] = useState(false);
  const [closeReward, setCloseReward] = useState(false);
  // const [activeScroll, setActiveScroll] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`${API.PROJECT_START}/${params.id}`)
      .then(res => res.json())
      .then(res => {
        setDetailInfo(res.result);
      });
  }, []);

  const activeReward = () => {
    setShowReward(!showReward);
  };

  // const activeScrollBtn = () => {
  //   setActiveScroll(!window.pageYOffset > 0);
  // };

  if (validator.isEmptyObject(detailInfo)) return <div>Loading...</div>;

  return (
    <>
      <DetailIntroduction
        detailInfo={detailInfo}
        showReward={showReward}
        setShowReward={setShowReward}
        activeReward={activeReward}
      />
      <DetailNav />
      <DetailProduct
        detailInfo={detailInfo}
        showReward={showReward}
        setShowReward={setShowReward}
        closeReward={closeReward}
        setCloseReward={setCloseReward}
        activeReward={activeReward}
      />
    </>
  );
}

export default Detail;
