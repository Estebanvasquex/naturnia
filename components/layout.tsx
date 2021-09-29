import Footer from "./footer";
import Navbar from "./navbar";
import WhatsApp from "./whatsapp-cta";

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />

            <WhatsApp width={60} height={60} />
        </>
    );
}