import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New Message from Bonesy Design Portfolio</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={h1}>Bonesy Design Inquiry</Heading>
        </Section>
        <Section style={body}>
          <Text style={paragraph}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={hr} />
          <Text style={label}>Message:</Text>
          <Section style={messageContainer}>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Section>
        <Section style={footer}>
          <Text style={footerText}>
            © {new Date().getFullYear()} Bonesy Design. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const header = {
  padding: "32px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#f2ca50",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
};

const body = {
  padding: "32px",
  backgroundColor: "#1c1b1b",
  borderRadius: "12px",
  border: "1px solid rgba(242, 202, 80, 0.1)",
};

const paragraph = {
  color: "#ededed",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "12px 0",
};

const label = {
  color: "#f2ca50",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  marginTop: "24px",
  marginBottom: "8px",
};

const messageContainer = {
  padding: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
};

const messageText = {
  color: "#ededed",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "rgba(242, 202, 80, 0.1)",
  margin: "32px 0",
};

const footer = {
  padding: "32px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#737373",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
};
