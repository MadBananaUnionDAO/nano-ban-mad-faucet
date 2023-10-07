'use client'

import { SOCIALS } from '@/config'
import usePrice from '@/hooks/usePrice'
import { ButtonBase } from '@mui/material'
import clsx from 'clsx'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'], weight: 'variable' })

export interface AppbarProps {
	showLogo?: boolean
	showPrice?: boolean
}

function DropSVG() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			x="0px"
			y="0px"
			viewBox="0 0 1000 1000"
			enableBackground="new 0 0 1000 1000"
			fill="currentColor"
			className="text-nano w-5 h-auto"
		>
			<g>
				<g transform="matrix(1 0 0 -1 0 960)">
					<path d="M500-30c-42.5,2.5-83.3,11.1-122.5,25.8C338.3,10.5,303,30.3,271.7,55.3c-31.4,25-56.4,56.6-75.1,94.8c-18.7,38.2-28.1,79.8-28.1,124.8c0,30.8,3.7,61.4,11,91.8c7.3,30.3,17.1,58.4,29.2,84.2s26.4,52.3,42.9,79.6s33.5,53,51.2,77c17.7,24,36.2,49.9,55.4,77.7c19.2,27.8,37.4,54.9,54.6,81.2c17.2,26.3,33.6,55.5,49.3,87.6c15.7,32.1,28.3,64.1,37.9,96c10.6-36.4,25.2-72.7,43.6-108.8c18.5-36.2,37.7-69,57.6-98.6s41-59.4,63-89.5s42.9-59.7,62.6-88.7c19.7-29.1,37.4-58.4,53.1-88c15.7-29.6,28.2-61.4,37.5-95.6c9.4-34.1,14-68.6,14-103.5c0-35.9-6.4-70-19.3-102.4s-30.2-60.4-52-84.2c-21.7-23.8-46.8-44.5-75.1-62.2c-28.3-17.7-58.3-31.4-89.9-41C563.6-22.2,531.9-28,500-30z M383.2,131.6c4.6-2,9.4-3,14.4-3c11.1,0,17.7,6.3,19.7,19l4.6,25.8c0.5,3.5,0.4,7.2-0.4,11c-0.8,3.8-2.1,7.5-4.2,11c-2,3.5-4.6,6.6-7.6,9.1c-2.5,2-6.1,5.1-10.6,9.1c-4.6,4-12,14.3-22.4,30.7s-18.6,34.8-24.7,55c-5.6,19.2-8.3,44-8.3,74.3c0,41.5,4.3,85.5,12.9,132c0.5,0.5,0.8,1.3,0.8,2.3c0,4-1.8,6.1-5.3,6.1c-4,0-7.8-2.5-11.4-7.6c-11.1-15.7-21.6-32.6-31.5-50.8c-9.9-18.2-19.8-43-30-74.3c-10.1-31.4-15.2-61.2-15.2-89.5c0-20.2,3.3-39.1,9.9-56.5c6.6-17.4,13.9-31.5,22-42.1c8.1-10.6,18.6-20.6,31.5-30c12.9-9.4,22.9-15.8,30-19.3C364.5,140.2,373.1,136.1,383.2,131.6z" />
				</g>
			</g>
		</svg>
	)
}

export default function Appbar() {
	const { price, error: priceError, isLoading: priceIsLoading } = usePrice()

	const pathname = usePathname()

	const isHome = pathname === '/'

	return (
		<header
			className={clsx('pt-safe w-full', !isHome && 'border-b border-slate-200')}
		>
			<div className="w-full flex justify-between items-center border-none px-4 sm:px-4 bg-white py-2">
				{!isHome && (
					<div>
						<Link href="/">
							<h1
								className={`flex ${montserrat.className} items-center font-light text-xl sm:text-2xl uppercase text-nano`}
							>
								<span>Nano</span>
								<span className="px-1">
									<DropSVG />
								</span>
								<span>Drop</span>
							</h1>
						</Link>
					</div>
				)}
				{isHome && (
					<div className="whitespace-nowrap py-1 px-2 border border-slate-200 rounded-full text-slate-500 text-sm sm:text-base">
						1 XNO ={' '}
						{priceError
							? priceError
							: priceIsLoading
							? '-- USD'
							: `${price} USD`}
					</div>
				)}
				<ButtonBase className="!rounded-lg" href={SOCIALS.github}>
					<div className="flex items-center space-x-2 text-slate-600 hover:text-[#1f2328] border border-slate-300 p-2 rounded-lg">
						<svg
							viewBox="0 0 20 20"
							version="1.1"
							className="w-4 h-4 sm:h-6 sm:w-6"
						>
							<g stroke="none" strokeWidth="1" fillRule="evenodd">
								<g
									transform="translate(-140.000000, -7559.000000)"
									fill="currentColor"
								>
									<g id="icons" transform="translate(56.000000, 160.000000)">
										<path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
									</g>
								</g>
							</g>
						</svg>
						<span className="text-sm sm:text-lg">Github</span>
					</div>
				</ButtonBase>
			</div>
		</header>
	)
}
