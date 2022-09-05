import QRCode from "qrcode.react";
import { FC } from "react";
interface QRProps {
  ssid: string | null;
  password: string;
}
const QR: FC<QRProps> = ({ ssid, password }) => {
  const value = `WIFI:T:WPA;S:${ssid};P:${password};`;
  return (
    <QRCode
      className="qrcode"
      style={{ padding: "0.1em", margin: "0.9rem" }}
      value={value}
      size={150}
    ></QRCode>
  );
};

export default QR;
