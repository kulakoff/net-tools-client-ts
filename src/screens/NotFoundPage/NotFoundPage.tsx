import { Box, Button, Container, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: FC<ReactNode> = (props) => {
  const navigate = useNavigate();
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    navigate("/");
  };
  
  return (
    <Container sx={{ maxWidth: { mx: "xs", md: "lg" }, textAlign: "center" }}>
      <Box>
        <Typography component="h1" variant="h4">Запрашиваемая страница не найдена</Typography>
        <Button variant="contained" onClick={onClickHandler}>
          Вернуться на главную страницу
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
