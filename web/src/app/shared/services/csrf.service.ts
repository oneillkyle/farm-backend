import { Injectable } from '@angular/core';
declare var document: any;

@Injectable()
export class CsrfService {
    protected csrfName = 'csrftoken';
    constructor() { }

    setCsrfName(csrftokenName: string) {
        this.csrfName = csrftokenName || '';
    }

    getCurrentCsrfHeaders() {
        return this.getCookie(this.csrfName);
    }

    protected getCookie(cName: string) {
        const regexString = cName + '[\\w\-.]*?=(.+?)(;|$)';
        const regex = new RegExp(regexString);
        const cookies = document.cookie;
        if (regex.test(cookies)) {
            return decodeURI(regex.exec(cookies)[1]);
        }
        return '';
    }
}
