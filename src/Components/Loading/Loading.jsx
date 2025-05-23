import { Box, Typography, keyframes, } from "@mui/material";
import { useEffect, useState } from "react";

const pulse = keyframes`
  0% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
  40% { transform: scaleY(0.4); }
  100% { transform: scaleY(0.4); }
`;

const Loading = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Custom vibrant colors for each bar
  const barColors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#9D4EDD"];

  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 0.5s ease-in",
      }}
    >
      <Box sx={{ display: "flex", gap: 1.5 }}>
        {barColors.map((color, i) => (
          <Box
            key={i}
            sx={{
              width: 6,
              height: 30,
              borderRadius: 2,
              backgroundColor: color,
              animation: `${pulse} 1s infinite`,
              animationDelay: `${i * 0.1}s`,
              transformOrigin: "center bottom",
            }}
          />
        ))}
      </Box>

      <Typography variant="h6" color="text.secondary" sx={{ opacity: 0.8, mt: 2 }}>
        Loading product details...
      </Typography>
    </Box>
  );
};

export default Loading;
