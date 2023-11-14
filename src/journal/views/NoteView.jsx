import { Button, Typography, Row, Col, Input, Space } from 'antd';
import {
    SaveOutlined,
  } from '@ant-design/icons';
import { ImageGallery } from '../components'

const { Title } = Typography;
const { TextArea } = Input;

export const NoteView = () => {
  return (
    <Row align="middle">
      <Col span={20}>
        <Title>
          28 de agosto, 2023
        </Title>
      </Col>
      <Col span={4}>
        <Button>
          <SaveOutlined/>
          Guardar
        </Button>
      </Col>

      <Col span={24}>
        <Space direction="vertical" style={{ display: 'flex' }}>
        <Input 
          placeholder="Ingrese un título"
          label="Título"
        />

        <TextArea
          placeholder="¿Qué sucedió en el día de hoy?"
          rows={ 5 }
        />
        </Space>
      </Col>
      <Col span={24} style={{marginTop: '10px'}}>
        <ImageGallery />
      </Col>

    </Row>
  )
}
