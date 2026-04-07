import { useEffect } from "react";

export default function ChatBubble() {
  useEffect(() => {
    const avatarUrl = "/assets/ai-mentor.png";

    // Clear cache (optional)
    localStorage.removeItem("bp-webchat-config");
    localStorage.removeItem("bp-webchat");

    // Load script only once
    if (window.botpress) return;

    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.async = true;

    script.onload = () => {
      window.botpress.init({
        botId: "9a3d075d-8b7b-4fd8-a8fe-1295f0f937d0",
        clientId: "18d97f45-fd2b-4960-b805-cbb19289a2b9",

        configuration: {
          version: "v2",
          botName: "AI Mentor",
          botAvatarUrl: avatarUrl,
          botAvatarInitials: "",
          
          // 🎨 MATCH YOUR UI THEME
          color: "#6366F1", // indigo
          variant: "soft",
          headerVariant: "glass",
          themeMode: "light",
          fontFamily: "Inter",
          radius: 8,

          // UX
          feedbackEnabled: false,
          soundEnabled: false,

          // Optional
          footer: "Powered by AI Mentor"
        }
      });

      // 🔥 AUTO OPEN ON FIRST LOAD (optional)
      window.botpress.on("webchat:ready", () => {
        window.botpress.open();
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // ❌ no div needed
}
    <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"></script>
<script src="https://files.bpcontent.cloud/2026/04/07/16/20260407164540-JJXZ2WSH.js" defer></script>
    