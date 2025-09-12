import * as React from "react";
import {
  Html,
  Tailwind,
  Body,
  Head,
  Container,
  Section,
  Row,
  Column,
} from "@react-email/components";
// import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";

interface Props {
  addImage?: string;
  welcomeMessage: string;
  content?: string;
  ctalabel?: string;
  ctaurl?: string;
  confirmbuttonalabel?: string;
  confirmbuttonurl?: string;
  denybuttonlabel?: string;
  denybuttonurl?: string;
}

const emailtemplate = ({
  addImage = "",
  welcomeMessage = "",
  content = "hello world",
  ctalabel,
  ctaurl,
  confirmbuttonalabel,
  confirmbuttonurl,
  denybuttonlabel,
  denybuttonurl,
}: Props) => {
  return (
    <Html>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=karma@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Tailwind>
        <Body
          className="bg-black text-gray-400"
          style={{ fontFamily: "Karma, Georgia, serif" }}
        >
          <Container className=" bg-[#111111] w-full h-auto flex relative">
            <div className="absolute top-4 left-0 right-0 h-px bg-[#401818]" />
            <div className="absolute top-0 bottom-0 left-4 w-px bg-[#401818]" />
            <div className="absolute top-0 bottom-0 right-4 w-px bg-[#401818]" />
            <Section className="w-full text-[16px] text-white">
              <Img
                src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604050/pubdevpit/header.png"
                width="498px"
                height="auto"
                className="mx-auto"
                alt="save the date pub dev pit - hero image with a pig"
              />
              <Section className="flex justify-center">
                <Row className="px-4 text-center text-[1.5rem]">
                  <Column className="pb-4">{welcomeMessage}</Column>
                </Row>
                <Row className="text-center text-[1rem]">
                  <Column className="px-20 pb-5">
                    Or maybe we’ll just talk about times of old, times of now,
                    and times (of) new roman. Little font humour for ya there.
                  </Column>
                </Row>
                {/*<Row>
                  <Column className="w-full flex justify-center">
                    <Img
                      src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/fork-knife.png"
                      width="auto"
                      height="auto"
                      alt="image of a fork and knife in a cross shape"
                    />
                  </Column>
                </Row>*/}
                <table>
                  <tr>
                    <td colspan="3" align="center" style="padding:10px;">
                      <Img
                        src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/fork-knife.png"
                        width="auto"
                        height="auto"
                        alt="image of a fork and knife in a cross shape"
                      />
                    </td>
                  </tr>
                </table>
                <Row className="text-center text-[1rem]">
                  <Column className="px-20 py-4">
                    Thursday, September 18th, 2025 6pm
                  </Column>
                </Row>
                <Row className="text-center text-[1rem]">
                  <Column className="px-20 pb-1">
                    Petty Cash Social House
                    <br />
                    487 Adelaide St W<br />
                    Toronto, ON, M5V 1T4
                  </Column>
                </Row>
                <Row className="text-center text-[1rem]">
                  <Column className="px-20 pb-15">
                    <Link
                      className="flex justify-center items-center text-[#803131]"
                      href="https://pettycashtoronto.com/"
                      target="_blank"
                    >
                      VIEW SITE →
                    </Link>
                  </Column>
                </Row>
                {/*<Row className="text-center text-[1rem]">
                  <Column className="pb-1 w-full flex justify-center">
                    <Link
                      className="flex justify-center items-center text-[#803131]"
                      href="https://www.google.com/maps/place/Petty+Cash/@43.6455072,-79.4033426,17z/data=!3m1!4b1!4m6!3m5!1s0x882b35a55a4d7437:0xadee0b37085a6a85!8m2!3d43.6455072!4d-79.4007677!16s%2Fg%2F11f5dgp3zh?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      <Img
                        src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604050/pubdevpit/map.png"
                        width="auto"
                        height="auto"
                        alt="image of a map with a pin on it"
                      />
                    </Link>
                  </Column>
                </Row>*/}
                <table>
                  <tr>
                    <td colspan="3" align="center" style="padding:10px 0;">
                      <a
                        href="MAP_LINK_HERE"
                        target="_blank"
                        style="text-decoration:none;"
                      >
                        <Img
                          src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604050/pubdevpit/map.png"
                          width="auto"
                          height="auto"
                          alt="image of a map with a pin on it"
                        />
                      </a>
                    </td>
                  </tr>

                  {/*<Row className="text-center text-[1rem]">
                  <Column className="px-20 pt-1 pb-4">
                    <Link
                      className="flex justify-center items-center text-[#803131]"
                      href="https://www.google.com/maps/place/Petty+Cash/@43.6455072,-79.4033426,17z/data=!3m1!4b1!4m6!3m5!1s0x882b35a55a4d7437:0xadee0b37085a6a85!8m2!3d43.6455072!4d-79.4007677!16s%2Fg%2F11f5dgp3zh?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      VIEW MAP →
                    </Link>
                  </Column>
                </Row>*/}
                  <tr>
                    <td
                      colspan="3"
                      align="center"
                      style="padding:10px 40px; font-size:16px;"
                    >
                      <a
                        href="https://www.google.com/maps/place/Petty+Cash/@43.6455072,-79.4033426,17z/data=!3m1!4b1!4m6!3m5!1s0x882b35a55a4d7437:0xadee0b37085a6a85!8m2!3d43.6455072!4d-79.4007677!16s%2Fg%2F11f5dgp3zh?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        style="color:#803131; text-decoration:none; font-size:16px;"
                      >
                        VIEW MAP →
                      </a>
                    </td>
                  </tr>
                </table>
                <Row className="text-center text-[1rem]">
                  <Column className="px-20 pb-4">
                    if you're checking street view,
                    <br />
                    go around the corner, you'll see the front of the place.
                  </Column>
                </Row>
                <Row className="text-center text-[1rem]">
                  <Column className="px-20 pb-15">
                    Email or message me if you need anything
                    <br />
                    <span>
                      <Link
                        className="flex justify-center items-center text-[#803131]"
                        href="mailto:chris@tomotsugu.me"
                      >
                        chris@tomotsugu.me
                      </Link>
                    </span>
                  </Column>
                </Row>
                <Row className="text-center text-[1rem]">
                  <Column className="px-4 pb-4">Will you be attending?</Column>
                </Row>
                <tr>
                  <td
                    width="50%"
                    align="right"
                    style="padding:0 10px 20px 10px;"
                  >
                    <a
                      href="{{confirmButtonUrl}}"
                      target="_blank"
                      style="text-decoration:none; display:inline-block;"
                    >
                      <Img
                        src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/btn-yes.png"
                        width="auto"
                        height="auto"
                        alt="image of red button with the word yes on it"
                      />
                    </a>
                  </td>
                  <td
                    width="50%"
                    align="left"
                    style="padding:0 10px 20px 10px;"
                  >
                    <a
                      href="{{denyButtonUrl}}"
                      target="_blank"
                      style="text-decoration:none; display:inline-block;"
                    >
                      <Img
                        src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/btn-no.png"
                        width="auto"
                        height="auto"
                        alt="image of a black button with the word no on it"
                      />
                    </a>
                  </td>
                </tr>
                {/*<Row className="mb-8">
                  <Column className="px-2">
                    <Link
                      className="flex justify-end cursor-pointer"
                      href={confirmbuttonurl}
                      target="_blank"
                    >
                      <Img
                        src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/btn-yes.png"
                        width="auto"
                        height="auto"
                        alt="image of red button with the word yes on it"
                      />
                    </Link>
                  </Column>
                  <Column className="px-2  cursor-pointer">
                    <Link href={denybuttonurl}>
                      <Img
                        src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/btn-no.png"
                        width="auto"
                        height="auto"
                        alt="image of a black button with the word no on it"
                      />
                    </Link>
                  </Column>
                </Row>*/}
                <Row>
                  <Column className="pb-40 w-full flex justify-center">
                    <Img
                      src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/fork-knife.png"
                      width="auto"
                      height="auto"
                      alt="second image"
                    />
                  </Column>
                </Row>
                <tr>
                  <td
                    colspan="3"
                    align="center"
                    style="padding:0 40px 20px 40px; font-size:12px; line-height:1.4; color:#939393;"
                  >
                    © Chris Tomotsugu 2025. All rights reserved.
                    <br />
                    Markham, Ontario, Canada
                    <br />
                    <a
                      href="mailto:chris@tomotsugu.me"
                      style="color:#803131; text-decoration:none; font-size:12px;"
                    >
                      chris@tomotsugu.me
                    </a>
                  </td>
                </tr>
                {/*<Row className="mb-8 text-center text-[.75rem]">
                  <Column className="px-20 text-[#939393]">
                    © Chris Tomotsugu 2025. All rights reserved.
                    <br />
                    Markham, Ontario, Canada
                    <br />
                    <span>
                      <Link
                        className="flex justify-center items-center text-[#803131]"
                        href="mailto:chris@tomotsugu.me"
                      >
                        chris@tomotsugu.me
                      </Link>
                    </span>
                  </Column>
                </Row>*/}
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default emailtemplate;
