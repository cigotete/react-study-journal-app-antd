import { Divider, Typography, Flex, List } from 'antd';

const { Title } = Typography;
const data = ['Enero','Febrero','Marzo','Abril'];

export const SideBar = () => {
  return (
    <>
      <Flex gap="small" vertical>
        <Title level={5} style={{textAlign: 'center'}}>
            JournalApp
        </Title>
      
        <Divider />

        <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item}
          </List.Item>
        )}
        style={{margin: '5px'}}

        />
      </Flex>
    </>

  )
}
