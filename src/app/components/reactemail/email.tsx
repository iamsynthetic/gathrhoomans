import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Column,
  Row,
  Tailwind,
} from "@react-email/components";

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

const EmailTemplate = ({
  // addImage = "",
  welcomeMessage = "Another Night of Debauchery!",
  // content = "hello world",
  // ctalabel,
  // ctaurl,
  confirmbuttonalabel,
  confirmbuttonurl,
  denybuttonlabel,
  denybuttonurl,
}: Props) => {
  return (
    <Html
      style={{
        backgroundColor: "#000000",
        fontFamily: "Karma, Georgia, serif",
        width: "100%",
      }}
    >
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=karma@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Tailwind>
        <Body
          style={{
            backgroundColor: "#000000",
            fontFamily: "Karma, Georgia, serif",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <Container
            style={{
              position: "relative",
              backgroundColor: "#111111",
              width: "600px",
              margin: "0 auto",
            }}
          >
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
              style={{ borderSpacing: 0, borderCollapse: "collapse" }}
            >
              <tr>
                <td
                  style={{
                    width: "20px",
                    borderRight: "1px solid",
                    borderColor: "#401818",
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    color: "white",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  <Section
                    style={{
                      width: "100%",
                      fontSize: "16px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <Img
                      src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604050/pubdevpit/header-img.png"
                      width="498px"
                      height="auto"
                      style={{ marginInline: "auto", textAlign: "center" }}
                      alt="save the date pub dev pit - hero image with a pig"
                    />
                    <Section>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            fontSize: "2rem",
                            color: "#FFA630",
                          }}
                        >
                          {welcomeMessage}
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "0px",
                            paddingBottom: "20px",
                          }}
                        >
                          Or maybe we&apos;ll just talk about times of old,
                          times of now, and times (of) new roman.
                          <br />
                          Little font humour for ya there.
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column>
                          <Img
                            src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/fork-knife.png"
                            width="auto"
                            height="auto"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              paddingBottom: "60px",
                            }}
                            alt="image of a fork and knife in a cross shape"
                          />
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            fontSize: "1rem",
                            color: "#FFA630",
                          }}
                        >
                          Thursday, September 18th, 2025 6pm
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "0px",
                            paddingBottom: "10px",
                          }}
                        >
                          Petty Cash Social House 487 Adelaide St W
                          <br />
                          Toronto, ON, M5V 1T4
                          <br />
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "0px",
                            paddingBottom: "60px",
                          }}
                        >
                          <Link
                            style={{
                              display: "block",
                              margin: "0 auto",
                              color: "#803131",
                              textDecoration: "underline",
                            }}
                            href="http://www.pettycashtoronto.com"
                            target="_blank"
                          >
                            VIEW SITE →
                          </Link>
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "0px",
                            paddingRight: "0px",
                            paddingTop: "0px",
                            paddingBottom: "10px",
                          }}
                        >
                          <Link
                            style={{ display: "block", margin: "0 auto" }}
                            href="https://www.google.com/maps/place/Petty+Cash/@43.6455111,-79.403348,17z/data=!3m1!4b1!4m6!3m5!1s0x882b35a55a4d7437:0xadee0b37085a6a85!8m2!3d43.6455072!4d-79.4007677!16s%2Fg%2F11f5dgp3zh?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                          >
                            <Img
                              src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604050/pubdevpit/map.png"
                              width="auto"
                              height="auto"
                              style={{ display: "block", margin: "0 auto" }}
                              alt="image of a map with a pin on it"
                            />
                          </Link>
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "10px",
                            paddingBottom: "20px",
                          }}
                        >
                          <Link
                            style={{
                              display: "block",
                              margin: "0 auto",
                              color: "#803131",
                              textDecoration: "underline",
                            }}
                            href="https://www.google.com/maps/place/Petty+Cash/@43.6455111,-79.403348,17z/data=!3m1!4b1!4m6!3m5!1s0x882b35a55a4d7437:0xadee0b37085a6a85!8m2!3d43.6455072!4d-79.4007677!16s%2Fg%2F11f5dgp3zh?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                          >
                            VIEW MAP →
                          </Link>
                        </Column>
                      </Row>
                      <Row
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "10px",
                            paddingBottom: "0px",
                          }}
                        >
                          if you&apos;re checking street view,
                          <br />
                          go around the corner,
                          <br />
                          you&apos;ll see the front of the place.
                        </Column>
                      </Row>
                      <Row className="text-center text-[1rem]">
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "10px",
                            paddingBottom: "60px",
                          }}
                        >
                          Email or message me if you need anything
                          <br />
                          <span>
                            <Link
                              href="mailto:chris@tomotsugu.me"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                color: "#803131",
                                textDecoration: "underline",
                              }}
                            >
                              chris@tomotsugu.me
                            </Link>
                          </span>
                        </Column>
                      </Row>

                      <Row className="text-center text-[1rem]">
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "0px",
                            paddingBottom: "20px",
                          }}
                        >
                          Will you be attending?
                        </Column>
                      </Row>
                      <Row
                        style={{
                          marginBottom: "20px",
                        }}
                      >
                        <Column
                          style={{
                            textAlign: "right",
                            paddingRight: "1rem",
                          }}
                        >
                          <Link
                            style={{
                              display: "inline-block",
                              textAlign: "right",
                              cursor: "pointer",
                            }}
                            href={confirmbuttonurl}
                            target="_blank"
                          >
                            <Img
                              src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/btn-yes.png"
                              width="119"
                              height="auto"
                              style={{
                                display: "inline-block",
                              }}
                              alt="image of red button with the word yes on it"
                            />
                          </Link>
                        </Column>
                        <Column
                          style={{ paddingRight: ".5rem", cursor: "pointer" }}
                        >
                          <Link href={denybuttonurl}>
                            <Img
                              src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/btn-no.png"
                              width="119"
                              height="auto"
                              alt="image of a black button with the word no on it"
                            />
                          </Link>
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Img
                            src="https://res.cloudinary.com/dca4atadh/image/upload/v1757604049/pubdevpit/fork-knife.png"
                            width="auto"
                            height="auto"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              marginBottom: "150px",
                            }}
                            alt="image of a fork and knife in a cross shape"
                          />
                        </Column>
                      </Row>
                      <Row
                        style={{
                          paddingLeft: "0px",
                          paddingRight: "0px",
                          paddingTop: "0px",
                          paddingBottom: "20px",
                          fontSize: ".75rem",
                        }}
                      ></Row>
                      <Row className="text-center text-[1rem]">
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "60px",
                            paddingBottom: "60px",
                          }}
                        >
                          Didn&apos;t like that Evite has a bunch of ads, so I
                          built my own system, let me know what you think.
                        </Column>
                      </Row>
                      <Row>
                        <Column
                          style={{
                            paddingLeft: "80px",
                            paddingRight: "80px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            textAlign: "center",
                            color: "#939393",
                          }}
                        >
                          © Chris Tomotsugu 2025. All rights reserved.
                          <br />
                          Markham, Ontario, Canada
                          <br />
                          <span>
                            <Link
                              style={{
                                display: "block",
                                margin: "0 auto",
                                marginBottom: "50px",
                                color: "#803131",
                                textDecoration: "underline",
                              }}
                              href="mailto:chris@tomotsugu.me"
                            >
                              chris@tomotsugu.me
                            </Link>
                          </span>
                        </Column>
                      </Row>
                    </Section>
                  </Section>
                </td>
                <td
                  style={{
                    width: "20px",
                    borderLeft: "1px solid",
                    borderColor: "#401818",
                  }}
                >
                  &nbsp;
                </td>
              </tr>
            </table>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default EmailTemplate;
