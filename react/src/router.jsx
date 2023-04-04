import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import Admin from "./views/Admin";
import TableHero from "./components/TableHero";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <Admin />,
        children: [           
            {
                index: "/admin",
                element: <TableHero />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
