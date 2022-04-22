import { useState } from "react";
import CpeForm from "./../../components/CpeForm";
import DeviceWrapper from "./../../components/DeviceWrapper";
import "./index.css";
import axios from "axios";
import { Divider, message } from "antd";
import { API_HOST } from "../../constants/constants";


const CpeInfoPage = () => {
  const [deviceData, setDeviceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCpeData = async (formData) => {
    console.log("data from form: ", formData);
    console.log(JSON.stringify(formData));
    let tempData = { [formData._type]: formData._value };
    console.log("MODIFY DATA: ", tempData);
    await axios
      .get(
        `http://${API_HOST}:4000/api/v1/device?cpe[${[formData._type]}]=${
          formData._value
        }`
      )
      .then((res) => {
        console.log("STATUS", res.status);
        setDeviceData(res.data);
      })
      .catch((error) => {
        console.warn({ errorMsg: { ...error } });
        message.warning(
          `Устройство не найдено: "${error.response.statusText}". Проверьте корректность введенных данных и попробуйте снова.`,
          [3]
        );
      });
  };


  const setCpeData = async (data) => {
    setIsLoading(true)
    message.loading(`SET TEMPLATE: ${data}`, true );
    console.log("SET TEMPLATE", data);

    await axios.post(`http://${API_HOST}:4000/api/v1/device`, data)
    .then(res =>{console.log(res);
    setDeviceData(res.data)})
  };

  return (
    <div className="cpeinfo-wrapper">
      <Divider>CPE Info</Divider>
      {!deviceData ? (
        <CpeForm
          props={{ setCpeData, isLoading, setIsLoading }}
          getCpeData={getCpeData}
        />
      ) : (
        <DeviceWrapper props={{ deviceData, setCpeData,isLoading, setIsLoading }} />
      )}
    </div>
  );
};

export default CpeInfoPage;
