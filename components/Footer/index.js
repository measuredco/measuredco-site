import React from "react";

import { Space } from "../";

import "./Footer.css";

const Footer = () => (
  <footer className="msrd-Footer">
    <div className="msrd-Footer-inner">
      <h2 className="msrd-u-visuallyHidden">Footer</h2>
      <svg viewBox="0 0 360 120" height="30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M120 120V74.7C120 33.5 86.5 0 45.3 0H0v53.3h45.3c11.8 0 21.3 9.6 21.3 21.3v45.3h53.3l.1.1Zm120 0V74.7C240 33.5 206.5 0 165.3 0H120v53.3h45.3c11.8 0 21.3 9.6 21.3 21.3v45.3h53.3l.1.1Zm120 0V74.7C360 33.5 326.5 0 285.3 0H240v53.3h45.3c11.8 0 21.3 9.6 21.3 21.3v45.3h53.3l.1.1Z"
          fill="currentColor"
        />
      </svg>
      <ul>
        <li>
          <a href="https://dev.to/measuredco" target="_blank">
            <span className="msrd-Footer-textWithIcon">
              <svg
                aria-hidden="true"
                className="msrd-Footer-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"
                  fill="currentColor"
                />
              </svg>
              DEV Community
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/measuredco" target="_blank">
            <span className="msrd-Footer-textWithIcon">
              <svg
                aria-hidden="true"
                className="msrd-Footer-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                />
              </svg>
              GitHub
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/measuredco" target="_blank">
            <span className="msrd-Footer-textWithIcon">
              <svg
                aria-hidden="true"
                className="msrd-Footer-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="currentColor"
                />
              </svg>
              LinkedIn
            </span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/hellomeasuredco" target="_blank">
            <span className="msrd-Footer-textWithIcon">
              <svg
                aria-hidden="true"
                className="msrd-Footer-linkIcon"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.901 1.153h3.68l-8.04 9.19 9.459 12.503h-7.406l-5.8-7.584-6.638 7.584h-3.682l8.6-9.83-9.074-11.862h7.594l5.243 6.932zm-1.291 19.491h2.039l-13.163-17.404h-2.188z"
                  fill="currentColor"
                />
              </svg>
              Twitter
            </span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="mailto:hello@measured.co">hello@measured.co</a>
        </li>
        <li>Measured®</li>
        <li>
          <a
            href="https://www.iubenda.com/privacy-policy/24566196"
            target="_blank"
          >
            Privacy policy
          </a>
        </li>
        <li>
          <a
            href=" https://www.iubenda.com/terms-and-conditions/24566196"
            target="_blank"
          >
            Terms and conditions
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            className="msrd-Footer-logoLink"
            href="https://directories.onepercentfortheplanet.org/profile/measured"
            target="_blank"
          >
            <svg
              aria-labelledby="onePercentForThePlanet"
              height="36"
              role="img"
              viewBox="0 0 86 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="onePercentForThePlanet">1% for the Planet</title>
              <path
                d="m35.984 17.507-.011-.293-.038-.59-.038-.424-.048-.419-.08-.55-.074-.434-.082-.415-.089-.407-.103-.418-.142-.517-.075-.251-.18-.555-.137-.386a14.443 14.443 0 0 0-.111-.29l-.249-.608-.262-.578-.263-.534-.254-.473-.316-.548-.325-.52-.308-.458-.347-.485-.389-.504-.333-.405-.214-.248c-.21-.239-.427-.472-.649-.699l-.34-.339-.267-.254-.279-.254a20.556 20.556 0 0 0-.269-.235l-.509-.422-.299-.233-.288-.215-.372-.264a19.918 19.918 0 0 0-.337-.229l-.465-.298-.324-.195-.308-.177-.479-.259-.449-.227c-.109-.054-.22-.106-.33-.158l-.368-.166-.6-.247-.476-.18-.549-.188a17.363 17.363 0 0 0-.442-.138l-.349-.099a17.999 17.999 0 0 0-4.77-.641c-2.63 0-5.129.566-7.381 1.581l-.002-.001-.784.377-.46.243-.405.229-.225.134-.516.322-.33.218-.388.272-.315.231-.377.292-.299.243-.365.311-.285.255-.352.331-.27.265-.338.349-.255.276c-.072.079-.143.16-.214.241l-.362.428a16.493 16.493 0 0 0-.808 1.064c-.088.125-.173.251-.258.377l-.325.507-.345.582-.319.587c-.057.111-.114.222-.169.334l-.211.443a21.224 21.224 0 0 0-.285.655l-.191.485c-.06.158-.117.316-.173.476l-.113.34a16.67 16.67 0 0 0-.153.495l-.094.337a14.99 14.99 0 0 0-.132.516l-.074.324-.111.545-.053.298c-.033.195-.063.391-.09.587l-.031.241v.002c-.09.73-.135 1.466-.135 2.203 0 6.727 3.693 12.591 9.161 15.678l.555.301c.107.055.215.11.323.163l.469.224c.108.049.215.097.323.143l.815.331c.276.104.556.202.837.292l.004.001c.389.125.782.237 1.178.335h.002c1.415.349 2.868.525 4.326.525 4.907 0 9.355-1.965 12.601-5.149l.003-.004a18.062 18.062 0 0 0 2.486-3.035l.239-.377.227-.378.218-.385.208-.39.2-.395.189-.401.18-.407.17-.411.16-.416.15-.421.14-.425.129-.43.118-.434.108-.438.097-.442.087-.445.075-.449.063-.453.053-.456.041-.458.03-.462.018-.465c.003-.155.005-.311.005-.467l-.009-.568ZM21.629 32.078h-7.024v-21.74l-2.617-.025.022-3.521 3.389-3.018h6.23v28.304Zm35.09-13.512-3.382 7.999h2.315l.568-1.418h3.063l.579 1.418h2.36l-3.381-7.999h-2.122Zm-7.534.057h-2.202v7.942h6.048v-1.929h-3.846v-6.013Zm-6.434 0h-3.405v7.942h2.202v-2.269h1.089c1.975 0 3.416-.987 3.416-2.86v-.022c0-1.759-1.294-2.791-3.302-2.791Zm31.329 4.811h3.812v-1.737H74.08v-1.202h4.21v-1.872h-6.389v7.942h6.446v-1.872H74.08v-1.259Zm4.947-2.883h2.383v6.014h2.202v-6.014h2.383v-1.928h-6.968v1.928Zm-10.711 2.27-3.268-4.198h-2.054v7.942h2.178v-4.357l3.393 4.357h1.929v-7.942h-2.178v4.198Zm16.487 2.346a.697.697 0 0 0-.693.697v.004c0 .379.303.694.693.694a.698.698 0 0 0 .694-.698v-.005a.695.695 0 0 0-.692-.692h-.002Zm.578.697a.58.58 0 0 1-.578.585.574.574 0 0 1-.577-.581v-.004a.579.579 0 1 1 1.155-.004v.004Zm-.244-.123c0-.162-.12-.233-.289-.233h-.33v.69h.196v-.206h.082l.139.206h.225l-.166-.24a.22.22 0 0 0 .143-.217Zm-.3.097h-.123v-.165h.123c.068 0 .105.03.105.082 0 .049-.037.083-.105.083Zm-27.971-2.404.897-2.258.885 2.258h-1.782Zm-13.015-1.895c0 .624-.476 1.032-1.259 1.032h-1.044v-2.099h1.032c.795 0 1.271.363 1.271 1.044v.023Zm-18.177.29h-1.465l6.294-8.622h1.465l-6.294 8.622Zm5.014-.003a2.015 2.015 0 0 1-1.066-.305 2.027 2.027 0 0 1-.958-1.72c0-1.116.908-2.024 2.024-2.024s2.024.908 2.024 2.024a2.027 2.027 0 0 1-2.024 2.025Zm0-2.918a.895.895 0 0 0 0 1.787.895.895 0 0 0 0-1.787Zm-7.3-3.638c0-1.116.908-2.024 2.024-2.024s2.024.908 2.024 2.024a2.026 2.026 0 0 1-2.024 2.024 2.026 2.026 0 0 1-2.024-2.024Zm26.656 2.024c2.288 0 4.004-1.727 4.004-3.856v-.021c0-2.13-1.696-3.835-3.983-3.835-2.288 0-4.004 1.727-4.004 3.856v.021c0 2.129 1.694 3.835 3.983 3.835Zm31.968-1.897v-1.175h3.559v-1.621h-3.559v-1.123h3.93V9.731h-5.964v7.414h6.017v-1.747l-3.983-.001ZM57.225 14.9h.9l1.494 2.245h2.373l-1.769-2.584c.922-.392 1.526-1.144 1.526-2.277v-.022c0-.73-.223-1.303-.657-1.726-.498-.509-1.282-.805-2.416-.805H55.17v7.414h2.055V14.9Zm-15.772-.403h3.506v-1.705h-3.506v-1.26h3.877V9.731h-5.932v7.414h2.055v-2.648Zm35.104-1.991h-2.638V9.731h-2.055v7.414h2.055v-2.817h2.638v2.817h2.055V9.731h-2.055v2.775Zm-12.15-.974h2.225v5.613h2.054v-5.613h2.225V9.731h-6.504v1.801ZM26.306 15.27a.895.895 0 0 0-1.787 0 .894.894 0 0 0 1.787 0Zm21.863-1.853c0-1.07.752-1.981 1.875-1.981 1.133 0 1.906.932 1.906 2.002v.021c0 1.07-.752 1.981-1.885 1.981-1.123 0-1.896-.932-1.896-2.002v-.021Zm9.056-1.907h1.345c.689 0 1.113.297 1.113.879v.022c0 .54-.403.879-1.102.879h-1.356v-1.78Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <Space size="02" />
        </li>
        <li>
          <a
            className="msrd-Footer-logoLink"
            href="https://ecologi.com/measuredco"
            target="_blank"
          >
            <svg
              aria-labelledby="ecologi"
              height="36"
              role="img"
              viewBox="0 0 141 72"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="ecologi">Ecologi</title>
              <path
                d="M139.744 37.96c-.269-.37-.553-.542-.851-.528-.184.015-.354.129-.496.386-.071.142-.482.842-.823 1.555-.624 1.313-1.673 2.712-2.184 3.34-.51.627-.936.941-1.234.956a.344.344 0 0 1-.297-.129c-.156-.185-.256-.585-.284-1.199a21.121 21.121 0 0 1 .156-3.14c.286-2.542.655-5.073 1.106-7.591.142-.756.255-1.527.312-2.298.099-.3.142-.613.128-.927-.029-.67-.326-1.27-.865-1.813-.539-.542-1.149-.799-1.83-.756a2.26 2.26 0 0 1-.539-.014c-.156-.014-.326-.014-.482-.014-.241 0-.482.085-.666.242-.44.357-.851 1.056-1.234 2.127a26.085 26.085 0 0 0-.993 3.567l-.213 1.07c-.34.072-.666.215-.95.4-1.631.928-3.801 2.569-5.559 3.996-.057-1.299-.312-7.82-.312-8.063 0-.214.028-.442.071-.657.042-.214.057-.428.057-.656a1.864 1.864 0 0 0-.454-1.142 2.159 2.159 0 0 0-.936-.613 4.932 4.932 0 0 0-1.206-.257 13.512 13.512 0 0 0-1.304-.072 13.913 13.913 0 0 0-5.716 1.27 22.191 22.191 0 0 0-5.162 3.197 17.545 17.545 0 0 0-3.73 4.21c-.95 1.527-1.432 2.983-1.432 4.381 0 .742 1.773 8.862 11.913 1.256 3.729-2.797 3.375-4.31 3.857-4.524.043.614.071.7.071 1.313v3.596c-.865.913-6.197 6.336-11.019 12.758-2.213 3.268-4.255 7.849-4.822 10.846-.553 2.954-1.673 9.333 5.091 7.706 3.56-.857 9.374-7.992 10.949-12.302 1.716-4.723 3.956-10.032 4.212-16.396l-.029-1 5.446-5.55s.269-.414.567-.97a1.74 1.74 0 0 0-.028.27 23.117 23.117 0 0 0-.142 3.568c.071 1.37.27 2.483.596 3.31a7.336 7.336 0 0 0 1.12 2.013c.355.442.78.799 1.276 1.07.426.214.78.385 1.05.514.269.114.553.2.837.242.255.029.51.043.765.029.979-.043 1.929-.471 2.837-1.242a14.54 14.54 0 0 0 2.567-2.94 7.42 7.42 0 0 0 1.035-2.254c.142-.257.213-.557.184-.856 0-.471-.141-.914-.411-1.285Zm-23.996 14.371a52.266 52.266 0 0 1-2.595 5.85 41.482 41.482 0 0 1-3.347 5.424c-1.219 1.655-2.354 2.854-3.446 3.596.043-1.613.468-3.325 1.262-5.123a42.015 42.015 0 0 1 2.851-5.352 78.76 78.76 0 0 1 3.446-5.066 237.983 237.983 0 0 0 3.077-4.253c-.113 1.342-.524 2.983-1.248 4.924ZM25.822 7.778c1.56 0 2.411-2.426 1.986-2.712-.426-.285-17.444-1.712-21.982-.856S4.408 7.35 4.408 7.35 1.855 27.757 1.004 33.322C.295 37.946-.698 46.736.721 48.734c1.418 1.998 10.82 1.056 14.181.286 8.084-1.856 10.07-2.569 10.495-2.997.425-.428.113-1.827-1.135-1.57-1.418.285-4.254.285-11.062.428-.85.014-4.396 0-4.396-.856s1.986-15.698 1.986-15.698c0-.428 10.069.143 11.061 0 .993-.142 2.27-2.711 1.56-3.14-.709-.427-12.054-.57-12.054-.57l2.41-16.268s10.495-.571 12.055-.571Zm62.344 32.308c.212-.957.496-1.896.85-2.81.34-.943.795-1.828 1.334-2.67a11.815 11.815 0 0 1 1.872-2.24 8.412 8.412 0 0 1 2.439-1.598c.383-.072.794-.129 1.248-.186a9.702 9.702 0 0 0 1.29-.228 3.793 3.793 0 0 0 1.107-.457c.326-.2.567-.5.695-.842.07-.2.099-.414.099-.613.014-.2-.043-.4-.142-.571a3.816 3.816 0 0 1-.326-.628c-.1-.286-.298-.5-.568-.628a4.272 4.272 0 0 0-1.077-.4c-.454-.1-.913-.172-1.376-.214-.496-.043-.95-.057-1.39-.057-.411 0-.766.015-1.078.043a4.202 4.202 0 0 0-.723.114c-1.276.286-2.496.914-3.701 1.884a16.589 16.589 0 0 0-3.163 3.382 18.147 18.147 0 0 0-2.184 4.024c-.539 1.399-.808 2.655-.808 3.782-.029.186-.029.371-.029.542v.514a84.054 84.054 0 0 1-1.872 2.455 39.932 39.932 0 0 1-2.893 3.325c-.85.856-1.475 1.284-1.872 1.284-.07.014-.141-.014-.198-.071-.255-.229-.454-.8-.568-1.713a27.883 27.883 0 0 1-.184-3.268c0-.984.014-2.012.043-3.068.028-1.056.07-2.07.113-3.04.043-.97.071-1.826.114-2.597.042-.77.07-1.355.113-1.755a305.392 305.392 0 0 1 2.964-5.851 73.443 73.443 0 0 0 2.61-5.48 55.149 55.149 0 0 0 2.098-5.78 47.726 47.726 0 0 0 1.475-6.75c.114-.856.17-1.712.17-2.568-.014-1.884-.368-3.254-1.063-4.11C82.918.414 81.968-.014 80.749 0h-.483a2.459 2.459 0 0 0-.553.072c-1.29.228-2.58 1.156-3.886 2.782-1.304 1.627-2.51 3.668-3.602 6.137a52.932 52.932 0 0 0-2.85 8.248 62.572 62.572 0 0 0-1.688 9.005 76.253 76.253 0 0 0-.51 9.176c.028 2.783.255 5.194.694 7.235.44 2.04 1.163 3.525 2.17 4.467a12.51 12.51 0 0 0 2.539 1.87 5.323 5.323 0 0 0 2.595.656c1.56-.015 3.205-.757 4.964-2.227.992-.841 2.084-1.969 3.247-3.396.1.186.199.357.298.528.397.614.88 1.17 1.433 1.655a15.895 15.895 0 0 0 2.098 1.542c.61.4 1.263.713 1.957.913a7.21 7.21 0 0 0 2.128.328c.624 0 1.248-.114 1.83-.357a7.521 7.521 0 0 0 2.595-1.869 12.197 12.197 0 0 0 1.872-2.769 14.123 14.123 0 0 0 1.106-3.182c.227-1.013.354-2.055.354-3.097 0-.2-.014-.47-.042-.784a10.906 10.906 0 0 0-.128-.97c-.057-.3-.142-.6-.255-.871a.776.776 0 0 0-.426-.471.242.242 0 0 1-.042-.143c0-.057 0-.1-.043-.143a1.256 1.256 0 0 0-.212-.442 8.163 8.163 0 0 0-.327-.343c-.07-.2-.17-.385-.297-.542-.17-.257-.313-.37-.44-.37l-.255-.472a.372.372 0 0 0-.213-.028c-.142 0-.213.057-.213.17a.168.168 0 0 0-.028.144c0 .042 0 .1.014.142.014.043.014.1.014.143.156.4.255.813.298 1.241.042.429.07.843.085 1.27a28.267 28.267 0 0 1-.78 4.068 20.295 20.295 0 0 1-1.46 3.81c-.215.435-.466.85-.752 1.242a5.085 5.085 0 0 1-1.036 1.041 3.778 3.778 0 0 1-.921.557 2.91 2.91 0 0 1-1.206.214 1.652 1.652 0 0 1-1.177-.428 3.02 3.02 0 0 1-.71-1.07 5.475 5.475 0 0 1-.354-1.442c-.056-.5-.099-.999-.099-1.513 0-.313 0-.627.028-.913.029-.285.071-.542.086-.728Zm-35.739 0c.212-.957.497-1.897.851-2.811.34-.942.794-1.827 1.333-2.669a11.815 11.815 0 0 1 1.872-2.24 8.396 8.396 0 0 1 2.44-1.598c.382-.072.794-.129 1.247-.186.44-.043.865-.128 1.291-.228.397-.1.766-.243 1.106-.457.326-.2.567-.5.695-.842.071-.2.1-.414.1-.613.014-.2-.043-.4-.143-.571a3.816 3.816 0 0 1-.326-.628 1.071 1.071 0 0 0-.567-.628 4.279 4.279 0 0 0-1.078-.4c-.454-.1-.907-.17-1.375-.214a16.116 16.116 0 0 0-1.39-.057c-.411 0-.766.015-1.078.043a4.202 4.202 0 0 0-.723.114c-1.277.286-2.496.914-3.702 1.884a16.61 16.61 0 0 0-3.162 3.382 18.147 18.147 0 0 0-2.184 4.024c-.54 1.399-.809 2.655-.809 3.782-.028.185-.028.371-.028.542v.657a28.625 28.625 0 0 1-3.872 2.897c-1.248.785-3.786 1.384-4.85 1.384h-.354c-1.163-.1-1.972-.542-2.383-1.341a5.895 5.895 0 0 1-.638-2.783c0-.6.042-1.185.142-1.77.099-.6.212-1.199.354-1.77.51-2.069 1.29-3.838 2.355-5.28 1.063-1.44 2.112-2.169 3.19-2.169a.23.23 0 0 1 .17.029c.029.029.086.029.17.029.355.056.696.085 1.05.07.837 0 1.504-.185 2-.541.496-.357.737-.785.737-1.256a1.544 1.544 0 0 0-.383-.97c-.255-.315-.709-.557-1.375-.757a8.856 8.856 0 0 0-1.716-.4 13.865 13.865 0 0 0-1.716-.114 12.44 12.44 0 0 0-5.304 1.156 14.556 14.556 0 0 0-4.382 3.097 15.644 15.644 0 0 0-3.021 4.395 11.916 11.916 0 0 0-1.12 5.038c0 1.54.226 2.854.666 3.967a8.488 8.488 0 0 0 1.716 2.74 7.468 7.468 0 0 0 2.453 1.684c.922.4 1.9.685 2.894.828.737.142 1.489.214 2.24.214 1.73.014 3.46-.343 5.049-1.028a18.691 18.691 0 0 0 4.566-2.84 20.53 20.53 0 0 0 1.816-1.698c.17.485.397.942.666 1.37.397.614.88 1.17 1.433 1.655a15.839 15.839 0 0 0 2.099 1.542c.61.4 1.262.713 1.957.913a7.208 7.208 0 0 0 2.127.328c.624 0 1.248-.114 1.83-.357a7.524 7.524 0 0 0 2.595-1.87 12.191 12.191 0 0 0 1.872-2.768 14.123 14.123 0 0 0 1.106-3.182c.227-1.013.354-2.055.354-3.097 0-.2-.014-.47-.042-.785a10.906 10.906 0 0 0-.128-.97 4.32 4.32 0 0 0-.255-.87.777.777 0 0 0-.425-.471.243.243 0 0 1-.043-.143c0-.057 0-.1-.043-.143a1.256 1.256 0 0 0-.212-.442 7.05 7.05 0 0 0-.327-.343c-.07-.2-.17-.385-.297-.542-.17-.257-.312-.37-.44-.37l-.255-.472c-.071-.028-.142-.043-.213-.028-.142 0-.213.057-.213.17a.172.172 0 0 0-.028.144c0 .042 0 .1.014.142.014.043.014.1.014.143.156.4.256.813.298 1.241.043.429.071.843.085 1.27a28.267 28.267 0 0 1-.78 4.068 20.364 20.364 0 0 1-1.46 3.81c-.215.435-.466.85-.752 1.242-.298.4-.638.742-1.035 1.041-.279.229-.59.416-.922.557a2.91 2.91 0 0 1-1.206.214 1.652 1.652 0 0 1-1.177-.428 2.986 2.986 0 0 1-.709-1.07 5.475 5.475 0 0 1-.354-1.442c-.057-.5-.1-.999-.1-1.513 0-.313 0-.627.029-.913.028-.285.099-.542.113-.728Zm60.896-4.48c-2.637 2.768-5.828 3.781-6.523 3.14-.738-.686 1.475-4.025 3.971-6.137 3.616-3.068 5.332-3.54 5.899-3.753.766.042-.368 3.61-3.347 6.75ZM76.437 20.222a93.303 93.303 0 0 1 1.674-6.48 91.223 91.223 0 0 1 2.084-6.307c.738-1.983 1.433-3.496 2.07-4.523 0-.043.015.042.03.27.013.229.028.429.042.6a53.27 53.27 0 0 1-1.12 5.737 88.524 88.524 0 0 1-1.546 5.294 96.344 96.344 0 0 1-1.844 5.138 134.009 134.009 0 0 1-2.127 5.165c.028-1.17.283-2.796.737-4.894Zm55.267 1.641c.298.485.652.927 1.064 1.327.397.4.822.6 1.262.57.723-.028 1.361-.413 1.929-1.141a3.612 3.612 0 0 0 .78-2.497l-.029-.514c-.056-1.242-.269-2.098-.61-2.583a1.49 1.49 0 0 0-1.361-.67 4.77 4.77 0 0 0-1.078.27c-.496.186-.95.428-1.375.742-.44.314-.837.7-1.149 1.142-.312.4-.468.9-.44 1.399.284.685.624 1.327 1.007 1.955Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
