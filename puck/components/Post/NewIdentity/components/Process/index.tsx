import Image from "next/image";

import { Space } from "../../../../../../components";

import "./Process.css";

const Process = () => (
  <div className="msrd-NewIdentityProcess">
    <div className="msrd-NewIdentityProcess-inner">
      <span className="msrd-NewIdentityProcess-dots">
        <span className="msrd-NewIdentityProcess-dotsInner" />
      </span>
      <ol className="msrd-NewIdentityProcess-steps">
        <li className="msrd-NewIdentityProcess-start">
          <span>The brief is key</span>
          <Image
            alt=""
            height="32"
            src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741294306/site/edit_agvemo.png"
            width="32"
          />
        </li>
        <li className="msrd-NewIdentityProcess-card">
          <h3 className="msrd-NewIdentityProcess-heading">Strategy</h3>
          <div className="msrd-NewIdentityProcess-cardInner">
            <Image
              alt=""
              height="60"
              src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741073893/site/process-01_u8syer.png"
              width="60"
            />
            <span>
              Position us as experts that specialise in “all of the concerns
              that impact user interface - content, engineering, design, brand
              and product.”
            </span>
          </div>
        </li>
        <li className="msrd-NewIdentityProcess-card">
          <h3 className="msrd-NewIdentityProcess-heading">Visual system</h3>
          <div className="msrd-NewIdentityProcess-cardInner">
            <Image
              alt=""
              height="60"
              src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741263083/site/process-03_iurivl.png"
              width="60"
            />
            <span>Drive interested parties to our website.</span>
          </div>
        </li>
        <li className="msrd-NewIdentityProcess-card">
          <h3 className="msrd-NewIdentityProcess-heading">
            Business pipeline plan
          </h3>
          Campaigns on Linkedin using thought leadership articles and other
          relevant content.
          <Space size="04" />
          <a className="msrd-NewIdentityProcess-button" href="/blog">
            Blog posts
          </a>
        </li>
        <li className="msrd-NewIdentityProcess-card">
          <h3 className="msrd-NewIdentityProcess-heading">Deliverable</h3>
          <div className="msrd-NewIdentityProcess-cardInner">
            <Image
              alt=""
              height="60"
              src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1741263083/site/process-02_ffcxm1.png"
              width="60"
            />
            <span>Comprehensive list of design expectations.</span>
          </div>
        </li>
        <li className="msrd-NewIdentityProcess-card">
          “user interface should be beautiful, systematic, congruent and reflect
          an organisation’s brand.”
        </li>
      </ol>
    </div>
  </div>
);

export default Process;
