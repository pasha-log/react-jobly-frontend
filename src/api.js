import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
	// the token for interactive with the API will be stored here.
	static token;

	static async request(endpoint, data = {}, method = 'get') {
		console.debug('API Call:', endpoint, data, method);

		//there are multiple ways to pass an authorization token, this is how you pass it in the header.
		//this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${JoblyApi.token}` };
		const params = method === 'get' ? data : {};

		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			console.error('API Error:', err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [ message ];
		}
	}

	// Individual API routes

	/** Get details on a company by handle. */

	static async getCompany(handle) {
		let response = await this.request(`companies/${handle}`);
		return response.company;
	}

	// Get entire list of companies & handle search queries.

	static async getAllCompanies(name) {
		let response;
		name
			? (response = await this.request(`companies?name=${name}`))
			: (response = await this.request(`companies/`));
		return response.companies;
	}

	// Get entire list of jobs & handle search queries.

	static async getAllJobs(title) {
		let response;
		title ? (response = await this.request(`jobs?title=${title}`)) : (response = await this.request(`jobs/`));
		return response.jobs;
	}

	// Register someone in with this function, that should return a token.

	static async registerUser(registerInfo) {
		let response = await this.request('auth/register', registerInfo, 'post');
		JoblyApi.token = response.token;
		return response.token;
	}

	// Log someone in with this function, that should return a token.

	static async loginUser(loginInfo) {
		let response = await this.request('auth/token', loginInfo, 'post');
		JoblyApi.token = response.token;
		return response.token;
	}

	// Get user by username.

	static async getUser(username) {
		let response = await this.request(`users/${username}`);
		// console.log(response.user);
		return response.user;
	}
	// curl -X POST -H 'Content-Type: application/json' -d '{ "username":"PashaLog", "password":"Iloveemily", "firstName":"Paul", "lastName":"Loguinov", "email":"pasha.log@gmail.com" }' 'http://localhost:3001/auth/register'
	// curl -X GET -H 'Content-Type: application/json' -d "{'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RVc2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY3NDk3MTg2MX0.MhnGOv0zg2DQQRPwbJqC8fzWfeLpfEinT8qgGCG5yZg'}" 'http://localhost:3001/users/TestUser'

	// obviously, you'll add a lot here ...
}

export default JoblyApi;

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ' +
// 	'SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.' +
// 	'FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc';
