import { Box, Button, Grid, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useState } from "react";

//
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";

type Props = {};

const DevicesPage = (props: Props) => {
  const [text, setText] = useState<string>("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const handlerErrorForm = (errorData: any) => {
    console.log("demo", errorData);
    // setError("email",{type:"manual",message:errorData})
    Object.keys(errorData).forEach((key) => {
      setError(key, { type: "manual", message: errorData[key] });
    });
  };

  const onSubmit = async (data: any) => {
    console.log("data on form : ", data);
    // singInUser(data);

    //TODO: сделать проверку на ошибку
    // if (!user.error) {
    //   navigate("/", { replace: true });
    // } else {
    //   alert(user.error);
    // }
    // if (!user.error) alert("ok")
  };
  

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="serial number"
          inputProps={{ "aria-label": "search google maps" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <IconButton
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            console.log(text);
          }}
        >
          <SearchIcon />
        </IconButton>
        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
      </Paper>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="macAddress"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  error={Boolean(errors.macAddress?.message)}
                  fullWidth={true}
                  type="macAddress"
                  label="Mac address"
                  variant="outlined"
                  helperText={errors.macAddress?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth={true}
              size="large"
              // disabled={user.isLoading}
            >
              Поиск
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DevicesPage;
