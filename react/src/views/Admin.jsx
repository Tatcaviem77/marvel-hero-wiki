import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AdminAppBar from "../components/AdminAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

const theme = createTheme();

const Admin = () => {

    const [heros, setHeros] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getHeros();
    }, []);

    const getHeros = () => {
        setLoading(true);
    };

    const onLogout = (event) => {
        event.preventDefault();       
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AdminAppBar logout={onLogout} />
            <main className="mb-5 p-4">
                <Outlet />
            </main>
            <Footer />
        </ThemeProvider>
    );
};

export default Admin;
