import axios from 'axios'

export const socket = new WebSocket(`ws://localhost:8080/ws/llm-chat/`)
export const axios_instance = axios.create({
	baseURL: 'http://localhost:8080/api/',
	timeout: 1000,
	headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

export default socket
