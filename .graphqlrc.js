require('dotenv').config()

const serverUrl = process.env.SERVER_URL
	? `${process.env.SERVER_URL}/graphql`
	: 'http://localhost:4200/graphql'

module.exports = {
	schema: serverUrl,
	documents: 'schemes/**/*.graphql',
	extensions: {
		codegen: {
			generates: {
				'./__generated__/output.ts': {
					plugins: [
						'typescript',
						'typescript-operations',
						'typescript-react-apollo'
					]
				}
			}
		}
	}
}
