import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Create from "../pages/Home/Create/Create";
import Update from "../pages/Home/Update sec/Update";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=>fetch('http://localhost:5000/users')
            },
            {
                path: 'create',
                element: <Create/>
            },
            {
                path: 'update/:id',
                element: <Update/>,
                loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    }
])

export default router;