import { Button, Container, Toolbar } from "@mui/material";

import { MainLayout, SolutionGenerationForm } from "../components";

export const SolutionGeneration = () => {
  return (
    <MainLayout>
      <Toolbar />
      <SolutionGenerationForm />
      <Toolbar />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">Ejecutar escenario</Button>
      </Container>
    </MainLayout>
  );
};
