// vite.config.ts
import { defineConfig } from "file:///C:/Users/pedro.junior/Documents/repositorios_apoio/login-firebase/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/pedro.junior/Documents/repositorios_apoio/login-firebase/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  optimizeDeps: {
    exclude: [
      "firebase",
      "firebase/app",
      "firebase/auth",
      "firebase/firestore",
      "firebase/analytics"
    ]
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwZWRyby5qdW5pb3JcXFxcRG9jdW1lbnRzXFxcXHJlcG9zaXRvcmlvc19hcG9pb1xcXFxsb2dpbi1maXJlYmFzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccGVkcm8uanVuaW9yXFxcXERvY3VtZW50c1xcXFxyZXBvc2l0b3Jpb3NfYXBvaW9cXFxcbG9naW4tZmlyZWJhc2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3BlZHJvLmp1bmlvci9Eb2N1bWVudHMvcmVwb3NpdG9yaW9zX2Fwb2lvL2xvZ2luLWZpcmViYXNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogW1xuICAgICAgJ2ZpcmViYXNlJyxcbiAgICAgICdmaXJlYmFzZS9hcHAnLFxuICAgICAgJ2ZpcmViYXNlL2F1dGgnLFxuICAgICAgJ2ZpcmViYXNlL2ZpcmVzdG9yZScsXG4gICAgICAnZmlyZWJhc2UvYW5hbHl0aWNzJyxcbiAgICBdLFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG59KTtcblxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWSxTQUFTLG9CQUFvQjtBQUM5WixPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
