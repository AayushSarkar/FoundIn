// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react"
// import tailwindcss from "@tailwindcss/vite"

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// })

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // ✅ ADD THIS (VERY IMPORTANT)
  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  resolve: {
    dedupe: ["react", "react-dom"],
  },
})