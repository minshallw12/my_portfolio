import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from './pages/Home'
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";


const router = createHashRouter([
        {
            path:'/',
            element: <App/>,
            // errorElement
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path:'aboutme',
                    element: <AboutMe/>
                },
                {
                    path:'projects',
                    element: <MyProjects/>
                }
            ]
        }
    ]
)

export default router;