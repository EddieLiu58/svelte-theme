import { v4 as uuidv4 } from 'uuid'
import dotenv from 'dotenv'

dotenv.config()
async function getInfo(
	ip: string
): Promise<{ ip_network: string; country_code: string; country_name: string }> {
	const uuid = uuidv4()
	ip = '125.228.140.213'
	type Result = { ip_network: string; country_code: string; country_name: string }
	let result!: Result
	await fetch(`https://${process.env.BACKEND}/itools/ip-range/v4?ip=${ip}&uid=${uuid}`)
		.then(async function (response) {
			// handle success
			if (response.status == 200) {
				const data: { success: boolean; country_code: string; country_name: string } =
					await response.json()
				result =
					data.success == true
						? {
								ip_network: ip,
								country_code: data['country_code'],
								country_name: data.country_name
						  }
						: { ip_network: ip, country_code: '', country_name: '' }
			}
		})
		.catch(function (error) {
			// handle error
			console.log(error)
			result.ip_network = ip
			result.country_code = ''
			result.country_name = ''
		})
	return result
}
export default getInfo
