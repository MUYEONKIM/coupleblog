import { Button, Modal } from 'antd';
const MyModal = ({ data, open, showModal }) => {
  return (
    <>
      <Modal
        open={open}
        title={data.title}
        onOk={showModal}
        onCancel={showModal}
        style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
        }}
        footer={[
          <Button key="submit" type="primary" onClick={showModal}>
            뚜니
          </Button>
        ]}
      >
        <img
          alt="example"
          src={`/${data.img}`}
          style={{
            marginTop: 5,
            width: "500px",
            height: "500px",
            objectFit: "cover", // 이미지 비율을 유지한 채로 채우도록 설정
            borderRadius: "5%",
          }}
        />
        <br />
        <br />
        <p>{data.content}</p>
        <div style={{ fontSize: "1.5vh", marginTop: "15px", fontWeight: "bold" }}>
          {data.date}
        </div>
      </Modal>
    </>
  );
};
export default MyModal;