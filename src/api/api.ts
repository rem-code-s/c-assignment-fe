/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.2.0 (NJsonSchema v10.3.4.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class ApiClient {
	private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
	private baseUrl: string;
	protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

	constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
		this.http = http ? http : <any>window;
		this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
	}

	/**
	 * Get list of all available accounts
	 * @return Success
	 */
	getAccounts(): Promise<AccountDto[]> {
		let url_ = this.baseUrl + '/api/Account';
		url_ = url_.replace(/[?&]$/, '');

		let options_ = <RequestInit>{
			method: 'GET',
			headers: {
				'Accept': 'text/plain',
			},
		};

		return this.http.fetch(url_, options_).then((_response: Response) => {
			return this.processGetAccounts(_response);
		});
	}

	protected processGetAccounts(response: Response): Promise<AccountDto[]> {
		const status = response.status;
		let _headers: any = {};
		if (response.headers && response.headers.forEach) {
			response.headers.forEach((v: any, k: any) => (_headers[k] = v));
		}
		if (status === 200) {
			return response.text().then(_responseText => {
				let result200: any = null;
				result200 = _responseText === '' ? null : <AccountDto[]>JSON.parse(_responseText, this.jsonParseReviver);
				return result200;
			});
		} else if (status === 404) {
			return response.text().then(_responseText => {
				let result404: any = null;
				result404 = _responseText === '' ? null : <ProblemDetails>JSON.parse(_responseText, this.jsonParseReviver);
				return throwException('Not Found', status, _responseText, _headers, result404);
			});
		} else if (status !== 200 && status !== 204) {
			return response.text().then(_responseText => {
				return throwException('An unexpected server error occurred.', status, _responseText, _headers);
			});
		}
		return Promise.resolve<AccountDto[]>(<any>null);
	}

	/**
	 * Add new account
	 * @param body (optional)
	 * @return Success
	 */
	addAccount(body: AddAccountDto | undefined): Promise<AccountDto> {
		let url_ = this.baseUrl + '/api/Account';
		url_ = url_.replace(/[?&]$/, '');

		const content_ = JSON.stringify(body);

		let options_ = <RequestInit>{
			body: content_,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'text/plain',
			},
		};

		return this.http.fetch(url_, options_).then((_response: Response) => {
			return this.processAddAccount(_response);
		});
	}

	protected processAddAccount(response: Response): Promise<AccountDto> {
		const status = response.status;
		let _headers: any = {};
		if (response.headers && response.headers.forEach) {
			response.headers.forEach((v: any, k: any) => (_headers[k] = v));
		}
		if (status === 201) {
			return response.text().then(_responseText => {
				let result201: any = null;
				result201 = _responseText === '' ? null : <AccountDto>JSON.parse(_responseText, this.jsonParseReviver);
				return result201;
			});
		} else if (status === 400) {
			return response.text().then(_responseText => {
				let result400: any = null;
				result400 = _responseText === '' ? null : <ProblemDetails>JSON.parse(_responseText, this.jsonParseReviver);
				return throwException('Bad Request', status, _responseText, _headers, result400);
			});
		} else if (status !== 200 && status !== 204) {
			return response.text().then(_responseText => {
				return throwException('An unexpected server error occurred.', status, _responseText, _headers);
			});
		}
		return Promise.resolve<AccountDto>(<any>null);
	}

	/**
	 * Get account by Id
	 * @return Success
	 */
	getAccountById(id: string): Promise<AccountDto> {
		let url_ = this.baseUrl + '/api/Account/{id}';
		if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
		url_ = url_.replace('{id}', encodeURIComponent('' + id));
		url_ = url_.replace(/[?&]$/, '');

		let options_ = <RequestInit>{
			method: 'GET',
			headers: {
				'Accept': 'text/plain',
			},
		};

		return this.http.fetch(url_, options_).then((_response: Response) => {
			return this.processGetAccountById(_response);
		});
	}

	protected processGetAccountById(response: Response): Promise<AccountDto> {
		const status = response.status;
		let _headers: any = {};
		if (response.headers && response.headers.forEach) {
			response.headers.forEach((v: any, k: any) => (_headers[k] = v));
		}
		if (status === 200) {
			return response.text().then(_responseText => {
				let result200: any = null;
				result200 = _responseText === '' ? null : <AccountDto>JSON.parse(_responseText, this.jsonParseReviver);
				return result200;
			});
		} else if (status === 404) {
			return response.text().then(_responseText => {
				let result404: any = null;
				result404 = _responseText === '' ? null : <ProblemDetails>JSON.parse(_responseText, this.jsonParseReviver);
				return throwException('Not Found', status, _responseText, _headers, result404);
			});
		} else if (status !== 200 && status !== 204) {
			return response.text().then(_responseText => {
				return throwException('An unexpected server error occurred.', status, _responseText, _headers);
			});
		}
		return Promise.resolve<AccountDto>(<any>null);
	}

	/**
	 * Update Account
	 * @param body (optional)
	 * @return Success
	 */
	updateAccount(id: string, body: EditAccountDto | undefined): Promise<string> {
		let url_ = this.baseUrl + '/api/Account/{id}';
		if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
		url_ = url_.replace('{id}', encodeURIComponent('' + id));
		url_ = url_.replace(/[?&]$/, '');

		const content_ = JSON.stringify(body);

		let options_ = <RequestInit>{
			body: content_,
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'text/plain',
			},
		};

		return this.http.fetch(url_, options_).then((_response: Response) => {
			return this.processUpdateAccount(_response);
		});
	}

	protected processUpdateAccount(response: Response): Promise<string> {
		const status = response.status;
		let _headers: any = {};
		if (response.headers && response.headers.forEach) {
			response.headers.forEach((v: any, k: any) => (_headers[k] = v));
		}
		if (status === 200) {
			return response.text().then(_responseText => {
				let result200: any = null;
				result200 = _responseText === '' ? null : <string>JSON.parse(_responseText, this.jsonParseReviver);
				return result200;
			});
		} else if (status === 404) {
			return response.text().then(_responseText => {
				let result404: any = null;
				result404 = _responseText === '' ? null : <ProblemDetails>JSON.parse(_responseText, this.jsonParseReviver);
				return throwException('Not Found', status, _responseText, _headers, result404);
			});
		} else if (status !== 200 && status !== 204) {
			return response.text().then(_responseText => {
				return throwException('An unexpected server error occurred.', status, _responseText, _headers);
			});
		}
		return Promise.resolve<string>(<any>null);
	}

	/**
	 * Delete account
	 * @return Success
	 */
	deleteAccount(id: string): Promise<string> {
		let url_ = this.baseUrl + '/api/Account/{id}';
		if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
		url_ = url_.replace('{id}', encodeURIComponent('' + id));
		url_ = url_.replace(/[?&]$/, '');

		let options_ = <RequestInit>{
			method: 'DELETE',
			headers: {
				'Accept': 'text/plain',
			},
		};

		return this.http.fetch(url_, options_).then((_response: Response) => {
			return this.processDeleteAccount(_response);
		});
	}

	protected processDeleteAccount(response: Response): Promise<string> {
		const status = response.status;
		let _headers: any = {};
		if (response.headers && response.headers.forEach) {
			response.headers.forEach((v: any, k: any) => (_headers[k] = v));
		}
		if (status === 200) {
			return response.text().then(_responseText => {
				let result200: any = null;
				result200 = _responseText === '' ? null : <string>JSON.parse(_responseText, this.jsonParseReviver);
				return result200;
			});
		} else if (status === 404) {
			return response.text().then(_responseText => {
				let result404: any = null;
				result404 = _responseText === '' ? null : <StringActionResult>JSON.parse(_responseText, this.jsonParseReviver);
				return throwException('Not Found', status, _responseText, _headers, result404);
			});
		} else if (status !== 200 && status !== 204) {
			return response.text().then(_responseText => {
				return throwException('An unexpected server error occurred.', status, _responseText, _headers);
			});
		}
		return Promise.resolve<string>(<any>null);
	}

	/**
	 * Add a random fact to account
	 * @return Success
	 */
	updateRandomFact(id: string): Promise<RandomFact> {
		let url_ = this.baseUrl + '/api/Account/{id}/UpdateRandomFact';
		if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
		url_ = url_.replace('{id}', encodeURIComponent('' + id));
		url_ = url_.replace(/[?&]$/, '');

		let options_ = <RequestInit>{
			method: 'PUT',
			headers: {
				'Accept': 'text/plain',
			},
		};

		return this.http.fetch(url_, options_).then((_response: Response) => {
			return this.processUpdateRandomFact(_response);
		});
	}

	protected processUpdateRandomFact(response: Response): Promise<RandomFact> {
		const status = response.status;
		let _headers: any = {};
		if (response.headers && response.headers.forEach) {
			response.headers.forEach((v: any, k: any) => (_headers[k] = v));
		}
		if (status === 200) {
			return response.text().then(_responseText => {
				let result200: any = null;
				result200 = _responseText === '' ? null : <RandomFact>JSON.parse(_responseText, this.jsonParseReviver);
				return result200;
			});
		} else if (status === 400) {
			return response.text().then(_responseText => {
				let result400: any = null;
				result400 = _responseText === '' ? null : <ProblemDetails>JSON.parse(_responseText, this.jsonParseReviver);
				return throwException('Bad Request', status, _responseText, _headers, result400);
			});
		} else if (status !== 200 && status !== 204) {
			return response.text().then(_responseText => {
				return throwException('An unexpected server error occurred.', status, _responseText, _headers);
			});
		}
		return Promise.resolve<RandomFact>(<any>null);
	}

	/**
	 * Only update account name
	 * @param name (optional)
	 * @return Success
	 */
	updateAccountName(id: string, name: string | null | undefined): Promise<string> {
		let url_ = this.baseUrl + '/api/Account/{id}/UpdateAccountName?';
		if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
		url_ = url_.replace('{id}', encodeURIComponent('' + id));
		if (name !== undefined && name !== null) url_ += 'name=' + encodeURIComponent('' + name) + '&';
		url_ = url_.replace(/[?&]$/, '');

		let options_ = <RequestInit>{
			method: 'PUT',
			headers: {
				'Accept': 'text/plain',
			},
		};

		return this.http.fetch(url_, options_).then((_response: Response) => {
			return this.processUpdateAccountName(_response);
		});
	}

	protected processUpdateAccountName(response: Response): Promise<string> {
		const status = response.status;
		let _headers: any = {};
		if (response.headers && response.headers.forEach) {
			response.headers.forEach((v: any, k: any) => (_headers[k] = v));
		}
		if (status === 200) {
			return response.text().then(_responseText => {
				let result200: any = null;
				result200 = _responseText === '' ? null : <string>JSON.parse(_responseText, this.jsonParseReviver);
				return result200;
			});
		} else if (status === 404) {
			return response.text().then(_responseText => {
				let result404: any = null;
				result404 = _responseText === '' ? null : <ProblemDetails>JSON.parse(_responseText, this.jsonParseReviver);
				return throwException('Not Found', status, _responseText, _headers, result404);
			});
		} else if (status !== 200 && status !== 204) {
			return response.text().then(_responseText => {
				return throwException('An unexpected server error occurred.', status, _responseText, _headers);
			});
		}
		return Promise.resolve<string>(<any>null);
	}
}

