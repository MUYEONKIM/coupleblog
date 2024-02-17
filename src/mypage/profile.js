import { Badge, Descriptions } from 'antd';
import Classpage from './class';

export default function Profileinfo() {

  const items = [
    {
      key: '1',
      label: '성명',
      children: '유혜림',
    },
    {
      key: '2',
      label: '주민등록번호',
      children: '000914-*******',
    },
    {
      key: '3',
      label: '본명',
      children: '뚜니',
    },
    {
      key: '4',
      label: '이메일',
      children: 'yhr2597@naver.com',
    },
    {
      key: '5',
      label: '영문성명',
      children: '성 :YU | 이름 :HYERIM',
      span: 2,
    },
    {
      key: '6',
      label: '출신고등학교',
      children: '매곡고등학교',
    },
    {
      key: '7',
      label: '졸업일자',
      children: '2024.02.16',
    },
    {
      key: '8',
      label: '지역명',
      children: '울산',
    },
    {
      key: '9',
      label: '주소',
      children: '(우편번호 : 442 - 18 ) 울산광역시 북구 신천로 27 101동 804호 (신천동,극동스타클래스)',
      span: 3,
    },
    {
      key: '10',
      label: '전화번호',
      children: '052-298-2597',
      span: 1.5,
    },
    {
      key: '11',
      label: '휴대폰',
      children: '010-3879-2597',
      span: 1.5,
    },
  ];

  const items2 = [
    {
      key: '1',
      label: '과정구분',
      children: '석사',
      span: 1.5
    },
    {
      key: '2',
      label: '반려동물',
      children: '몽이'
    },
    {
      key: '3',
      label: '소속',
      children: '경영대학 경영학부 경영학전공 / 주간(세부전공)',
      span: 1.5
    },
    {
      key: '4',
      label: '학년/학기',
      children: '4 학년 / 8 학기 /  학기제 : 8 /  이수학기 : 7',
      span: 1.5
    }, {
      key: '5',
      label: '증명소속',
      children: '경영대학 경영학부 경영학전공',
      span: 1.5
    },
    {
      key: '6',
      label: '병역구분',
      children: '여자',
      span: 1.5
    }, {
      key: '7',
      label: '연애 여부',
      children: <Badge status="processing" text="연애중 (땀미)" />,
      span: 1.5
    },
    {
      key: '8',
      label: '특징',
      children: '귀여운 뚜!',
      span: 1.5
    }
  ];
  return (
    <>
      <img src='/profile.jpg' style={{ borderRadius: "100%", width: "200px", height: "200px" }} />
      <p style={{ fontSize: "23px", fontWeight: "bold" }}>내 정보</p>
      <br />
      <Descriptions bordered items={items} />
      <br />
      <Descriptions column={2} bordered items={items2} />
      <br />
    </>
  )
}