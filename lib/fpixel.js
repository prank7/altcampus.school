export const FB_PIXEL_ID = '264397765165382';

export const pageview = () => {
  window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options);
};
