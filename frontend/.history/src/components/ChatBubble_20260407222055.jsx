import { useEffect } from "react";

export default function ChatBubble() {
  useEffect(() => {
    // prevent multiple injections
    if (document.getElementById("botpress-script")) return;

    // Script 1 (core)
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    script1.async = true;
    script1.id = "botpress-script";

    // Script 2 (your bot config)
    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2026/04/07/16/20260407164540-JJXZ2WSH.js";
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      // optional cleanup
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // no UI needed
}