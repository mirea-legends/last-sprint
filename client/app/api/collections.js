import axios from 'axios'
export default async function get_collections() {
	await axios
		.get('http://localhost:8080/api/collections/')
		.then(response => {
			console.log(response.data)
			return response.data
		})
		.catch(error => {
			console.error(error)
		})
}
