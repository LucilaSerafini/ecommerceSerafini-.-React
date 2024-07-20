import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./productCard.css";

export const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component={"img"}
        className="cardContainer"
        image={img}
        title={title}
      />
      <CardContent className="card">
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">{price}</Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Link to={`/itemDetail/${id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{
              color: "#2e3038 ",
              backgroundColor: "#F3D0C3",
              fontWeight: "bold",
            }}
          >
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
