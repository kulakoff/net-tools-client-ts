import { useState } from "react";
import { Form, Input, Button, Tooltip, Select, message } from "antd";
import "antd/dist/antd.css";
import styles from "./CpeForm.module.css";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

const CpeForm = (props) => {
  const [disabled, setDisabled] = useState(true);
  const { getCpeData, setCpeData, isLoading, setIsLoading } = props;
  const onFinish = (values) => {
    console.log("Success:", values);
    setDisabled(false);
    getCpeData(values._idType);
  };

  const onFinishFailed = (errorInfo) => {
    message.warning("Не верно заполнены данные!");
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={"styles.formWrapper"}>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="CPE identifier">
          <Input.Group compact>
            <Form.Item
              name={["_idType", "_type"]}
              noStyle
              rules={[{ required: true, message: "Выберите SN или MAC" }]}
            >
              <Select placeholder="select" size="middle" >
                <Option value="serialNumber">S/N</Option>
                <Option value="macAddress" disabled>
                  MAC
                </Option>
              </Select>
            </Form.Item>

            <Form.Item
              name={["_idType", "_value"]}
              noStyle
              rules={[
                {
                  min: 10,
                  message: "Минимальное количество символов: 10",
                },
                {
                  max: 30,
                  message: "МАксимальное количество символов: 30",
                },
                { required: true, message: "Заполните это поле" },
              ]}
            >
              <Input allowClear style={{ width: "50%" }} />
            </Form.Item>

            <Button type="primary" htmlType="submit" disabled={false}>
              Найти
            </Button>
          </Input.Group>
        </Form.Item>

        {/* <Form.Item
          label="Manufacturer"
          name="manufacturer"
          rules={[
            {
              required: true,
              message: "Please select your cpe manufacturer!",
            },
          ]}
        >
          <Select
            placeholder="Select a manufacturer"
            //   onChange={onGenderChange}
            allowClear
          >
            <Option value="QTECH">QTECH</Option>
            <Option value="Tp-Link">Tp-Link</Option>
            <Option value="SNR">SNR</Option>
          </Select>
        </Form.Item> */}

        {/* <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={disabled}>
            Найти
          </Button>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default CpeForm;
