import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import FundingPage from "./pages/FundingPage";
import Analytics from "./pages/AnalyticsPage";
import Network from "./pages/Network";

// 🔥 Global Chatbot
import ChatBubble from "./components/ChatBubble";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ GLOBAL AI CHAT (visible on all pages) */}
      <ChatBubble />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN APP */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/funding" element={<FundingPage />} />
        <Route path="/analysis" element={<Analytics />} />

        {/* ✅ FIXED ROUTE (matches sidebar) */}
        <Route path="/network" element={<Network />} />

        {/* OPTIONAL: fallback route */}
        <Route path="*" element={<LandingPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;