import axios from 'axios';
import { message } from 'antd';
import { pathOr } from 'ramda';
import { appConstants } from '../common/constants';

export const config = {
    serverUrl: "http://localhost:6060"
};

export const Accept = 'Accept';
export const ContentType = 'Content-Type';
export const APPLICATION_JSON = 'application/json';

export const http = axios.create({
    baseURL: config.serverUrl,
    timeout: 5000,
    headers: { 'X-Api-Key': '5c13a519-abfa-42d5-986a-c846fc232632' }
});

let dispatcher;

export const post = ({ path, payload, headers } = {}) => {
    return http.post(path, payload)
        .then(response => {
            message.success('Success!!');
            const responseData = { ...response.data, headers: response.headers };
            return Promise.resolve(responseData);
        })
        .catch(error => {
            const errorMessage = pathOr(pathOr('Application error occurred.', ['response', 'statusText'], error), ['response', 'data', 'errorMessage'], error);
            message.error(`Error: ${errorMessage}`);
            return Promise.reject(error);
        });
};

export const put = ({ path, payload, headers } = {}) => {
    return http.put(path, payload)
    .then(response => {
        message.success('Success!!');
        return Promise.resolve(response.data)})
    .catch(error => {
        const errorMessage = pathOr(pathOr('Application error occurred.', [ 'response', 'statusText' ], error), [ 'response', 'data', 'errorMessage' ], error);
        message.error(`Error: ${errorMessage}`);
        return Promise.reject(error);
    });
};

export const del = ({ path, payload, headers } = {}) => {
    return http.delete(path, payload)
    .then(response => {
        message.success('Success!!');
        return Promise.resolve(response.data)})
    .catch(error => {
        const errorMessage = pathOr(pathOr('Application error occurred.', [ 'response', 'statusText' ], error), [ 'response', 'data', 'errorMessage' ], error);
        message.error(`Error: ${errorMessage}`);
        return Promise.reject(error);
    });
};

export const get = ({ path, responseType, headers } = {}) => {
    return http.get(path, { responseType: responseType })
        .then(response => Promise.resolve(response.data))
        .catch(error => {
            const errorMessage = pathOr(pathOr('Application error occurred.', ['response', 'statusText'], error), ['response', 'data', 'errorMessage'], error);
            message.error(`Error: ${errorMessage}`);
            return Promise.reject(error);
        });
};
