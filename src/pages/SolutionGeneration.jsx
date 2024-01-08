import { useLocation } from "react-router-dom";

export const SolutionGeneration = () => {
  const { state } = useLocation();
  return (
    <div>
      <p>SolutionGeneration</p>
      <p>Usuario: {state?.name}</p>
    </div>
  );
};
