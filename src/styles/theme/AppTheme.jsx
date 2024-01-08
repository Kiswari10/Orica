import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import PropTypes from "prop-types";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

AppTheme.propTypes = { children: PropTypes.node.isRequired };