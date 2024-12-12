import Hero from "@/components/landing/hero";
import News from "@/components/landing/news";
import Support from "@/components/landing/support";
import Actions from "@/components/landing/actions";
import Discover from "@/components/landing/discover";
import SocialMedia from "@/components/landing/socialmedia";

export default function Page() {
    return (
        <>
            <Hero />
            <News />
            <Support />
            <Actions />
            <Discover />
            <SocialMedia />
        </>
    );
}
