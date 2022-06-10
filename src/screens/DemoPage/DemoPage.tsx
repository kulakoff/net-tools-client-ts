import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker, CalendarPicker, MobileDateTimePicker } from "@mui/x-date-pickers/";
import { Controller, useForm } from "react-hook-form";
import { Button, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";

type Props = {};

const DemoPage = (props: Props) => {
  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    console.log("data on form : ", data.demo_date);
    alert(data.demo_date)
  };

  return (
    <div>
      <h1>Demo components page</h1>
      <span>Раздел в разработке</span>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="demo_date"
          defaultValue={new Date()}
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateTimePicker
                {...field}
                inputFormat="dd/MM/yyyy"
                label="Дата передачи показаний"
                value={field.value}
                onChange={(e) => field.onChange(e)}
                renderInput={(props) => <TextField 
                  error={Boolean(errors.demo_date?.message)}
                  helperText={errors.demo_date?.message}
                  fullWidth {...props} />}
              />
            </LocalizationProvider>
          )}
        />
        <Button 
        type="submit"
        fullWidth
        variant="contained"
        >SHOW</Button>
      </Box>
    </div>
  );
};

// export function MaterialUIPickers() {
//   const [value, setValue] = React.useState<Date | null>(new Date());

//   const handleChange = (newValue: Date | null) => {
//     setValue(newValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="MM/dd/yyyy"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <MobileDatePicker
//           label="Date mobile"
//           inputFormat="MM/dd/yyyy"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />

//         <DateTimePicker
//           label="Date&Time picker"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />

//         <DatePicker
//           label="base picker"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }

export default DemoPage;
