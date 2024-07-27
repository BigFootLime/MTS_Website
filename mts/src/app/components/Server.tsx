import { FlipWords } from "./ui/FlipWords";

export const Server = ({
  secondaryFeatures,
  textDeployment2,
  className,
}: {
  secondaryFeatures: {
    name: string;
    description: string;
    link: string;
    icon?: JSX.Element;
    href: string;
  }[];
  textDeployment2: {
    title: string;
    subTitle: string;
    description: string;
    href: string;
  }[];
  className?: string;
}) => {
  const words = ["Serveur?", "Problème !"];
  return (
    <div className="relative h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32 sm:mt-56">
        <div className="mx-auto max-w-2xl sm:text-center">
          {textDeployment2.map((text) => (
            <div key={1}>
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                {text.title}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pas de <FlipWords words={words} />
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {text.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {secondaryFeatures.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
