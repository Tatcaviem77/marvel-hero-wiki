import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
<<<<<<< HEAD
import Home from "./views/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
=======
import Admin from "./views/Admin";
import TableHero from "./components/TableHero";
import HeroForm from "./views/HeroForm";
import CreateHero from "./views/CreateHero";
import Login from "./views/Login";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [           
            {
                index: "/admin",
                element: <TableHero />,
            },
            {
                path: "/admin/:id",
                element: <HeroForm />,
            },
            {
                path: "/admin/create",
                element: <CreateHero />,
            },
        ],
>>>>>>> 7cd557f3efe1844a064de6b254d8171eaed69f88
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
<<<<<<< HEAD

=======
>>>>>>> 7cd557f3efe1844a064de6b254d8171eaed69f88
export default router;
