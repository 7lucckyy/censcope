import BlogPostCard from "./cards/blogpost";

export default function BlogPost() {
    return (
        <section id="blog-post" className="flex flex-col items-center gap-10 py-10">
            <header className="flex flex-col items-center gap-4 text-dark text-3xl md:text-5xl uppercase font-bold">
                <h2 className="">
                    our <span className="text-primary">latest</span>
                </h2>
                <div className="min-w-80 md:min-w-96 w-1/3 h-0.5 rounded-md bg-primary opacity-10" />
                <h2 className="">blogs</h2>
            </header>

            <div className="w-11/12 gap-5 p-6 grid grid-cols-[repeat(auto-fit,minmax(20em,1fr))] md:grid-cols-[repeat(auto-fit,minmax(22em,1fr))]">
                {Array.from({ length: 3 }, (_, id) => (<BlogPostCard key={id} />))}
            </div>
        </section>
    );
}
