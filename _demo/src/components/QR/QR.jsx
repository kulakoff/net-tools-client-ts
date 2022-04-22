import QRCode from "qrcode.react";
const QR = (props) => {
  const { ssid, password } = props;
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
