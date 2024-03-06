import React, { useState, useEffect } from "react";
import SideBar from "./sidebar.container";
import RegisterFB from "./registerbutton.container";
import AnimalListView from "./animallist.container";
import { Layout } from "antd";
import styled from "@emotion/styled"
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useRecoilState } from "recoil";
import { pageitem } from "../store/store";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('내 정보', '1', <PieChartOutlined />),
  getItem('수강이력', '2', <DesktopOutlined />),
  getItem('일대기', '3', <ContainerOutlined />),
];

const { Content, Sider } = Layout;

export default function MyAnimalPage() {
  const [item, setItem] = useRecoilState(pageitem);

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  console.log("qwe")
  return (
    <Layout style={{
      height: "100vh", display: "flex",
      backgroundImage: 'url("/bg.png")',
      backgroundSize: 'cover',
      overflow: 'auto',
      flexDirection: "row"
    }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed"
        }}
      >
        <div
          style={{
            width: 256,
          }}
        >
          {/* <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="white"
            inlineCollapsed={collapsed}
            items={items}
            onClick={(data) => {
              setItem(data.key)
            }}
          /> */}
          {/* <Button
            type="default"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button> */}
        </div>
        <SideBar />
      </div>
      <Content >
        <AnimalListView />
      </Content>
      <RegisterFB page={"mypage"} />

    </Layout>
  );
}
