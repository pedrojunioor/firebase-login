import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/context";
import { Header } from '../components/Header/Header';
import { Home } from '../pages/Home/Home'
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import './App.scss'

// @ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="content" >
            <Routes>
              <Route
                path="/home"
                element={
                  <PrivateRoute redirectTo="/">
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="*" element={
                <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center " }}>
                  <h1 >NOT FOUND</h1>
                </div>
              } />
            </Routes>
          </div>
          <div className="footer">
            <h4>Desenvolvido por Pedro Junior</h4>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
