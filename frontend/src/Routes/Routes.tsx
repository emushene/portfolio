import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import CompanyPage from "../Pages/CompanyPage";
import Dashboard from "../Pages/Dashboard";
import Resume from "../Pages/Resume";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import MyProfile from "../Pages/MyProfile";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashflowStatement from "../Components/CashStatement/CashflowStatement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <HomePage/>},
            {path: "/search", element: <SearchPage/>},
            {path: "/company/:ticker", element: <CompanyPage/>,
                children: [
                    {path: "company-profile", element: <CompanyProfile/>},
                    {path: "income-statement", element: <IncomeStatement/>},
                    {path: "balance-sheet", element: <BalanceSheet/>},
                    {path: "cashflow-statement", element: <CashflowStatement/>},
                ]
            },
            {path: "/company/", element: <CompanyPage/>},
            {path: "/dashboard", element: <Dashboard/>},
            {path: "/resume", element: <Resume/>},
            {path: "/blog", element: <Blog/>},
            {path: "/contact", element: <Contact/>},
            {path: "/myprofile", element: <MyProfile/>},
            {path: "/design-guide", element: <DesignPage/>},
        ],
    }
])