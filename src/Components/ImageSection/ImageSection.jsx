import { Box } from "@mui/material";

const ImageSection = () => {
  return (
    <Box
      component="img"
      src="https://www.hungrytummy.co/cdn/shop/files/HT_Banner_4X_48c970aa-95a3-436e-b9db-58c4c2d048f4.webp?v=1728046497"
      alt="Hungry Tummy Products"
      sx={{
        mt:"50px",
        width: "100vw",
        height: "70vh",
        objectFit: "cover", 
        display: "block",
      }}
    />
  );
};

export default ImageSection;
