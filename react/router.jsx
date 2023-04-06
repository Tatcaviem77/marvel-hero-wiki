import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
]);

export default router;
