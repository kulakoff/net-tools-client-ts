import { useState, useEffect, useRef } from "react";
import {
  Card,
  Typography,
  Tooltip,
  Divider,
  Popconfirm,
  Button,
  message,
  Modal,
} from "antd";
import "antd/dist/antd.css";
import styles from "./DeviceWrapper.component.css";
import "./index.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  WifiOutlined,
} from "@ant-design/icons";

import QR from "./../../components/QR";
import DisplayWifiConfig from "../DisplayWifiConfig/DisplayWifiConfig";
// import cpe from "../../../../acs-api/models/cpe";

const { Text } = Typography;

const DeviceWrapper = (data) => {
  // debugger
  const { deviceData, setCpeData, isLoading, setIsLoading } = data.props;
  console.log("DeviceWrapper render");
  // const [cpeData, setCpeData] = useState(deviceData);

  const onChangeTemplate = () => {
    const sendObj = {
      serialNumber: deviceData._deviceInfo.serialNumber,
      macAddress: deviceData._deviceInfo.macAddress,
      configMode: "passwd",
    };
    setCpeData(sendObj);
  };

  const info = () => {
    const wifiConfig = {
      ssid2: deviceData.wifi.ssid2._value,
      ssid5: deviceData.wifi.ssid5._value,
      serialNumber:
        deviceData.configMode._value == "serial"
          ? deviceData._deviceInfo.serialNumber
          : deviceData.wifi.keyPassphrase._value,
    };
    DisplayWifiConfig(wifiConfig);
  };

  return (
    <div className="card-wrapper">
      <Card
        hoverable
        size="small"
        title="Device info"
        extra={
          <Tooltip title="menu">
            <EllipsisOutlined key="setting" />
          </Tooltip>
        }
        style={{ width: 360 }}
        actions={[
          <Popconfirm
            disabled={deviceData.configMode._value == "serial" ? false : true}
            title="Изменить типовой шаблон WiFi?"
            okText="Да"
            cancelText="Нет"
            onConfirm={() => {
              onChangeTemplate();
            }}
            onCancel={() => console.log("cansel popconfim window")}
          >
            <Tooltip title="Изменить типовой шаблон" placement="bottom">
              <EditOutlined key="setting" />
            </Tooltip>
          </Popconfirm>,
          <Tooltip title="QR" placement="bottom">
            <WifiOutlined key="edit" onClick={info} />
          </Tooltip>,
        ]}
      >
        <div className="card-body">
          <p>
            <Text strong>Reg data: </Text>
            <Text>{deviceData.createDateTime}</Text>
          </p>
          <p>
            <Text strong>Serial: </Text>
            {deviceData._deviceInfo.serialNumber}
          </p>
          <p>
            <Text strong>MAC: </Text>
            {deviceData._deviceInfo.macAddress} |{" "}
            {deviceData._deviceInfo.manufacturer}{" "}
          </p>
          <Divider>WiFi</Divider>
          <p>
            <Text strong>SSID: </Text>
            {deviceData.wifi.ssid2._value} / {deviceData.wifi.ssid5._value}{" "}
          </p>
          <p>
            <Text strong>Passphrase: </Text>
            {deviceData.configMode._value == "serial" ? (
              <Tooltip
                title="Необходимо изменить типовой шаблон для WiFi"
                color="orange"
                placement="right"
              >
                <Text type="warning">
                  {deviceData._deviceInfo.serialNumber}
                </Text>
              </Tooltip>
            ) : (
              <Text>{deviceData.wifi.keyPassphrase._value}</Text>
            )}
          </p>
          {/* <pre>{JSON.stringify(deviceData, null, 2)}</pre> */}
        </div>
      </Card>
    </div>
  );
};

export default DeviceWrapper;
