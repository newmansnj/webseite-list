import { Card, Collapse, List, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const data = [
  {
    id: 1,
    name: 'Unternehmen A',
    address: 'srtraße 1, 12345 stadt',
    description:
      'Lore in fal pharetra ut eu nisl.',
    isPartner: true,
    industry: 'IT',
    foundingYear: 2005,
  },
  {
    id: 2,
    name: 'Unternehmen B',
    address: 'srtraße 2, 12345 stadt',
    description: 'No Partner',
    isPartner: false,
    industry: 'Marketing',
    foundingYear: 1998,
  },
  {
    id: 3,
    name: 'Unternehmen C',
    address: 'srtraße 3, 12345 stadt',
    description: 'No Partner',
    isPartner: false,
    industry: 'Finance',
    foundingYear: 1985,
  },
];

const PartnerDetails = ({ data }) => {
  return (
    <div style={{ width: '200%', marginLeft: '40%', paddingTop: '24px' }}>
      <Card>
      <Text>{data.id}</Text>
        <br />
      <Text>{data.name}</Text>
        <br />
      <Text>{data.address}</Text>
        <br />
        <Text>{data.description}</Text>
        <br />
       <Text>{data.isPartner}</Text>
        <br />
        <Text>{data.industry}</Text>
        <br />
        <Text>{data.foundingYear}</Text>
      </Card>
    </div>
  );
};

const App = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ padding: '24px', display: 'flex' }}>
      <div style={ isMobile ? ( { width: '100%' }): ({ width: '40%' })}>
        <Title level={2}>Unsere Unternehmen</Title>
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Card title={item.name} >
                {item.isPartner ? (
                  <>
                    {isMobile ? (
                      <Collapse defaultActiveKey={['1']}>
                        <Panel header="Beschreibung" key="1">
                          <Text>{item.description}</Text>
                          <>
                        <Text>{item.description}</Text>
                        <br />
                        <Text>{item.industry}</Text>
                        <br />
                        <Text>{item.foundingYear}</Text>
                      </>
                        </Panel>
                      </Collapse>
                    ) :  <Text>{item.address}</Text>}
                  </>
                ) :  <Text>{item.address}</Text>             
                }
               
              </Card>
            </List.Item>
          )}
        />
      </div>
      <>  { isMobile ?<> </>: (
      <div>{data.map((item) => item.isPartner && <PartnerDetails data={item} />)}</div>)} </>
    </div>
  );
};

export default App;
