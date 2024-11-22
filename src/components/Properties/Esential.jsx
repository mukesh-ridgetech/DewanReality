import React, { useState, useEffect } from 'react';
import { Tabs, Collapse } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Esential = ({ neighbourhood }) => {
  // Dynamically set the default active tab
  const [activeTab, setActiveTab] = useState(neighbourhood?.[0]?._id || null);
  const [activeKey, setActiveKey] = useState(null); // Manage active panel in Collapse

  useEffect(() => {
    // Reset active tab and panel if neighbourhood data changes
    if (neighbourhood?.length) {
      setActiveTab(neighbourhood[0]._id); // Set the first tab as default
      const firstTransition = neighbourhood[0]?.Transition?.[0];
      setActiveKey(firstTransition?.TypeOfType || null); // Set first panel as default
    }
  }, [neighbourhood]);

  const handleTabChange = (key) => {
    setActiveTab(key); // Change active tab
    const selectedTab = neighbourhood.find((item) => item._id === key);
    const firstTransition = selectedTab?.Transition?.[0];
    setActiveKey(firstTransition?.TypeOfType || null); // Set first panel of new tab as default
  };

  const handleCollapseChange = (key) => {
    setActiveKey(key); // Accordion behavior for Collapse
  };

  return (
    <div>
      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        style={{ backgroundColor: "#F8F8F8", padding: "10px" }}
        id="Essential"
      >
        {neighbourhood?.map((item) => (
          <TabPane tab={item?.type} key={item?._id}>
            <Collapse
              accordion
              activeKey={activeKey}
              onChange={handleCollapseChange}
              style={{ border: "none" }}
            >
              {item?.Transition?.map((item1) => (
                <Panel
                  header={
                    <span>
                      <EnvironmentOutlined /> {item1?.TypeOfType}
                    </span>
                  }
                  key={item1?.TypeOfType}
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    marginBottom: "10px",
                  }}
                >
                  <ul className="Eseential-container">
                    {item1?.value?.map((item2) => (
                      <li className="Essential-text" key={item2?.landMark}>
                        {item2?.landMark}{" "}
                        <span style={{ float: "right" }}>
                          {item2?.distance} | {item2?.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              ))}
            </Collapse>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Esential;
