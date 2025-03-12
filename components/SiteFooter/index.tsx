import { Rule, Space } from "..";

import "./SiteFooter.css";

const SiteFooter = () => (
  <footer className="msrd-SiteFooter">
    <h2 className="msrd-u-visuallyHidden">Footer</h2>
    <div className="msrd-SiteFooter-inner">
      <div>
        <Rule />
        <Space size="06" />
        <ul>
          <li>
            <a href="https://bsky.app/profile/measured.co">
              <span className="msrd-SiteFooter-textWithIcon">
                {/* <svg
                aria-hidden="true"
                className="msrd-SiteFooter-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
                  fill="currentColor"
                />
              </svg> */}
                Bluesky
              </span>
            </a>
          </li>

          <li>
            <a href="https://dev.to/measuredco">
              <span className="msrd-SiteFooter-textWithIcon">
                {/* <svg
                aria-hidden="true"
                className="msrd-SiteFooter-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"
                  fill="currentColor"
                />
              </svg> */}
                DEV
              </span>
            </a>
          </li>
          <li>
            <a href="https://github.com/measuredco">
              <span className="msrd-SiteFooter-textWithIcon">
                {/* <svg
                aria-hidden="true"
                className="msrd-SiteFooter-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                />
              </svg> */}
                GitHub
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/measuredco">
              <span className="msrd-SiteFooter-textWithIcon">
                {/* <svg
                aria-hidden="true"
                className="msrd-SiteFooter-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="currentColor"
                />
              </svg> */}
                LinkedIn
              </span>
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li>Measured®</li>
        <li>
          <a href="https://www.iubenda.com/privacy-policy/24566196">
            Privacy policy
          </a>
        </li>
        <li>
          <a href=" https://www.iubenda.com/terms-and-conditions/24566196">
            Terms and conditions
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/contact">Get in touch</a>
        </li>
        <li>
          <a href="/feed.atom">Subscribe via RSS feed</a>
        </li>
      </ul>
      <div className="msrd-SiteFooter-logo">
        <a className="msrd-SiteFooter-logoLink" href="/">
          <svg
            aria-labelledby="measured"
            role="img"
            viewBox="0 0 360 120"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="measured">Measured</title>
            <path
              d="M120 120V74.7C120 33.5 86.5 0 45.3 0H0v53.3h45.3c11.8 0 21.3 9.6 21.3 21.3v45.3h53.3l.1.1Zm120 0V74.7C240 33.5 206.5 0 165.3 0H120v53.3h45.3c11.8 0 21.3 9.6 21.3 21.3v45.3h53.3l.1.1Zm120 0V74.7C360 33.5 326.5 0 285.3 0H240v53.3h45.3c11.8 0 21.3 9.6 21.3 21.3v45.3h53.3l.1.1Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
