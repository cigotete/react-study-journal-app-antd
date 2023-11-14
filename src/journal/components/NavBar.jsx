import { Typography, Col, Row } from 'antd';
import {
  LogoutOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

export const NavBar = () => {
  return (
    <Row>
      <Col span={23}>
        <Title level={4}
        style={{
          marginTop: '15px',
        }}
        >JournalApp</Title>
      </Col>
      <Col span={1}>
        <LogoutOutlined />
      </Col>
    </Row>
  )
}
