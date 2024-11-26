import Image from "next/image";
import { FaCheck, FaCompass, FaEye } from "react-icons/fa";

export default function AboutUs() {
    return (
        <section id="about-us" className="flex flex-wrap gap-20 p-10">
            <div className="basis-80 flex flex-[2_1] flex-col relative gap-4">
                <h2 className="text-dark text-3xl md:text-5xl w-full uppercase font-bold">
                    Centre for Social Cohesion,<span className="text-primary">Peace</span> and Empowerment
                </h2>

                <h3 className="flex gap-3 items-center text-gray-500 text-xl md:text-2xl uppercase font-bold">
                    Peace Building | Protection | Education | Livelihood
                </h3>

                <p className="text-dark text-lg text-gray-400 text-justify">
                    CENSCOPE is a non-profit organization that focuses on promoting the ideals of self-sustainability,
                    equality and social justice to the members of the society,
                    it was founded in the year 2014 out of the need to give succor and support to the victim of arm conflict and natural disasters in Nigeria.
                    CENSCOPE focuses mainly on promoting social cohesion, preventing and countering the narratives of
                    violent extremism, conflict management, mitigation of human right abuses and gender based violence,
                    promoting the principle of good governance and good public policy formulation, empowerment and
                    provision of humanitarian services, lifesaving and livelihood skills to victims of violent conflict,
                    as well as promoting political participation and social inclusion on the basis of gender, religion and disability.
                </p>
                <p className="text-dark text-lg text-gray-400 text-justify">
                    CENSCOPE is enhancing and strengthening the fabrics and structures of the society,
                    and as well creating equal and sustaining empowerment opportunities across to members of the society.
                    CENSCOPE partners with critical government institutions, private sector, philanthropies and non-governmental
                    organizations in actualizing its mandate
                </p>

                <div className="w-full mt-4 flex flex-wrap gap-10">
                    <div className="flex flex-1 flex-col items-center basis-80">
                        <FaEye size={50} className="text-primary" />
                        <h4 className="capitalize mb-4 font-bold text-3xl">vision</h4>
                        <p className="text-gray-500">
                            To advocate the ideals of self-sustainability, social justice and equality.
                        </p>
                    </div>

                    <div className="flex flex-1 flex-col items-center basis-80">
                        <FaCompass size={50} className="text-primary" />
                        <h4 className="capitalize mb-4 font-bold text-3xl">mission</h4>
                        <p className="text-gray-500">
                            To promote and enable the creation and the actualization of a self-sustaining.
                        </p>
                    </div>
                </div>

                <div className="w-full mt-4 flex flex-wrap gap-4 md:gap-10">
                    <div className="flex flex-1 flex-col gap-4 items-start basis-80 justify-end">
                        <h4 className="capitalize font-bold text-2xl">thematic areas</h4>

                        <p className="flex gap-3 capitalize font-semibold items-center text-md text-gray-500">
                            <FaCheck className="text-primary" /> protection
                        </p>
                        <p className="flex gap-3 capitalize font-semibold items-center text-md text-gray-500">
                            <FaCheck className="text-primary" /> peace building
                        </p>
                    </div>

                    <div className="flex flex-1 flex-col gap-4 items-start basis-80 md:justify-end">
                        <p className="flex gap-3 capitalize font-semibold items-center text-md text-gray-500">
                            <FaCheck className="text-primary" /> livelihood
                        </p>
                        <p className="flex gap-3 capitalize font-semibold items-center text-md text-gray-500">
                            <FaCheck className="text-primary" /> education <span className="lowercase">in</span> emergency
                        </p>
                    </div>
                </div>
            </div>

            <div className="basis-80 md:basis-96 flex flex-1 flex-col relative pt-40">
                <div className="w-5/6 relative before:absolute before:-top-10 h-full before:-right-10 before:h-full before:w-full before:bg-dotted-pattern before:bg-dotted-size before:-z-10">
                    <Image alt="" width={500} height={500} src="/images/about.png" className="h-full w-full object-cover z-10" />
                </div>
            </div>
        </section>
    );
}