export interface AccountDto {
	id?: string;
	name?: string | undefined;
	iban?: string | undefined;
	imageUrl?: string | undefined;
	favoriteQuote?: string | undefined;
	randomFact?: string | undefined;
}

export interface ProblemDetails {
	type?: string | undefined;
	title?: string | undefined;
	status?: number | undefined;
	detail?: string | undefined;
	instance?: string | undefined;
}

export interface AddAccountDto {
	id?: string;
	name?: string | undefined;
	iban?: string | undefined;
	favoriteQuote?: string | undefined;
}

export interface EditAccountDto {
	name?: string | undefined;
	iban?: string | undefined;
	favoriteQuote?: string | undefined;
}

export interface ActionResult {}

export interface StringActionResult {
	result?: ActionResult;
	readonly value?: string | undefined;
}

export interface RandomFact {
	guid?: string | undefined;
	text?: string | undefined;
	source?: string | undefined;
	source_url?: string | undefined;
	language?: string | undefined;
	permalink?: string | undefined;
}

export class ApiException extends Error {
	message: string;
	status: number;
	response: string;
	headers: { [key: string]: any };
	result: any;

	constructor(message: string, status: number, response: string, headers: { [key: string]: any }, result: any) {
		super();

		this.message = message;
		this.status = status;
		this.response = response;
		this.headers = headers;
		this.result = result;
	}

	protected isApiException = true;

	static isApiException(obj: any): obj is ApiException {
		return obj.isApiException === true;
	}
}

function throwException(
	message: string,
	status: number,
	response: string,
	headers: { [key: string]: any },
	result?: any
): any {
	if (result !== null && result !== undefined) throw result;
	else throw new ApiException(message, status, response, headers, null);
}