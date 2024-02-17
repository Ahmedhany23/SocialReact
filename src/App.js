import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import AppBarr from "./components/AppBar";
import { useMemo, useState } from "react";
import getDesignTokens from "./styles/MyTheme";
import MyList from "./components/List";
import Posts from "./components/Posts";
import RightBar from "./components/RightBar";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showmenu, setshowmenu] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <AppBarr setshowmenu={setshowmenu} showmenu={showmenu} />

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ flexDirection: "row" }}
        >
          <MyList showmenu={showmenu} setmyMOde={setmyMOde} theme={theme} />

          <Posts showmenu={showmenu} />
          <RightBar theme={theme} />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
