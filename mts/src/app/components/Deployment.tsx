import { FaLocationArrow } from "react-icons/fa";
import MagicLink from "./ui/MagicLink";
export const Deployment = ({
    primaryFeatures,
    textDeployment,
    className,
}: {
    primaryFeatures: {
        name: string;
        description: string;
        link: string;
        icon?: JSX.Element;
        href: string;
    }[];
    textDeployment: {
        title: string;
        subTitle: string;
        description: string;
        href: string;
    }[];
    className?: string;
}) => {
    return (
        <div className="relative isolate mt-0 px-6 py-32 sm:mt-0 sm:py-40 lg:px-8">
            <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >


                <rect fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                    className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                />
            </div>
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    {textDeployment.map((text) => (
                        <div key={1}>
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">{text.title}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                {text.subTitle}
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                {text.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {primaryFeatures.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <MagicLink
                                            title="En savoir plus"
                                            icon={<FaLocationArrow />}
                                            position="right"
                                            href={feature.href}
                                            otherClasses="!text-indigo-400"
                                        />

                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}