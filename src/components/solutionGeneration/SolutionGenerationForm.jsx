import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

export const SolutionGenerationForm = () => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={4}>
        <Typography variant="h6" component="div">
          Datos del escenario
        </Typography>
        <TextField
          label="Nombre del escenario"
          placeholder="Ingresar nombre de escenario"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          label="Descripción del escenario"
          placeholder="Ingresar descripción de escenario"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <Typography variant="h6" component="div" sx={{ mt: 4 }}>
          Ingreso de datos de entrada
        </Typography>
        <TextField
          label="Nombre del escenario"
          placeholder="Ingresar nombre de escenario"
          variant="outlined"
          fullWidth
          margin="dense"
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h6" component="div">
          Configuración de parámetros de control del escenario
        </Typography>
        <Typography sx={{ mt: 2 }}>Parámetro 1</Typography>
        <FormControl sx={{ mt: 2, width: 300 }}>
          <Select defaultValue="placeholder">
            <MenuItem disabled value="placeholder">
              Selección de parámetro en lista
            </MenuItem>
            <MenuItem value={10}>Valor 1</MenuItem>
            <MenuItem value={20}>Valor 2</MenuItem>
            <MenuItem value={30}>Valor 3</MenuItem>
          </Select>
        </FormControl>
        <Typography sx={{ mt: 4, mb: 4 }}>Parámetro 2</Typography>
        <Box sx={{ ml: 1 }}>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            step={10}
            valueLabelDisplay="auto"
            marks={[
              {
                value: 0,
                label: "0",
              },
              {
                value: 20,
                label: "20",
              },
              {
                value: 40,
                label: "40",
              },
              {
                value: 60,
                label: "60",
              },
              {
                value: 80,
                label: "80",
              },
              {
                value: 100,
                label: "100",
              },
            ]}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
