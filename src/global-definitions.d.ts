/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace NodeJS {
    interface Global {
        __CorporateAppHeader?: any;

        __coverage__: any;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Window {
    __CorporateAppHeader?: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
declare let __webpack_public_path__: string;

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module 'hapi-qs';
declare module 'http-proxy-rules';
// есть пакет https://www.npmjs.com/package/@types/resolve, но yarn не находит его в npm
declare module 'resolve';
declare module 'measure-text-width';
