/* eslint-disable @typescript-eslint/no-var-requires */
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
/* eslint-enable @typescript-eslint/no-var-requires */

const nodemailerTransportSingleton = () => {
  return nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
};

declare global {
  // eslint-disable-next-line no-var
  var nodemailerTransport:
    | undefined
    | ReturnType<typeof nodemailerTransportSingleton>;
}

export const nodemailerTransport =
  // eslint-disable-next-line no-undef
  globalThis.nodemailerTransport ?? nodemailerTransportSingleton();

if (process.env.NODE_ENV !== "production")
  // eslint-disable-next-line no-undef
  globalThis.nodemailerTransport = nodemailerTransport;

// helper function to send emails

type SendMailParams = {
  subject: string;
  toEmail: string;
  htmlToSend: string;
};

export async function sendMail({
  subject,
  toEmail,
  htmlToSend,
}: SendMailParams) {
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: htmlToSend,
  };

  // check if NODEMAILER_SEND_EMAILS is set to true
  // if not set, by default set it to true
  const sendEmails = process.env.NODEMAILER_SEND_EMAILS ?? "true";
  if (sendEmails !== "true") {
    console.log(
      "NODEMAILER_SEND_EMAILS is not set to true, so not sending email",
    );
    return;
  }

  await new Promise((resolve, reject) => {
    // send mail
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    nodemailerTransport.sendMail(mailOptions, (err: any, response: any) => {
      if (err) {
        console.error("(nodemailer) Error: ", err);
        reject(err);
      } else {
        console.log("(nodemailer) Response: ", response);
        resolve(response);
      }
    });
  });
}

type SendMailFromTemplateParams = {
  subject: string;
  toEmail: string;
  template: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateParams: any;
};

export async function sendMailFromTemplate({
  subject,
  toEmail,
  template,
  templateParams,
}: SendMailFromTemplateParams) {
  if (!toEmail) {
    console.error("toEmail is not set");
    return;
  }

  const templatePath = path.join(process.cwd(), "emails/", template);
  console.debug("path", templatePath);

  const source = await fs.readFileSync(templatePath, "utf8");
  const compiledTemplate = handlebars.compile(source);
  const htmlToSend = compiledTemplate(templateParams);

  await sendMail({ subject, toEmail, htmlToSend });
}
