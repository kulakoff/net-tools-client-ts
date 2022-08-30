import { Button } from "@mui/material";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: FC<ReactNode> = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Запрашиваемая страница не найдена</h1>
      <div className="notFountActions">
        <Button variant="contained" onClick={() => navigate("/")}>
          Вернуться на главную страницу
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
