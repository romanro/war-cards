export type ApiEndPoint = 'deck' | 'pile';
export type Operator = 'shuffle' | 'new' | 'add' | 'draw';
export type QueryParams = `?${string}=${string | number | boolean}`;

export type EndPointURI =
  | `${ApiEndPoint}/${string}`
  | `${ApiEndPoint}/${Operator}/${Operator}/${QueryParams | ''}`
  | `${ApiEndPoint}/${Operator}/${string}/${Operator}/${QueryParams | ''}`;
