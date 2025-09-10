export type DataResponse<T = unknown> = {
	status: boolean;
	message: string;
	error: null;
	data: T;
};
