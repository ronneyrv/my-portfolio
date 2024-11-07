import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

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
      <AppBar position="relative">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
