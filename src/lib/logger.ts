import * as Sentry from '@sentry/nextjs'

type LoggerLevel = 'info' | 'error'

export default class Logger {
	private name: string = 'LOGGER'
	private debug: boolean = true
	private enableSentry = true

	constructor(name?: string, debug?: boolean, enableSentry?: boolean) {
		if (name) this.name = name
		if (debug !== undefined) this.debug = debug
		if (enableSentry !== undefined) this.enableSentry = enableSentry
	}

	private formatedDateTime() {
		const date = new Date()
		const year = date.getFullYear()
		const month = date.getMonth() + 1
		const day = date.getDate()
		const hours = `0${date.getHours()}`.slice(-2)
		const minutes = `0${date.getMinutes()}`.slice(-2)
		const seconds = `0${date.getSeconds()}`.slice(-2)
		const milliseconds = `00${date.getMilliseconds()}`.slice(-3)
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`
	}

	private formatMessage(data: any[], level: LoggerLevel): string {
		// Adding ANSI escape codes to display the error message in red
		const coloredLevel =
			level === 'error'
				? `\x1b[31m${level.toUpperCase()}\x1b[0m`
				: `\x1b[32m${level.toUpperCase()}\x1b[0m`
		let prefix = `${this.formatedDateTime()} | ${coloredLevel}`
		prefix += ` | \u001b[1m${this.name}\u001b[0m`
		return `${prefix} | ${data.join(' ')}`
	}

	info(...data: any[]) {
		if (this.debug) {
			console.info(this.formatMessage(data, 'info'))
		}
	}

	error(...data: any[]) {
		if (this.debug) {
			const errorMessage = this.formatMessage(data, 'error')
			console.error(`${errorMessage}`)
			this.sendToSentry(errorMessage)
		}
	}

	private sendToSentry(...data: any[]) {
		if (!this.enableSentry) return
		const sentryIsInited = Sentry.getCurrentHub()?.getClient()?.getDsn()
		if (sentryIsInited) {
			Sentry.captureMessage(`${this.name} | ${data.join(' ')}`)
		}
	}
}
