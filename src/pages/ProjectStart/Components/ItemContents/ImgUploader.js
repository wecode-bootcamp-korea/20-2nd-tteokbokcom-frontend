import React, { useRef, useState } from 'react';
import { lighten } from 'polished';
import { useEditorContext } from '../../ProjectStart';
import Button from '../../../../components/Button/Button';
import styled from 'styled-components/macro';

const project_img = new FormData();
const profile_img = new FormData();

export default function ImgUploader({ type, width, height, accept }) {
  const uploadRef = useRef();
  const { form, setForm } = useEditorContext();
  const [uploadedImg, setUploadedImg] = useState('파일을 선택해주세요');

  const handleImgUpload = e => {
    //화면에 표시할 이미지 파일 이름
    setUploadedImg(uploadRef.current.files[0]?.name);

    const { name } = e.target;

    if (name === 'project_img') {
      project_img.append(name, uploadRef.current.files[0]);
      setForm({
        ...form,
        project_img_data: project_img,
      });
    }
    if (name === 'profile_img') {
      profile_img.append(name, uploadRef.current.files[0]);
      setForm({
        ...form,
        profile_img_data: profile_img,
      });
    }
  };

  return (
    <Upload>
      <UploadNotice>
        파일 형식은 {accept}로, 사이즈는 가로 {width}px, 세로 {height}
        px 이상으로 올려주세요.
      </UploadNotice>
      <UploadNotice>{uploadedImg || '파일을 선택해주세요'}</UploadNotice>
      <Uploader ref={uploadRef} type="file" name="file" accept={accept} />
      <Button onClick={handleImgUpload} name={type} color="blue">
        파일 올리기
      </Button>
    </Upload>
  );
}

const Upload = styled.label`
  ${({ theme }) => theme.flexColumnSet()};
  padding: 15px;
  margin: 10px 0;
  border: 2px solid ${lighten(0.3, '#3a6ff2')};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  &:hover,
  &:focus {
    border-color: #3a6ff2;
  }
`;

const UploadNotice = styled.p`
  margin-bottom: 15px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

const Uploader = styled.input`
  opacity: 0;
`;
