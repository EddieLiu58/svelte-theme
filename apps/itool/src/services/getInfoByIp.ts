import { v4 as uuidv4 } from 'uuid'
async function getInfo(
	ip: string
): Promise<{ ip_network: string; county_code: string; county_name: string }> {
	const uuid = uuidv4()
	await fetch(`https://${process.env.BACKEND}/itools/ip-range/v4?ip=${ip}&uid=${uuid}`)
		.then(async function (response) {
			// handle success
			console.log(response)
			if (response.status == 200) {
				const data: Promise<{ success: boolean; country_code: string; county_name: string }> =
					response.json()
				return (await data).success
					? {
							ip_network: ip,
							county_code: (await data).country_code,
							county_name: (await data).county_name
					  }
					: { ip_network: ip, county_code: '', county_name: '' }
			}
			return { ip_network: ip, county_code: '', county_name: '' }
		})
		.catch(function (error) {
			// handle error
			console.log(error)
			return { ip_network: ip, county_code: '', county_name: '' }
		})
	return { ip_network: ip, county_code: '', county_name: '' }
}
export default getInfo
