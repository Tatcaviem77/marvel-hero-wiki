import { createBrowserRouter } from "react-router-dom";
import Admin from "./views/Admin";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <Admin />,
    },
]);
export default router;
