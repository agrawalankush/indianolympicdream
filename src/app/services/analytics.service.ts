import { Injectable } from '@angular/core';

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    private gaId = 'G-B5JXLEHBHP';

    constructor() { }

    /**
     * Track a page view
     */
    pageView(path: string, title: string) {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('config', this.gaId, {
                page_path: path,
                page_title: title
            });
        }
    }

    /**
     * Track a custom event
     */
    trackEvent(eventName: string, params: Record<string, any> = {}) {
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', eventName, params);
        }
    }
}
