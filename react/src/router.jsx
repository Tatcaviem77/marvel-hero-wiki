import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
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
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;
