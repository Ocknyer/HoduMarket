import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ data }) => {
  return (
    <Link to={`/product/${data.product_id}`}>
      <Card
        elevation={0}
        sx={{
          maxWidth: 380,
          maxHeight: 500,
          mb: 6,
        }}
      >
        <CardMedia
          sx={{
            width: 380,
            height: 380,
            borderRadius: "5px",
          }}
          image={data.image}
          title={data.product_name}
        />
        <CardContent>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 1,
            }}
          >
            {data.store_name}
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            color="text.primary"
            sx={{
              mb: 1,
            }}
          >
            {data.product_name}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              alignItems: "end",
            }}
          >
            {data.price.toLocaleString()}
            <Typography
              variant="h4"
              component="span"
              sx={{
                ml: "2px",
              }}
            >
              원
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
