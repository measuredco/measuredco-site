import { Data } from "@measured/puck";

import {
  Base,
  Footer,
  Header,
  Heading,
  Paragraph,
  Section,
  Space,
} from "../components";
import { supabase } from "../lib/supabase";
import { getPageRes } from "../lib/get-page-res";

export default async function NotFound() {
  const pageRes = await getPageRes("/");
  const pageData = pageRes?.data?.data;
  const headerLinks = pageData?.root?.headerLinks;

  return (
    <Base>
      <Header links={headerLinks} />
      <main style={{ marginBottom: "auto", marginTop: "auto" }}>
        <Section>
          <Space size="07" />
          <Heading align="center" level="1" size="1">
            404
          </Heading>
          <Paragraph align="center" size="small">
            This page could not be found.
          </Paragraph>
          <Space size="07" />
        </Section>
      </main>
      <Footer />
    </Base>
  );
}
