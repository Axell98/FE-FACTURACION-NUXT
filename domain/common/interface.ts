export type DataResponse<T> = {
	status: boolean;
	message: string;
	error: null;
	data: T;
};

export interface RequestResponse<T> {
	data: null | T;
	pending: unknown;
	error: null;
}
