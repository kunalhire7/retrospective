import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { http, setInterceptor } from '../http';
import { appConstants } from '../../common/constants';

describe("HTTP Layer", () => {
    const token = "dummy_token";
    const url = 'https://api.com';

    let mockStore, api, httpMock;

    mockStore = configureMockStore([thunk]);

    beforeEach(() => {
        httpMock = new MockAdapter(http);
    });

    it("sample test", () => {
        expect(1 + 1).toBe(2);
    });

});