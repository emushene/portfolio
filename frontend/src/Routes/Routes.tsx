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
import About from "../Components/About/About";
import BlogLogin from "../Components/Blog/BlogLogin";
import CreatePost from "../Components/Blog/CreatePost";
import NotFound from "../NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This will render Navbar, Footer, and an Outlet for the main content
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> }, // Separate SearchPage for search results
      { path: "/company/:ticker", element: <CompanyPage />, children: [
        { path: "company-profile", element: <CompanyProfile /> },
        { path: "income-statement", element: <IncomeStatement /> },
        { path: "balance-sheet", element: <BalanceSheet /> },
        { path: "cashflow-statement", element: <CashflowStatement /> },
      ]},
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/about-me", element: <About /> },
      { path: "/resume", element: <Resume /> },
      { path: "/blog", element: <Blog />, children: [
        { path: "blog-login", element: <BlogLogin /> },
        { path: "blog-create", element: <CreatePost /> },
      ]},
      { path: "/contact", element: <Contact /> },
      { path: "/myprofile", element: <MyProfile /> },
      { path: "/design-guide", element: <DesignPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);