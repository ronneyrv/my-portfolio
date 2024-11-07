import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Skills() {
  const StyledSkills = styled("div")(() => ({
    backgroundColor: "#A9A9A9",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <>
      <StyledSkills id="skills-section">
        <Container maxWidth="lg">
          <Grid item xs={12} md={7} display="flex" alignItems="center">
            <Box>
              <Typography
                color="black"
                variant="h6"
                textAlign="center"
                sx={{ mb: 2 }}
              >
                "Em transição de carreira para a área de tecnologia, aplico
                habilidades como resolução de problemas e gerenciamento com foco
                em eficiência e resultados, adquiridas na Engenharia de
                Produção, para criar soluções que realmente impactem pessoas e
                negócios. Hoje, sinto-me ainda mais motivado a explorar,
                aprender e inovar como desenvolvedor Full Stack."
              </Typography>
              <Grid container display="flex" justifyContent="left" spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ gap: 1 }}
                    onClick={function () {
                      console.log("clic");
                    }}
                  >
                    {<DownloadIcon />}
                    <Typography>Download CV</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </StyledSkills>
    </>
  );
}

export default Skills;
