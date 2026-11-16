import { isAndroidApp } from '../config/platform.js';

export default function ExternalLink({ href, className, children, ga, gaLabel }) {
  // A top-level navigation lets Capacitor hand the URL to Android.
  return <a className={className} data-ga={ga} data-ga-label={gaLabel} href={href} target={isAndroidApp ? undefined : '_blank'} rel="noopener noreferrer">{children}</a>;
}
