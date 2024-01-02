import React from "react";
import { AppBar, Button, Toolbar, styled} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { routePath } from "../routes/routes";

const AppBarStyled = styled(AppBar)`
    background:#111827;
    height:64px;

`;

const LogInButton = styled(Button)`
background:white;
color:#111827;
text-transform:none;
font-size:20px;

:hover{color:green}
`;
const Links = styled(NavLink)`
margin-right:25px;
text-decoration:none;
font-size:20px;
color:inherit;
:hover{color:green}
`;
export default function NavigationBar() {
  const logoURL =
    "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";

    const navigate = useNavigate();
  return (
    <AppBarStyled >
      <Toolbar>
        <img src={logoURL} alt="logo" style={{ width:95, marginBottom:5}}/>
        <Links to={routePath.home}>Home</Links>
        <Links to={routePath.allJobs}>All Jobs</Links>
        <Links to={routePath.findJob}>Find Job</Links>
        <Links to={routePath.about}>About</Links>
        { <LogInButton onClick={() => navigate(routePath.createPost)}>Create Job</LogInButton> }
      </Toolbar>
    </AppBarStyled>
  );
}
