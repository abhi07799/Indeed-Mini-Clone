import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { routePath } from "../routes/routes";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)({
  background: "#F5F5F5",
  display: "flex",
  height: "100vh",
  alignItems: "center",
  margin: "0 110px",
  "& > div": {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    "& > div > p": {
      fontSize: 56,
      lineHeight: 1.25,
      letterSpacing: -1,
    },
    "& > div > button": {
      width: 220,
      height: 60,
      background: "rgb(37, 87, 167)",
      textTransform: "none",
      fontSize: 16,
      fontWeight: 700,
      marginTop: 48,
    },
  },
});

const Button2 = styled(Button)({
  marginLeft: 60,
});

export default function Homepage() {
  const homeImage =
    "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
  const navigate = useNavigate();
  return (
    <>
      <Component>
        <Box>
          <Box>
            <Typography>
              Let's make your next <br /> great hire. Fast.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate(routePath.findJob)}
            >
              {" "}
              Find Job{" "}
            </Button>
            <Button2
              variant="contained"
              onClick={() => navigate(routePath.allJobs)}
            >
              {" "}
              All Jobs{" "}
            </Button2>
          </Box>
        </Box>
        <Box>
          <img src={homeImage} alt="homepage" style={{ width: 600 }} />
        </Box>
      </Component>
    </>
  );
}
