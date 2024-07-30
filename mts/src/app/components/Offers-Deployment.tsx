"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

export function CanvasRevealEffectDeployment() {
    return (
        <div className="flex lg:flex-row gap-5 justify-center flex-col">
            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Pricing plans for teams of&nbsp;all&nbsp;sizes
                        </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
                        loyalty, and driving sales.
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
                    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <div
                                key={tier.id}
                                className={classNames(
                                    tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                                    'rounded-3xl p-8 xl:p-10',
                                )}
                            >
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                                        {tier.name}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                            Most popular
                                        </p>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                                </p>
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className={classNames(
                                        tier.mostPopular
                                            ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                            : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                        'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                                    )}
                                >
                                    Buy plan
                                </a>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900" containerClassName="" >

                <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    A partir de 100$
                </h1>
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                    February 17, 2024. Your best opportunity to get these right now is by
                    entering raffles and waiting for the official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                </button>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-black">
                <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                    February 17, 2024. Your best opportunity to get these right now is by
                    entering raffles and waiting for the official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                </button>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-indigo-900">
                <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                    February 17, 2024. Your best opportunity to get these right now is by
                    entering raffles and waiting for the official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-indigo-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                </button>
            </BackgroundGradient>

        </div>
    );
}
