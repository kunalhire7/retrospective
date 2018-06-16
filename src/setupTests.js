import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

require('jest-localstorage-mock');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
function FormDataMock() {
    this.append = jest.fn();
}
global.FormData = FormDataMock

var localStorageMock = (function () {
    var store = {};

    return {
        getItem: function (key) {
            return store[ key ] || null;
        },
        setItem: function (key, value) {
            store[ key ] = !!value && value.toString();
        },
        clear: function () {
            store = {};
        }
    };

})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});
