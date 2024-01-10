import { useLocation } from "react-router-dom";

import { MainLayout } from "../components";

export const SolutionGeneration = () => {
  const { state } = useLocation();
  return (
    <MainLayout>
      <div>
        <p>SolutionGeneration</p>
        <p>Usuario: {state?.name}</p>
      </div>
    </MainLayout>
  );
};
