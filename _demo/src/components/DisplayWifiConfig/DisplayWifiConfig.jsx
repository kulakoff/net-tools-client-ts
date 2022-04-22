import { Modal } from "antd";
import QR from "./../QR";
import { WifiOutlined } from "@ant-design/icons";

const DisplayWifiConfig = (props) => {
  console.log(props);
  return Modal.info({
    centered: true,
    keyboard: true,
    closable: true,
    title: "Настройки WiFi",
    width: 480,
    icon: <WifiOutlined />,
    content: (
      <div>
        <div>
          <h3>Имя сети: {props.ssid2}</h3>
          <QR ssid={props.ssid2} password={props.serialNumber}></QR>
        </div>
        {props.ssid5 && (
          <div>
            <h3>Имя сети: {props.ssid5}</h3>
            <QR ssid={props.ssid5} password={props.serialNumber}></QR>
          </div>
        )}
      </div>
    ),
    onOk() {
      console.log("modal close");
    },
  });
};
export default DisplayWifiConfig;
