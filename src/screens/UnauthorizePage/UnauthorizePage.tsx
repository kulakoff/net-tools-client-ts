import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const UnauthorizePage = () => {
  const user = useAppSelector((state) => state.userState.user);
  console.log("Unauthorized", user);
  const navigate = useNavigate();
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    navigate("/");
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: "#ece9e9",
          mt: "2rem",
          height: "15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: "#1f1e1e", fontWeight: 500 }}
        >
          Unauthorized Page
        </Typography>
        <Button variant="contained" onClick={onClickHandler}>
          Вернуться на главную страницу
        </Button>
      </Box>
    </Container>
  );
};

export default UnauthorizePage;
