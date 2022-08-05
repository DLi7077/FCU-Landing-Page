import PageLayout from "../../../Components/PageLayout";
import ReactPlayer from "react-player";
import ZelleVideo from "../../../Assets/zelle/Zelle.mp4";
import CollapsibleRow from "../../../Components/CollapsibleRow";
import "./styles.css";
import { Table, TableBody } from "@mui/material";

const classes = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subtitle: {
    display: "flex",
    justifyContent: "center",
    width: "fit-content",
    textAlign: "center",
  },
  partTitle: {
    fontSize: "3rem",
  },
};

export default function Zelle() {
  const content = (
    <div className="content-container">
      <div className="title">Zelle®</div>
      <div className="content-block" style={classes.content}>
        <div className="paragraph" style={{ textAlign: "center" }}>
          <div>
            Introducing Zelle® - a fast, safe and easy way to send money to
            friends, family and other people you trust<sup>1</sup>, regardless
            of where they bank. Whether you're paying rent, gifting money, or
            splitting the cost of a bill, Zelle® has you covered.
          </div>
        </div>
        <div className="point-group">
          <div className="point">
            <div className="part-title">FAST</div>
            Send money directly from your account to theirs — typically in
            minutes<sup>1</sup>.
          </div>
          <div className="point">
            <div className="part-title">SAFE</div>
            Use Zelle® within the app you already trust. No account numbers are
            shared.
          </div>
          <div className="point">
            <div className="part-title">EASY</div>
            Send money using just an email address or U.S. mobile number.
          </div>
        </div>
      </div>
      <div >
        <div className="video-container">
          <ReactPlayer url={ZelleVideo} controls={true} playsinline={true} />
        </div>
      </div>
      <div className="content-block" style={classes.content}>
        <div className="subtitle" style={classes.subtitle}>
          Enroll today and send money to friends and family
        </div>
        <div className="paragraph">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ol>
              <li>Log into the NYU FCU app.</li>
              <li>Select "Send Money with Zelle®"</li>
              <li>Enroll your U.S. mobile number or email address.</li>
              <li>
                You're ready to start sending and receiving money with Zelle®!
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="content-block" style={classes.content}>
        <div className="subtitle" style={classes.subtitle}>
          Zelle® Frequently Asked Questions
        </div>
        <div
          style={{
            marginInline: "5vw",
            display: "flex",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <Table>
            <TableBody>
              <CollapsibleRow
                title={<div className="part-title">What is Zelle®?</div>}
                content={
                  <div className="paragraph">
                    <div>
                      Zelle® is a fast, safe and easy way to send money directly
                      between almost any bank or credit union account in the
                      U.S., typically within minutes<sup>1</sup>. With just an
                      email address or U.S. mobile phone number, you can send
                      money to people you trust, regardless of where they bank
                      <sup>1</sup>.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={<div className="part-title">How do I use Zelle®?</div>}
                content={
                  <div className="paragraph">
                    <div>
                      You can send, request, or receive money with Zelle®. To
                      get started, log into NYU FCU's mobile app and select
                      "Send Money with Zelle®". Following the prompts, enter the
                      information requested, accept the terms and conditions,
                      and you're ready to start sending and receiving with
                      Zelle®.
                    </div>
                    <div>
                      To send money using Zelle®, simply select someone from
                      your mobile device's contacts (or add a trusted
                      recipient's email address or U.S. mobile phone number),
                      add the amount you'd like to send and an optional note,
                      review, then hit "Send." In most cases, the money is
                      available to your recipient in minutes<sup>1</sup>
                    </div>
                    <div>
                      To request money using Zelle®, choose "Request," select
                      the individual from whom you'd like to request money,
                      enter the amount you'd like to request, include an
                      optional note, review and hit "Request"<sup>2</sup>. If
                      the person you are requesting money from is not yet
                      enrolled with Zelle®, you must use their email address to
                      request money. If the person has enrolled their U.S.
                      mobile number, then you can send the request using their
                      mobile phone number.
                    </div>
                    <div>
                      To receive money, just share your enrolled email address
                      or U.S. mobile phone number with a friend and ask them to
                      send you money with Zelle®. If you have already enrolled
                      with Zelle®, you do not need to take any further action.
                      The money will be sent directly into your NYU FCU account,
                      typically within minutes<sup>1</sup>.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={<div className="part-title">How do I get started?</div>}
                content={
                  <div className="paragraph">
                    It's easy — Zelle® is already available within the NYU FCU
                    mobile app! Check our app and follow a few simple steps to
                    enroll with Zelle® today.
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    What if I get an error mesage when I try to enroll an email
                    address or U.S. mobile number?
                  </div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      Your email address or U.S. mobile phone number may already
                      be enrolled with Zelle® at another bank or credit union.
                    </div>
                    <div>
                      If you would like to move your email address or U.S.
                      mobile phone number from the financial institution where
                      you initially enrolled with Zelle®, simply click
                      "Transfer" when prompted during the Zelle® enrollment
                      process and confirm your desired changes.
                    </div>
                    <div>
                      Once you transfer your email address or U.S. mobile phone
                      number, it will be connected to your bank account at the
                      financial institution you selected and you can start
                      sending and receiving money with Zelle® right away.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={<div className="part-title">How does Zelle® work?</div>}
                content={
                  <div className="paragraph">
                    When you enroll with Zelle® through your NYU FCU app, your
                    name, the name of your bank/credit union, and the email
                    address or U.S. mobile number you enrolled is shared with
                    Zelle® (no sensitive account details are shared - those stay
                    with NYU FCU). When someone sends money to your enrolled
                    email address or U.S. mobile phone number, Zelle® looks up
                    the email address or mobile number in its "directory" and
                    notifies NYU FCU of the incoming payment. NYU FCU then
                    directs the payment into your NYU FCU account, all while
                    keeping your sensitive account details private.
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">Is my information secure?</div>
                }
                content={
                  <div className="paragraph">
                    Keeping your money and information safe is a top priority
                    for NYU FCU. When you use Zelle® within our mobile app, your
                    information is protected with the same technology we use to
                    keep your NYU FCU account safe.
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    Who can I send money to with Zelle®?
                  </div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      You can send money to friends, family and others you trust
                      <sup>1</sup> even if they have a different bank or credit
                      union.
                    </div>
                    <div>
                      Since money is sent directly from your NYU FCU account to
                      another person's bank account within minutes<sup>1</sup>,
                      it's important to only send money to people you trust, and
                      always ensure you've used the correct email address or
                      U.S. mobile phone number.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    I'm unsure about using Zelle® to pay someone I don't know.
                    What should I do?
                  </div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      If you don't know the person, or aren't sure you will get
                      what you paid for (for example, items bought from an
                      online bidding or sales site), you should not use Zelle®.
                    </div>
                    <div>
                      These transactions are potentially high risk (just like
                      sending cash to a person you don't know is high risk).
                      Neither NYU FCU nor Zelle® offers a protection program for
                      any authorized payments made with Zelle® - for example, if
                      you do not receive the item you paid for or the item is
                      not as described or as you expected.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    What types of payments can I make with Zelle®?
                  </div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      Zelle® is a great way to send money to friends, family and
                      people you are familiar with such as your personal
                      trainer, babysitter or neighbor<sup>1</sup>. Since money
                      is sent directly from your NYU FCU account to another
                      person's bank account within minutes<sup>1</sup>, Zelle®
                      should only be used to send money to friends, family and
                      others you trust. Neither NYU FCU nor Zelle® offers a
                      protection program for any authorized payments made with
                      Zelle® - for example, if you do not receive the item you
                      paid for or the item is not as described or as you
                      expected.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    Can I pay a small business with Zelle®?
                  </div>
                }
                content={
                  <div className="paragraph">
                    Some small businesses are able to receive payments with
                    Zelle®. Ask your favorite small business if they accept
                    payments with Zelle®. If they do, you can pay them directly
                    from your NYU FCU mobile app using just their email address
                    or U.S. mobile number. Neither NYU FCU nor Zelle® offers a
                    protection program for any authorized payments made with
                    Zelle®, so you should only send money to people (and small
                    businesses) you trust. Also, always ensure you've used the
                    correct email address or U.S. mobile number when sending
                    money.
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    Can I use Zelle® internationally?
                  </div>
                }
                content={
                  <div className="paragraph">
                    In order to use Zelle®, the sender and recipient's bank or
                    credit union accounts must be based in the U.S.
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">Can I cancel a payment?</div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      You can only cancel a payment if the person you sent money
                      to hasn't yet enrolled with Zelle®. To check whether the
                      payment is still pending because the recipient hasn't yet
                      enrolled, you can go to your activity page, choose the
                      payment you want to cancel, and then select "Cancel This
                      Payment." If you do not see this option available, please
                      contact our customer support team at 212-995-3171 for
                      assistance with canceling the pending payment.
                    </div>
                    <div>
                      If the person you sent money to has already enrolled with
                      Zelle®, the money is sent directly to their bank account
                      and cannot be canceled. This is why it's important to only
                      send money to people you trust, and always ensure you've
                      used the correct email address or U.S. mobile number when
                      sending money.
                    </div>
                    <div>
                      If you sent money to the wrong person, please immediately
                      call our customer support team at 212-995-3171 so we can
                      help you.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    What if I want to send money to someone whose bank or credit
                    union doesn't offer Zelle®?
                  </div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      You can find a full list of participating banks and credit
                      unions live with Zelle®{" "}
                      <a
                        href="https://www.zellepay.com/get-started"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                    </div>
                    <div>
                      If your recipient's bank or credit union isn't on the
                      list, don't worry! The list of participating financial
                      institutions is always growing, and your recipient can
                      still use Zelle® by downloading the Zelle® app for Android
                      and iOS.
                    </div>
                    <div>
                      To enroll with the Zelle® app, your recipient will enter
                      their basic contact information, an email address and U.S.
                      mobile number, and a Visa® or Mastercard® debit card with
                      a U.S. based account (does not include U.S. territories).
                      Zelle® does not accept debit cards associated with
                      international deposit accounts or any credit cards.
                    </div>
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    Will the person I send money to be notified?
                  </div>
                }
                content={
                  <div className="paragraph">
                    Yes! They will receive an email or text message notification
                    via the email or U.S. mobile number they used to enroll with
                    Zelle®.
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    Someone sent me money with Zelle®, how do I receive it?
                  </div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      If you have already enrolled with Zelle®, you do not need
                      to take any further action. The money will be sent
                      directly into your NYU FCU account, typically within
                      minutes<sup>1</sup>
                    </div>
                    <div>
                      If you have not yet enrolled with Zelle®, follow these
                      steps:
                    </div>
                    <ol>
                      <li>
                        Click on the link provided in the payment notification
                        you received via email or text message.
                      </li>
                      <li>Select NYU FCU.</li>
                      <li>
                        Follow the instructions provided on the page to enroll
                        and receive your payment. Pay attention to the email
                        address or U.S. mobile phone number where you received
                        the payment notification - you should enroll with Zelle®
                        using that email address or U.S. mobile phone number to
                        ensure you receive your money.
                      </li>
                    </ol>
                  </div>
                }
              />
              <CollapsibleRow
                title={
                  <div className="part-title">
                    How long does it take to receive money with Zelle®?
                  </div>
                }
                content={
                  <div className="paragraph">
                    <div>
                      Money sent with Zelle® is typically available to an
                      enrolled recipient within minutes.
                    </div>
                    <div>
                      If you send money to someone who isn’t enrolled with
                      Zelle®, they will receive a notification prompting them to
                      enroll. After enrollment, the money will be sent directly
                      to your recipient’s account, typically within minutes.
                    </div>
                    <div>
                      If your payment is pending, we recommend confirming that
                      the person you sent money to has enrolled with Zelle® and
                      that you entered the correct email address or U.S. mobile
                      phone number.
                    </div>
                    <div>
                      If you’re waiting to receive money, you should check to
                      see if you’ve received a payment notification via email or
                      text message. If you haven’t received a payment
                      notification, we recommend following up with the sender to
                      confirm they entered the correct email address or U.S.
                      mobile phone number.
                    </div>
                    <div>
                      confirm they entered the correct email address or U.S.
                      mobile phone number. Still having trouble? Please give the
                      NYU FCU customer support team a call toll-free at
                      212-995-3171 or get in touch through our support page.
                    </div>
                  </div>
                }
              />
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="content-block" style={classes.content}>
        <div className="paragraph">
          <blockquote>
            <div>
              <sup>1</sup>U.S. checking or savings account required to use
              Zelle®. Transactions between enrolled users typically occur in
              minutes.
            </div>
            <div>
              <sup>2</sup>In order to send payment requests or split payment
              requests to a U.S. mobile number, the mobile number must already
              enrolled with Zelle®.
            </div>
            <div>
              <sup></sup>Zelle and the Zelle related marks are wholly owned by
              Early Warning Services, LLC and are used herein under license.
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
