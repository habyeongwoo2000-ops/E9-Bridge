import { isAndroidApp } from '../config/platform.js';

export default function ExternalLink({ href, className, children }) {
  // A top-level navigation lets Capacitor hand the URL to Android.
  return <a className={className} href={href} target={isAndroidApp ? undefined : '_blank'} rel="noopener noreferrer">{children}</a>;
}
