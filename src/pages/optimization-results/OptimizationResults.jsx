import Header from "../../shared/header/header";
import { PieChartResults } from "./pie-chart/pieChart";

import "./OptimizationResults.css";
import { Grid } from "@mui/material";

export const OptimizationResult = () => {
  const data = [
    { name: "Categoría 1", value: 30 },
    { name: "Categoría 2", value: 70 },
  ];

  return (
    <div>
      <Header></Header>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <h3>Valor de utilidad optima</h3>
              <p>50 USD</p>
            </div>

            <div>
              <h3>Valores de KPIs complementarios</h3>
              <div className="style-KPIs">
                <div>
                  <p>Torta</p>
                  <PieChartResults data={data}></PieChartResults>
                </div>
                <div>
                  <p>COPA</p>
                  <PieChartResults data={data}></PieChartResults>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h3>Decisiones principales</h3>
              <p>Pruebaa</p>
              <p>Pruebaa</p>
              <p>Pruebaa</p>
              <p>Pruebaa</p>
              <p>Pruebaa</p>
              <p>Pruebaa</p>
              <p>Pruebaa</p>
              <p>Pruebaa</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
