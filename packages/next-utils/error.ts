// we will define a custom Error class
// this error class can be used to throw errors within
// the service layer of the API
// Later API wrapper would catch these errors and
// return the appropriate response
// This is done to avoid the use of try/catch blocks

// APIError would have 3 things:
// 1. status to return
// 2. JSON object to return
// 3. (optional) error message to log

type errorJSON = {
  title: string;
  desc?: string;
  error?: object;
};

export class APIError extends Error {
  status: number;
  json: errorJSON;
  message: string;

  constructor(json: errorJSON, status: number, message?: string) {
    super(message);
    this.status = status;
    this.json = json;
    this.message = message || JSON.stringify(json);
  }
}
