import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
            <Outlet />
            </div>
            <Footer />
        </main>
    )
}