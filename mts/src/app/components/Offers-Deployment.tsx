'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CanvasRevealEffectDeployment({
    tiers, frequencies
}: {
    tiers: {
        name: string;
        id: string;
        href: string;
        featured: string;
        price: { [key: string]: string };
        mainFeatures: string[];

    }[];
    frequencies: {
        value: string;
        label: string;
    }[];
    className?: string;
}) {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="isolate overflow-hidden">
            <div className="flow-root pb-16 sm:pt-8 lg:pb-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative z-10">
                        <h2 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                            Nos offres de mise en place Serveur
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
                            Voici nos offres d'installation, surveillance, et support pour votre serveur.
                        </p>
                        <div className="mt-16 flex justify-center">
                            <fieldset aria-label="Payment frequency">
                                <RadioGroup
                                    value={frequency}
                                    onChange={setFrequency}
                                    className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
                                >
                                    {frequencies.map((option) => (
                                        <Radio
                                            key={option.value}
                                            value={option}
                                            className="cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-indigo-500"
                                        >
                                            {option.label}
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </fieldset>
                        </div>
                    </div>
                    <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                        <svg
                            viewBox="0 0 1208 1024"
                            aria-hidden="true"
                            className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                        >
                            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
                            <defs>
                                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div
                            aria-hidden="true"
                            className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                        />
                        {tiers.map((tier) => (
                            <div
                                key={tier.id}
                                className={classNames(
                                    tier.featured
                                        ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                                        : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                                    'relative rounded-2xl',
                                )}
                            >
                                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h3
                                        id={tier.id}
                                        className={classNames(
                                            tier.featured ? 'text-gray-900' : 'text-white',
                                            'text-sm font-semibold leading-6',
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div className="mt-2 flex items-center gap-x-4">
                                            <p
                                                className={classNames(
                                                    tier.featured ? 'text-gray-900' : 'text-white',
                                                    'text-4xl font-bold tracking-tight',
                                                )}
                                            >
                                                {tier.price[frequency.value]}
                                            </p>
                                            <div className="text-sm leading-5">
                                                <p className={tier.featured ? 'text-gray-900' : 'text-white'}>EUR</p>
                                                <p
                                                    className={tier.featured ? 'text-gray-500' : 'text-gray-400'}
                                                >{`Facturé ${frequency.value}`}</p>
                                            </div>
                                        </div>
                                        <a
                                            href={tier.href}
                                            aria-describedby={tier.id}
                                            className={classNames(
                                                tier.featured
                                                    ? 'bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                                                    : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                                                'rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                                            )}
                                        >
                                            Choisir ce plan
                                        </a>
                                    </div>
                                    <div className="mt-8 flow-root sm:mt-10">
                                        <ul
                                            role="list"
                                            className={classNames(
                                                tier.featured
                                                    ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                                                    : 'divide-white/5 border-white/5 text-white',
                                                '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0',
                                            )}
                                        >
                                            {tier.mainFeatures.map((mainFeature) => (
                                                <li key={mainFeature} className="flex gap-x-3 py-2">
                                                    <CheckIcon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            tier.featured ? 'text-indigo-600' : 'text-gray-500',
                                                            'h-6 w-5 flex-none',
                                                        )}
                                                    />
                                                    {mainFeature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}