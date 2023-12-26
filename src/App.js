import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import LoginForm from "./components/login";
import CreateCondidates from "./scenes/form/candidate";
import CreateCompanies from "./scenes/form/createCompanies";
import CreateHrs from "./scenes/form/createHrs";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar isSidebar={isSidebar} />
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/manage-condidates' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<CreateHrs />} />
              <Route path='/create-condidate' element={<CreateCondidates />} />
              <Route path='/create-company' element={<CreateCompanies />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/' element={<LoginForm />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
