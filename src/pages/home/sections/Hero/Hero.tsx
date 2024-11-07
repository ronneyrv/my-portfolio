import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

function Hero() {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "#1f1e1c",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
    border: "2px solid #A9A9A9",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary" variant="h1" textAlign="center">
                Ronney Rocha
              </Typography>
              <Typography
                color="primary"
                variant="h2"
                textAlign="center"
                sx={{ mb: 2 }}
              >
                I'm a full stack developer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={2}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button variant="outlined" fullWidth sx={{ gap: 1 }}>
                    {<DownloadIcon />}
                    <Typography>Download CV</Typography>
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button variant="outlined" fullWidth sx={{ gap: 1 }}>
                    {<EmailIcon />}
                    <Typography>Contact me</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
