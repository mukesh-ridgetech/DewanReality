import React, { useState } from 'react';
import { Tabs, Collapse } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Esential = () => {
  const [activeKey, setActiveKey] = useState('1'); // Manage collapse state

  const handleCollapseChange = (key) => {
    setActiveKey(key); // Accordion behavior, only one can be open
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" style={{backgroundColor:"#F8F8F8",padding:"10px"}}>
        {/* Tab 1: Transit */}
        <TabPane tab="Transit" key="1">
          <Collapse accordion activeKey={activeKey} onChange={handleCollapseChange} style={{border:"none"}}>
            <Panel header={<span><EnvironmentOutlined /> Bus Stations</span>} key="1" style={{backgroundColor:"white",border:"none",marginBottom:"10px"}}>
              <ul className='Eseential-container'>
                <li className='Essential-text'>Paras Hospital <span style={{ float: 'right' }}>0.3 km | 3 mins</span></li>
                <li>Genpact Sector 43 & 40 <span style={{ float: 'right' }}>1.2 km | 16 mins</span></li>
                <li>DLF Centre Court <span style={{ float: 'right' }}>1.7 km | 22 mins</span></li>
                <li>Genpact Chowk <span style={{ float: 'right' }}>1.4 km | 17 mins</span></li>
                <li>Vishal Bus Services <span style={{ float: 'right' }}>1.9 km | 23 mins</span></li>
              </ul>
            </Panel>
            <Panel header={<span><EnvironmentOutlined /> Airports</span>} key="2" style={{backgroundColor:"white",border:"none",marginBottom:"10px"}}>
              <p className='Essential-para'>Nearest airports data goes here...</p>
            </Panel>
            <Panel header={<span><EnvironmentOutlined /> Metro Stations</span>} key="3" style={{backgroundColor:"white",border:"none",marginBottom:"10px"}}>
              <p className='Essential-para'>Nearest metro stations data goes here...</p>
            </Panel>
          </Collapse>
        </TabPane>

        {/* Tab 2: Essentials */}
        <TabPane tab="Essentials" key="2">
          <Collapse accordion activeKey={activeKey} onChange={handleCollapseChange}>
            <Panel header={<span><EnvironmentOutlined /> Hospitals</span>} key="1">
              <p>Hospital data goes here...</p>
            </Panel>
            <Panel header={<span><EnvironmentOutlined /> Schools</span>} key="2">
              <p>Schools data goes here...</p>
            </Panel>
            <Panel header={<span><EnvironmentOutlined /> Shopping Centers</span>} key="3">
              <p>Shopping center data goes here...</p>
            </Panel>
          </Collapse>
        </TabPane>

        {/* Tab 3: Utility */}
        <TabPane tab="Utility" key="3">
          <Collapse accordion activeKey={activeKey} onChange={handleCollapseChange}>
            <Panel header={<span><EnvironmentOutlined /> Water Supply</span>} key="1">
              <p>Water supply data goes here...</p>
            </Panel>
            <Panel header={<span><EnvironmentOutlined /> Electricity</span>} key="2">
              <p>Electricity data goes here...</p>
            </Panel>
            <Panel header={<span><EnvironmentOutlined /> Internet Providers</span>} key="3">
              <p>Internet providers data goes here...</p>
            </Panel>
          </Collapse>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Esential;
