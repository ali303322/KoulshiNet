import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../Components/AboutPage";
import Contact from "../Components/Contact";
import Login from "../Components/Login";
import SignIn from "../Components/SignIn";
import Home from "../Components/Home";
import Findprestataire from "../Components/Findprestataire";
import DevenirPrestataire from "../Components/DevenirPrestataire";
import Marketplace from "../Components/Marketplace";
import Service from "../Components/Service";
import Vueprofil from "../Components/Vueprofil";
// import Findprestataire from "../Components/Findprestataire";
export const Router = createBrowserRouter([
    {
        path : '/',
        element : <Home/>
    },
    {
        path : '/Contact',
        element : <Contact/>
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/SignIn',
        element : <SignIn/>
    },
    {
        path : '/AboutUs',
        element : <AboutPage/>
    },
    {
        path : '/FindPrestataire',
        element : <Findprestataire/>
    },
    {
        path : '/DevenirePrestataire',
        element : <DevenirPrestataire/>
    },
    {
        path : '/Marketplace',
        element : <Marketplace/>
    },
    {
        path : '/Services',
        element : <Service/>
    },
    {
        path : '/VueProfile',
        element : <Vueprofil/>
    }
])


