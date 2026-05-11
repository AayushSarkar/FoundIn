// import { useEffect } from "react";

// export default function ChatBubble() {
//   useEffect(() => {
//     // prevent multiple injections
//     if (document.getElementById("botpress-script")) return;

//     // Script 1 (core)
//     const script1 = document.createElement("script");
//     script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
//     script1.async = true;
//     script1.id = "botpress-script";

//     // Script 2 (your bot config)
//     const script2 = document.createElement("script");
//     script2.src =
//       "https://files.bpcontent.cloud/2026/04/07/16/20260407164540-JJXZ2WSH.js";
//     script2.defer = true;

//     document.body.appendChild(script1);
//     document.body.appendChild(script2);

//     return () => {
//       // optional cleanup
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   return null; // no UI needed
// }

// import { useEffect } from "react";

// export default function ChatBubble() {
//   useEffect(() => {
//     if (window.botpressWebChat) return;

//     const loadBot = async () => {
//       const script1 = document.createElement("script");
//       script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
//       script1.async = true;

//       script1.onload = () => {
//         const script2 = document.createElement("script");
//         script2.src =
//           "https://files.bpcontent.cloud/2026/04/22/14/20260422142202-H3DVO9PN.js";
//         script2.defer = true;

//         document.body.appendChild(script2);
//       };

//       document.body.appendChild(script1);
//     };

//     loadBot();
//   }, []);

//   return null;
// }

import { useState } from "react";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/09/18/20260509180548-IXJLFY6S.json"
          title="AI Chat"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "370px",
            height: "550px",
            border: "none",
            borderRadius: "20px",
            zIndex: 999999,
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            background: "white",
          }}
        />
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(135deg, #2563eb, #3b82f6)",
          color: "white",
          fontSize: "28px",
          cursor: "pointer",
          zIndex: 1000000,
          boxShadow: "0 6px 20px rgba(37,99,235,0.4)",
          transition: "0.3s",
        }}
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}


