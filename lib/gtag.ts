export const GA_TRACKING_ID = "UA-175766917-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gtagPageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gtagEvent = (
  action: string | Gtag.EventNames,
  eventParams?: Gtag.EventParams
) => {
  window.gtag("event", action, eventParams);
};
