import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../Components/AboutPage";
import Contact from "../Components/Contact";
export const Router = createBrowserRouter([
    {
        path : '/',
        element : <AboutPage/>
    },
    {
        path : '/Contact',
        element : <Contact/>

    }
])


