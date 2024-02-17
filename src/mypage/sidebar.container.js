import { useEffect } from "react";
import { Menu } from "antd";
import { pageitem } from "../store/store";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";

const Profile = () => {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        width: "250px",
        height: "50px",
        backgroundColor: "#74A26E",
        position: 'fixed',
        bottom: 0,
        left: 0
      }}
    >
      <div
        style={{
          fontSize: "1.8vh",
          textAlign: "right",
          marginRight: "24px"
        }}
      >
        <p style={{ fontSize: "1.4vh", fontWeight: "600" }}>
          문의사항
        </p>
        <p style={{ marginLeft: "auto", fontSize: "1.4vh", fontWeight: "600" }}>
          📞 010-4048-7042
        </p>
      </div>
    </div>
  );
};



export default function SideBar() {
  const Mybutton = styled.button`
  appearance: none;
  background-color: #B9D3A3;
  border-width: 0;
  box-sizing: border-box;
  border-radius: 0 5% 5% 0;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: Clarkson,Helvetica,sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 3.5vh;
  margin: 4px 0 4px 0;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  font-weight: bold;
  white-space: nowrap;
  color: white;
  width: 200px;

  &:before {
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: opacityFallbackOut .5s step-end forwards;
  backface-visibility: hidden;
  background-color: #37551C;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "바로가기 ➡️";
  color: white;
  height: 100%;
  font-weight: bold;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
  width: 100%;
  border-radius: 0 5% 5% 0;
}

&:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

&:after {
  background-color: #37551C;
  color: white;
}
`
  const [item, setItem] = useRecoilState(pageitem);
  const data = ["내 정보", "수강이력", "일대기"]

  console.log(item)
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "11vh",
          fontSize: "2vh",
          padding: 0,
          backgroundColor: "#74A26E",
          borderRadius: "0 5% 5% 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "11vh",
            width: "250px",
          }}
        >
          <img
            src="/profile.jpg"
            style={{
              marginLeft: 30,
              height: "48px",
              width: "48px",
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            }}
          />
          <p style={{
            marginLeft: "auto", paddingRight: "10px", fontSize: "14px", fontWeight: "bolder"
          }}>유혜림님 환영합니다</p>
        </div>
      </div>
      {data?.map((el, index) => (
        <div
          key={index}
          onClick={() => setItem(index + 1)}
        >
          <Mybutton
          // style={{
          //   backgroundColor: "#B9D3A3",
          //   borderRadius: "5%",
          //   display: "flex",
          //   height: "7vh",
          //   color: "white",
          //   textAlign: "center",
          //   fontSize: "1.6vh",
          //   margin: 4,
          // }}
          >
            {el}
          </Mybutton>
          <div
            style={{
              position: "absolute",
              bottom: "0",
            }}
          >
            <Profile number={index} />
          </div>
        </div>
      ))}
    </>
  )
}
