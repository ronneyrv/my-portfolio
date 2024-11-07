import styled from "@emotion/styled";
import { Box, Container, Grid } from "@mui/material";

function Skills() {
  const StyledSkill = styled("div")(() => ({
    backgroundColor: "#98FB98",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));
  return (
    <>
      <StyledSkill id="projetcts-section">
        <Container maxWidth="lg">
          <Grid item xs={12} md={7} display="flex" alignItems="center">
            <Box>Projects</Box>
          </Grid>
        </Container>
      </StyledSkill>
    </>
  );
}

export default Skills;
