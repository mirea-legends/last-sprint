class Generator {
	static getString(length) {
		let alphabet = 'abcdefghijklmnopqrstuvwxyz '
		let rs = ''
		while (rs.length < length) {
			rs += alphabet[Math.floor(Math.random() * alphabet.length)]
		}
		return rs
	}
}
export default Generator
