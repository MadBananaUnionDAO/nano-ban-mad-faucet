import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: 'variable' })

export default function Hero() {
	return (
		<div className="text-center">
			<h1
				className={`flex ${montserrat.className} font-light sm:font-extralight text-4xl sm:text-5xl uppercase text-[#209CE9]`}
			>
				Nano{' '}
				<span className="px-1 sm:px-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 1000 1000"
						enableBackground="new 0 0 1000 1000"
						fill="currentColor"
						className="text-[#209CE9] w-8 sm:w-10 h-auto"
					>
						<g>
							<g transform="matrix(1 0 0 -1 0 960)">
								<path d="M500-30c-42.5,2.5-83.3,11.1-122.5,25.8C338.3,10.5,303,30.3,271.7,55.3c-31.4,25-56.4,56.6-75.1,94.8c-18.7,38.2-28.1,79.8-28.1,124.8c0,30.8,3.7,61.4,11,91.8c7.3,30.3,17.1,58.4,29.2,84.2s26.4,52.3,42.9,79.6s33.5,53,51.2,77c17.7,24,36.2,49.9,55.4,77.7c19.2,27.8,37.4,54.9,54.6,81.2c17.2,26.3,33.6,55.5,49.3,87.6c15.7,32.1,28.3,64.1,37.9,96c10.6-36.4,25.2-72.7,43.6-108.8c18.5-36.2,37.7-69,57.6-98.6s41-59.4,63-89.5s42.9-59.7,62.6-88.7c19.7-29.1,37.4-58.4,53.1-88c15.7-29.6,28.2-61.4,37.5-95.6c9.4-34.1,14-68.6,14-103.5c0-35.9-6.4-70-19.3-102.4s-30.2-60.4-52-84.2c-21.7-23.8-46.8-44.5-75.1-62.2c-28.3-17.7-58.3-31.4-89.9-41C563.6-22.2,531.9-28,500-30z M383.2,131.6c4.6-2,9.4-3,14.4-3c11.1,0,17.7,6.3,19.7,19l4.6,25.8c0.5,3.5,0.4,7.2-0.4,11c-0.8,3.8-2.1,7.5-4.2,11c-2,3.5-4.6,6.6-7.6,9.1c-2.5,2-6.1,5.1-10.6,9.1c-4.6,4-12,14.3-22.4,30.7s-18.6,34.8-24.7,55c-5.6,19.2-8.3,44-8.3,74.3c0,41.5,4.3,85.5,12.9,132c0.5,0.5,0.8,1.3,0.8,2.3c0,4-1.8,6.1-5.3,6.1c-4,0-7.8-2.5-11.4-7.6c-11.1-15.7-21.6-32.6-31.5-50.8c-9.9-18.2-19.8-43-30-74.3c-10.1-31.4-15.2-61.2-15.2-89.5c0-20.2,3.3-39.1,9.9-56.5c6.6-17.4,13.9-31.5,22-42.1c8.1-10.6,18.6-20.6,31.5-30c12.9-9.4,22.9-15.8,30-19.3C364.5,140.2,373.1,136.1,383.2,131.6z" />
							</g>
						</g>
					</svg>
				</span>{' '}
				Drop
			</h1>
			<h4
				className={`${montserrat.className} font-light text-sm text-slate-500`}
			>
				Your first Nano transaction!
			</h4>
		</div>
	)
}
