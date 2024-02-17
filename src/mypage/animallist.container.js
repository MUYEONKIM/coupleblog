import React, { useState, useEffect } from "react";
import { Card, Modal } from "antd";
import Profileinfo from "./profile";
import { pageitem } from "../store/store";
import { useRecoilState } from "recoil";
import Classpage from "./class";
import { contentdata } from "../data/data";
import MyModal from "./contentmodal";
const { Meta } = Card;
const content = contentdata

const AnimalsList = ({ data }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen((curr) => !curr);
  };


  return (
    <>
      <MyModal showModal={showModal} open={open} data={data} />
      <Card
        onClick={showModal}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "55vw",
          height: "24vh",
        }}
        hoverable
        cover={
          <img
            alt="example"
            src={`/${data.img}`}
            style={{
              marginTop: 5,
              marginLeft: 5,
              width: "15vw",
              height: "95%",
              objectFit: "cover", // 이미지 비율을 유지한 채로 채우도록 설정
              borderRadius: "5%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        }
      >
        <Meta
          style={{
            height: "90%",
            width: "35vw",
            textAlign: "start",
          }}
          title={<div style={{
            fontSize: "2.8vh",
            width: "500px",
            height: "100%",
          }}>{data.title}</div>}
          description={
            <div style={{
              fontSize: "2vh",

            }}>
              {data.content}
            </div>
          }
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.5vh", marginLeft: "auto", marginTop: "auto", padding: "0.5vw" }}>
            {data.date}
          </div>
        </div>
      </Card>
      <div style={{ height: '20px' }}>
      </div>
    </>
  );
};

export default function AnimalListView() {
  const [item] = useRecoilState(pageitem);
  console.log(item)

  return (
    <div
      style={{
        marginLeft: "27vh",
        marginTop: "7vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ marginBottom: "1px" }}
      >
      </div>
      <div
        style={{
          fontSize: "5vh",
          textAlign: "center",
        }}
      >
        {item === 1 ? (
          <div
            style={{
              boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
              padding: "35px",
              borderRadius: "3%",
              backgroundColor: "white"
            }}>

            <Profileinfo />
          </div>
        ) : (
          item === 2 ? (
            <div
              style={{
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                padding: "40px",
                borderRadius: "3%",
                backgroundColor: "white"
              }}>
              <Classpage />
            </div>
          ) : (
            <>
              {content.map((el) => (
                <>
                  <AnimalsList data={el} />
                </>
              ))}
            </>
          )
        )}
      </div>
    </div>
  );
}
