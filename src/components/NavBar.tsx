import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";
import { Link } from "react-scroll";

function NavBar() {
  const StyledToolbar = styled(Toolbar)(() => {
    return {
      backgroundColor: "#1f1e1c",
      color: "#A9A9A9",
      display: "flex",
      justifyContent: "space-evenly",
    };
  });

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          <Link to="hero-section" smooth={true} duration={800}>
            <MenuItem
              sx={{
                width: "150%",
                borderRadius: "20px",
                justifyContent: "center",
                color: "#A9A9A9",
              }}
            >
              Home
            </MenuItem>
          </Link>
          <Link to="skills-section" smooth={true} duration={800}>
            <MenuItem
              sx={{
                width: "150%",
                borderRadius: "20px",
                justifyContent: "center",
                color: "#A9A9A9",
              }}
            >
              Skills
            </MenuItem>
          </Link>
          <Link to="projetcts-section" smooth={true} duration={800}>
            <MenuItem
              sx={{
                width: "150%",
                borderRadius: "20px",
                justifyContent: "center",
                color: "#A9A9A9",
              }}
            >
              Projects
            </MenuItem>
          </Link>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
