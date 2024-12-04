import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.png";
import Overvies from "./Overvies";
import Description from "./Description";
import Amenties from "./Amenties";
import Map from "./Map";
import Esential from "./Esential";
import FloorPlan from "./FloorPlan";
import { Form, Input, Button, Select, Modal, message } from "antd";
import axios from "axios";
import { baseUrl } from "../helper/Helper";
import PropertyList from "./PropertyList";

const { Option } = Select;
const HeaderMainSection = ({ data, id, LocationName }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data1, setSearchData] = useState();

  console.log("data is now filter", data1);

  useEffect(() => {
    HandleSearch();
  }, []);
  const HandleSearch = async () => {
    try {
      const query = new URLSearchParams();
      if (LocationName) {
        // propertiesType
        query.append("locationName", LocationName);
      }

      const response = await axios.get(
        `${baseUrl}/api/properties/filter?${query.toString()}`
      );
      console.log(response.data);

      if (response.data) {
        // setSearching(true);
        let filteredData = response?.data?.filter(
          (item) => item.propertiesType === "sell"
        );

        if (filteredData.length > 3) {
          const a = filteredData.slice(0, 4);
          setSearchData(a);
        } else {
          setSearchData(filteredData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("LocationName", LocationName);
  // Handle modal visibility
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const postData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        date: values.date,
        properties: id,
      };

      const response = await axios.post(
        `${baseUrl}/api/shedule/createShedule`,
        postData
      );

      if (response.data) {
        message.success("Schedule created successfully!");
        form.resetFields();
        setIsModalOpen(false); // Close modal on success
      }
    } catch (error) {
      message.error("Error creating schedule. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="container1">
      <div className="Header-main-section-container">
        <div className="Header-main-section-container-left">
          <Overvies overview={data?.overview} />
          <Description description={data?.description} />
          <Amenties amenities={data?.amenities} />
          <FloorPlan
            floortypes={data?.floortypes}
            camelliasImage={data?.camelliasImage}
            data={data}
          />
          <Map />
          <Esential neighbourhood={data?.neighbourhood} />
        </div>

        <div className="Header-main-section-container-right">
          <div
            className="Header-main-section-container-similar"
            style={{ border: "1px solid black" }}
          >
            <div className="Header-main-section-container-right-image">
              <img src={logo} alt="" />
            </div>
            <div className="Header-main-section-container-right-button-1">
              <button style={{ cursor: "pointer" }} onClick={showModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M6.25 27.5C5.5625 27.5 4.97396 27.2552 4.48438 26.7656C3.99479 26.276 3.75 25.6875 3.75 25V7.5C3.75 6.8125 3.99479 6.22396 4.48438 5.73438C4.97396 5.24479 5.5625 5 6.25 5H7.5V2.5H10V5H20V2.5H22.5V5H23.75C24.4375 5 25.026 5.24479 25.5156 5.73438C26.0052 6.22396 26.25 6.8125 26.25 7.5V25C26.25 25.6875 26.0052 26.276 25.5156 26.7656C25.026 27.2552 24.4375 27.5 23.75 27.5H6.25ZM6.25 25H23.75V12.5H6.25V25ZM6.25 10H23.75V7.5H6.25V10ZM15 17.5C14.6458 17.5 14.349 17.3802 14.1094 17.1406C13.8698 16.901 13.75 16.6042 13.75 16.25C13.75 15.8958 13.8698 15.599 14.1094 15.3594C14.349 15.1198 14.6458 15 15 15C15.3542 15 15.651 15.1198 15.8906 15.3594C16.1302 15.599 16.25 15.8958 16.25 16.25C16.25 16.6042 16.1302 16.901 15.8906 17.1406C15.651 17.3802 15.3542 17.5 15 17.5ZM10 17.5C9.64583 17.5 9.34896 17.3802 9.10938 17.1406C8.86979 16.901 8.75 16.6042 8.75 16.25C8.75 15.8958 8.86979 15.599 9.10938 15.3594C9.34896 15.1198 9.64583 15 10 15C10.3542 15 10.651 15.1198 10.8906 15.3594C11.1302 15.599 11.25 15.8958 11.25 16.25C11.25 16.6042 11.1302 16.901 10.8906 17.1406C10.651 17.3802 10.3542 17.5 10 17.5ZM20 17.5C19.6458 17.5 19.349 17.3802 19.1094 17.1406C18.8698 16.901 18.75 16.6042 18.75 16.25C18.75 15.8958 18.8698 15.599 19.1094 15.3594C19.349 15.1198 19.6458 15 20 15C20.3542 15 20.651 15.1198 20.8906 15.3594C21.1302 15.599 21.25 15.8958 21.25 16.25C21.25 16.6042 21.1302 16.901 20.8906 17.1406C20.651 17.3802 20.3542 17.5 20 17.5ZM15 22.5C14.6458 22.5 14.349 22.3802 14.1094 22.1406C13.8698 21.901 13.75 21.6042 13.75 21.25C13.75 20.8958 13.8698 20.599 14.1094 20.3594C14.349 20.1198 14.6458 20 15 20C15.3542 20 15.651 20.1198 15.8906 20.3594C16.1302 20.599 16.25 20.8958 16.25 21.25C16.25 21.6042 16.1302 21.901 15.8906 22.1406C15.651 22.3802 15.3542 22.5 15 22.5ZM10 22.5C9.64583 22.5 9.34896 22.3802 9.10938 22.1406C8.86979 21.901 8.75 21.6042 8.75 21.25C8.75 20.8958 8.86979 20.599 9.10938 20.3594C9.34896 20.1198 9.64583 20 10 20C10.3542 20 10.651 20.1198 10.8906 20.3594C11.1302 20.599 11.25 20.8958 11.25 21.25C11.25 21.6042 11.1302 21.901 10.8906 22.1406C10.651 22.3802 10.3542 22.5 10 22.5ZM20 22.5C19.6458 22.5 19.349 22.3802 19.1094 22.1406C18.8698 21.901 18.75 21.6042 18.75 21.25C18.75 20.8958 18.8698 20.599 19.1094 20.3594C19.349 20.1198 19.6458 20 20 20C20.3542 20 20.651 20.1198 20.8906 20.3594C21.1302 20.599 21.25 20.8958 21.25 21.25C21.25 21.6042 21.1302 21.901 20.8906 22.1406C20.651 22.3802 20.3542 22.5 20 22.5Z"
                    fill="#FEFEFE"
                  />
                </svg>
                Schedule site Visit
              </button>
            </div>
            <div className="Header-main-section-container-right-button-2">
              <button
                onClick={handleScrollToBottom}
                style={{ cursor: "pointer" }}
              >
                Request a callback
              </button>
            </div>
          </div>
          <PropertyList properties={data1} />
        </div>
      </div>

      <Modal
        title="Schedule Site Visit"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null} // Remove default footer buttons
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            {/* Simple date input */}
            <Input type="date" style={{ width: "100%" }} />
          </Form.Item>
          {/* <Form.Item
            label="Status"
            name="status"
            initialValue="Active"
            rules={[{ required: true, message: 'Please select a status' }]}
          >
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item> */}
          <Button type="primary" htmlType="submit" loading={loading} block>
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default HeaderMainSection;
