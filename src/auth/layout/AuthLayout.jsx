import { Row, Col, Typography, Card } from 'antd';

const { Title } = Typography;

export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Row
    justify='center'
    align='middle'
    style={{
      height: '90vh'
      }}
    >

      <Col>
        <Card>
          
          <Title level={2}>{ title }</Title>
            
            { children }

        </Card>
      </Col>

    </Row>

  )
}
