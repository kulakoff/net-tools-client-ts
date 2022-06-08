import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type Props = {};

const SuccessfullyPage: FC = (props: Props) => {
  const { user } = useTypedSelector((state) => state.user);
  return (
    <Container maxWidth="md" component="main">
      <Box
        sx={{
          padding: 1,
          marginTop: "10rem",
          paddingBottom:"10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper elevation={7}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  mt: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CheckCircleOutlineIcon color="success" fontSize="large" />
                <Typography component="h1" variant="h4">
                  Успешная регистрация!
                </Typography>
                <Divider />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{mb:"2rem"}}>
              <Typography gutterBottom variant="h5">
                На email: {user?.email} отпралено письмо для активации.
              </Typography>
              <Button variant="contained">OK</Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default SuccessfullyPage;
