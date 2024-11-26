import AboutUs from "./_comp/about-us";
import BlogPost from "./_comp/blogpost";
import Carousel from "./_comp/carousel";
import Partners from "./_comp/partners";

export default function Page() {
    return (
        <>
            <Carousel />
            <AboutUs />
            <BlogPost />
            <Partners />
        </>
    );
}
