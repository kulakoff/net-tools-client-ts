import { Box, Tab, Tabs, Typography } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import ShowCountersMobileUI from "../../components/ShowCountersMobileUI";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CountersPage: FC<ReactNode> = (props) => {
  const [value, setValue] = useState(4);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: 1000 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Приборы учета (mobile)" {...a11yProps(0)} />
          <Tab label="Приборы учета (desctop)" {...a11yProps(1)} />
          {/* <Tab label="Просмотр показаний" {...a11yProps(2)} /> */}
          {/* <Tab label="Передать показания" {...a11yProps(3)} /> */}
          <Tab label="Отчеты в сбытовую компанию" {...a11yProps(4)} />
          {/* <Tab label="Приборы учета (desctop2)" {...a11yProps(5)} /> */}
          {/* <Tab label="Приборы учета (mobile)" {...a11yProps(2)} />
          <Tab label="Приборы учета (desctop)" {...a11yProps(3)} />
          <Tab label="Отчеты в сбытовую компанию" {...a11yProps(4)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        "ShowMetersAll"
        <ShowCountersMobileUI/>
        {/* <ShowMetersAll /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        "ShowMetersAll2"
        {/* <ShowMetersAll2 /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <ShowMeters /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* <SendMeters /> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/* <TelemetryReport/> */}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {/* <ShowMetersAll3 /> */}
      </TabPanel>
    </Box>
  );
};

export default CountersPage;
