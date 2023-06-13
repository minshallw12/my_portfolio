import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from './pages/Home'
import Intro from "./pages/intro";


const router = createHashRouter([
        {
            path:'/',
            element: <App/>,
            // errorElement
            children: [
                {
                    index: true,
                    element: <Intro/>
                }
            ]
        }
    ]
)

export default router;