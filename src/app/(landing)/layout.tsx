import Header from "./_comp/header";
import Footer from "./_comp/footer";

export default function Layout(properties: React.PropsWithChildren) {
    return (
        <>
            <Header />
            <main className="grow flex w-full flex-col justify-start">
                {properties.children}
            </main>
            <Footer />
        </>
    );
}
