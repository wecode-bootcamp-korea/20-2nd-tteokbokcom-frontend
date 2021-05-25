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
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`${API.MAIN}/${id}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        setDetailInfo(res.result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeReward = () => {
    setShowReward(!showReward);
  };

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
        activeReward={activeReward}
      />
    </>
  );
}

export default Detail;
