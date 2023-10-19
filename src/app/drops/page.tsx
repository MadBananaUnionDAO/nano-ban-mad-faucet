'use client'

import useListDrops from '@/hooks/useListDrops'
import { ArrowPathIcon } from '@heroicons/react/24/solid'
import { ButtonBase, IconButton, Skeleton } from '@mui/material'
import clsx from 'clsx'

import DropListTableDesktop from './_components/DropListTableDesktop'
import DropListTableMobile from './_components/DropListTableMobile'
import DropsMap from '@/components/DropsMap'
import { usePreferences } from '@/contexts/PreferencesProvider'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['500'],
	subsets: ['latin'],
})
export default function Drops() {
	const { darkMode } = usePreferences()

	const { drops, isLoading, error, refresh, isRefreshing, hasMore, loadMore } =
		useListDrops()
	if (error)
		return (
			<div className="border border-rose-200 bg-rose-100 text-rose-800 text-lg font-semibold rounded-lg px-4 py-2">
				{error}
			</div>
		)
	if (isLoading) {
		return (
			<div className="w-full flex justify-center">
				<div className="p-4 w-full max-w-5xl">
					<Skeleton className="w-full !h-12 dark:bg-slate-800" />
					<Skeleton className="w-full !h-8 dark:bg-slate-800" />
					<div className="flex gap-4">
						<Skeleton className="w-full 1h-8 flex-1 dark:bg-slate-800" />
						<Skeleton className="w-full !h-8 flex-1 dark:bg-slate-800" />
						<Skeleton className="w-full !h-8 flex-1 dark:bg-slate-800" />
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className="flex flex-col flex-1 2xl:flex-row 2xl:justify-between 2xl:gap-4 overflow-hidden">
			<div className="w-full flex flex-col flex-1 2xl:w-3/5 max-w-7xl max-h-[60%] 2xl:max-h-max">
				<DropsMap theme={darkMode ? 'dark' : 'light'} />
			</div>
			<div className="flex flex-col flex-1 px-4 2xl:py-4 overflow-hidden">
				<div className="flex justify-between items-center">
					<div>
						<div className="text-sm sm:text-base font-semibold leading-6 text-slate-600 dark:text-zinc-400 border border-slate-300 dark:border-slate-600 rounded-lg px-2 py-0.5">
							256.343 DROPS
						</div>
					</div>
					<div>
						<IconButton
							type="button"
							onClick={refresh}
							disabled={isLoading || isRefreshing}
							className="group"
						>
							<ArrowPathIcon
								className={clsx(
									'w-6 sm:w-8 h-6 sm:h-8 text-slate-600 dark:text-zinc-600 group-hover:text-nano',
									isRefreshing && 'animate animate-spin',
								)}
							/>
						</IconButton>
					</div>
				</div>
				<div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-600">
					<div className="hidden sm:flow-root">
						<DropListTableDesktop drops={drops || []} />
					</div>
					<div className="flow-root sm:hidden">
						<DropListTableMobile drops={drops || []} />
					</div>
					{hasMore && (
						<div className="flex justify-center p-4">
							<ButtonBase onClick={loadMore}>
								<div className="bg-nano px-4 py-2 font-semibold text-white uppercase rounded-lg">
									Load More
								</div>
							</ButtonBase>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
