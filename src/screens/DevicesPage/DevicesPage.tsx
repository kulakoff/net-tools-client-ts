import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { FC, ReactNode, useState } from "react";

//
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

type Props = {};

const DevicesPage = (props: Props) => {
  // const [text, setText] = useState<string>("");

  const { device } = useTypedSelector((state) => state);
  const { getDevice, setDevice } = useActions();
  console.log(device)

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
    getDevice(data)
  };


  const cardEl:FC<ReactNode> = ()=>{
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="/static/images/cards/contemplative-reptile.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  }

  return (
    <Container maxWidth="xs" component="main">
      {!device.cpe?      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: "1.6rem" }}
      >
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Controller
              name="idType"
              control={control}
              defaultValue=""
             
              render={({ field }) => (
                <Select {...field} required >
                <MenuItem  value={"macAddress"}>macAddress</MenuItem>
                <MenuItem  value={"serialNumber"} disabled>serialNumber</MenuItem>
              </Select>
              )
            }
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="value"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  // error={Boo lean(errors.value?.message)}
                  fullWidth={true}
                  type="value"
                  label="value"
                  variant="outlined"
                  helperText={errors.value?.message}
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
      : 
      <div>

        <h1>{device.cpe?._id}</h1>
        <cardEl/>
      </div>
       }

      
    </Container>
  );
};

export default DevicesPage;
