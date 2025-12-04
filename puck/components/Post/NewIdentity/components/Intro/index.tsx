import Image from "next/image";

import "./Intro.css";

const Intro = () => (
  <div className="msrd-NewIdentityIntro">
    <div className="msrd-NewIdentityIntro-image">
      <Image
        alt=""
        height="173"
        src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741431366/site/intro-02_uwgjuv.jpg"
        width="308"
      />
    </div>
    <div aria-hidden className="msrd-NewIdentityIntro-label">
      Usable as an app icon/favicon
    </div>
    <div className="msrd-NewIdentityIntro-image">
      <Image
        alt=""
        height="173"
        src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741431424/site/intro-04_ooxgim.jpg"
        width="308"
      />
    </div>
    <div aria-hidden className="msrd-NewIdentityIntro-label">
      Usable with or without word mark
    </div>
    <div className="msrd-NewIdentityIntro-image">
      <Image
        alt=""
        height="173"
        src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741430437/site/intro-01_qt0kj6.jpg"
        width="308"
      />
    </div>
    <div aria-hidden className="msrd-NewIdentityIntro-label">
      Initial digital design language principles
    </div>
    <div className="msrd-NewIdentityIntro-image">
      <Image
        alt=""
        height="173"
        src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741431654/site/intro-03_tpbhb5.jpg"
        width="308"
      />
    </div>
    <div aria-hidden className="msrd-NewIdentityIntro-label">
      Support light and dark modes
    </div>
    <div className="msrd-NewIdentityIntro-image">
      <Image
        alt=""
        height="173"
        src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741431465/site/intro-05_uvxoon.jpg"
        width="308"
      />
    </div>
  </div>
);

export default Intro;
