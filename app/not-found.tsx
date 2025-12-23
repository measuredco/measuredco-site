import { Heading, Page, Paragraph, Section, Space } from "../components";
import { getPageRes } from "../lib/get-page-res";

export default async function NotFound() {
  const pageRes = await getPageRes("/");
  const pageData = pageRes?.data?.data;
  const headerLinks = pageData?.root?.props?.headerLinks;

  return (
    <Page centered headerLinks={headerLinks}>
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
    </Page>
  );
}
