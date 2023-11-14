import { Col, Row, Typography } from 'antd';
import {
  StarOutlined,
} from '@ant-design/icons';


export const NothingSelectedView = () => {
  return (
    <Row
    justify="center"
    align="middle"
    style={{
      textAlign: 'center',
      marginTop: '20px',
      height: '100%',
    }}
    >
        <Col span={24}>
            <StarOutlined
                style={{ fontSize: '6rem' }}
            />
        </Col>
        <Col span={24}>
        <Typography>Selecciona o crea una entrada</Typography>
        </Col>
    </Row>
  )
}
