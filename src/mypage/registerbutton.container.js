import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Popover, Button, Form, Input, DatePicker, message } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

export default function RegisterFB({ page }) {
  const [img, setImg] = useState(null);
  const router = useRouter();

  const text = (
    <div>
      뚜니 안녕!
      <br />
      여기는 뚜니를 위한 홈페이지야. <br /><br />
      오류가 워낙 많이 떠서 아직 완벽하진 않지만,
      추후 계속 업그레이드 시켜서 멋있게 만들어야지.
      <br /><br />
      내 정보에는 뚜니의 관련 정보를 다 넣어놨어. 울산대학교 홈페이지 들어가서 <br />
      느리니깐 여기서 한 번에 보고 빠르게 확인하면 좋을 것 같아. <br /><br />
      수강이력에는 뚜니가 들은 수강정보와 학점, 연도 등을 볼 수 있는데 각각 정렬이 되서 보기 편하게 되어있어 <br />
      <br />
      일대기에는 뚜니가 어떤 일들을 겪었는지 대략적으로 간단하게 기입해놨다 바보야!
    </div>
  );

  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const files = event.target.files;
    const newFileList = Array.from(files);
    setImg(newFileList[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Popover
        placement="topLeft"
        title="뚜니 사용법"
        content={text}
        trigger="click"
        autoAdjustOverflow
      >
        <Button
          type="primary"
          shape="circle"
          style={{
            position: "fixed",
            right: "40px",
            bottom: "20px",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "5vh",
            height: "5vh",
          }}
        >
          <HeartTwoTone style={{ fontSize: "4vh" }} />
        </Button>
      </Popover>
    </>
  )
};
