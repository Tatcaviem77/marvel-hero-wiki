import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import Admin from "./views/Admin";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <Admin />,
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
