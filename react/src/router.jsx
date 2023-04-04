import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import Admin from "./views/Admin";
import TableHero from "./components/TableHero";
import HeroForm from "./views/HeroForm";


const router = createBrowserRouter([
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
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
