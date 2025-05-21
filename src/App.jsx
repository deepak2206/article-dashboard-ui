// src/main.jsx  (or App.jsx)
import { SidebarProvider } from "@/components/ui/sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <SidebarProvider>
      <AppRoutes />
    </SidebarProvider>
  );
}

export default App;
