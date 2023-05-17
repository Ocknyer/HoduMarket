import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Banner = () => {
  const imgList = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2978&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1620560691654-935b940dcacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1532673492-1b3cdb05d51b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
  ];

  return (
    <Carousel>
      {imgList.map((item) => (
        <Paper
          component="img"
          key={item.id}
          src={item.url}
          sx={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
        ></Paper>
      ))}
    </Carousel>
  );
};

export default Banner;
