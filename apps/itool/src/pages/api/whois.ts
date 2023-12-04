import type { APIRoute } from 'astro'
import dnsdata from './dns.json'

const isObjectEmpty = (objectName: object) => {
	return objectName && Object.keys(objectName).length === 0 && objectName.constructor === Object
}

interface ResponseI {
	status: boolean
	result: any
	[others: string]: any
}

export const GET: APIRoute = async (request) => {
	let searchParams = request.url.searchParams
	let params: any = {}
	for (let pair of searchParams.entries()) {
		console.log(`key: ${pair[0]}, value: ${pair[1]}`)
		params[`${pair[0]}`] = pair[1]
	}
	let domain = params['domain'] ?? ''
	let resp: ResponseI
	if (!domain) {
		resp = {
			status: false,
			error: 'Missing params:domain',
			result: null
		}
		return new Response(JSON.stringify(resp), {
			status: 422
		})
	}
	console.log('domain: ' + domain)
	let domainArr = domain.split('.')
	let hostArr = domainArr.slice(-2)
	const hostName = hostArr.join('.')
	// let dnsdata: any = readFileSync(path.resolve(__dirname, 'dns.json'), { encoding: 'utf8' })
	// let dns: any = JSON.parse(dnsdata)
	let whoisResult: object
	const whoisPromises: Promise<object>[] = []

	for (const value of dnsdata['services']) {
		const topDomainArr = value[0]
		const searchUrl = value[1][0]
		const fromTopDomain = hostName.split('.').pop()

		if (topDomainArr.includes(fromTopDomain)) {
			try {
				const response = await fetch(`${searchUrl}domain/${hostName}`, {
					headers: {
						'Content-Type': 'application/rdap+json'
					}
				})

				const data = await response.json()
				whoisPromises.push(data)
			} catch (err) {
				console.log('whois get error: ' + err)
				// whoisPromises.push()
			}
		}
	}

	// Wait for all promises to resolve
	whoisResult = Object.assign({}, ...(await Promise.all(whoisPromises)))

	console.log('whoisResult:' + JSON.stringify(whoisResult))

	let whoisStatus: boolean = isObjectEmpty(whoisResult) ? false : true
	resp = {
		status: whoisStatus,
		result: whoisResult
	}
	return new Response(JSON.stringify(resp))
}
