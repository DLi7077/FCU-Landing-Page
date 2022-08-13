import PageLayout from "../../../Components/PageLayout";
import Direct_Deposit_Authorization from "../../../Assets/pdfs/Other Services/Direct_Deposit_Authorization.pdf";
import Payment_Elections from "../../../Assets/pdfs/Other Services/Payment_Elections.pdf";
import Deposit_Change_Notification from "../../../Assets/pdfs/Other Services/Deposit_Change_Notification.pdf";
import Courtesy_Opt_Form from "../../../Assets/pdfs/Other Services/Courtesy_Opt_Form.pdf";
import NYUButton from "../../../Components/Buttons/NYUButton";
import CollapsibleRow from "../../../Components/CollapsibleRow";
import { Table, TableBody } from "@mui/material";
import cherry_blossoms from "../cherry_blossoms.jpg";

export default function OtherServices() {
  const Direct_Deposit = (
    <div className="content-block" style={{ paddingLeft: "1rem" }}>
      <div className="paragraph">
        <div className="part-title">
          NYU Washington Direct Deposit/ Payroll Deduction
          <NYUButton label="Instruction Guide" redirect={Payment_Elections} />
        </div>
        <ol className="list">
          <li>Please log into your NYU Home account</li>
          <li>Click the Work tab</li>
          <li>Click on PeopleSync</li>
          <li>
            Select manage your payroll elections and input your account number
            and routing number as well as the desired amount for the deposit
            into your NYU FCU accounts
          </li>
        </ol>
        <div>
          For stipend or expense reimbursement direct deposit, please complete
          this form
          <NYUButton
            label="Direct Deposit"
            redirect={Direct_Deposit_Authorization}
          />
        </div>
        <div>
          For assistance or account number verification, please call
          212-995-3171.
        </div>
      </div>
      <div className="paragraph">
        <div className="part-title">NYU Medical Center Payroll Deduction</div>
        <ol className="list">
          <li>Please log in to your Inside Health Account.</li>
          <li>Click on the Menu tab</li>
          <li>Click Payroll & Compensation</li>
          <li>
            Click on Direct Deposit and input your account number and routing
            number as well as the desired amount for the deposit into your NYU
            FCU accounts
          </li>
        </ol>
      </div>
      <div className="paragraph">
        <div className="part-title">External Direct Deposit</div>
        Please complete the following form found and provide it to the payroll
        office in your place of employment.
        <NYUButton
          label="External Direct Deposit"
          redirect={Deposit_Change_Notification}
        />
      </div>
    </div>
  );
  const Debit_Cards = (
    <div className="content-block" style={{ paddingLeft: "1rem" }}>
      <div className="paragraph">
        <div>
          Our system monitors every transaction done on your card. If anything
          out of the ordinary occurs, or if the transactions match established
          fraud patterns that have been reported to MasterCard, our fraud
          division will try to contact you. We want to make sure every
          transaction on your account is legitimate, and stop any potential
          fraud immediately. In order to keep your account safe, we have a
          response center open 24 hours a day, 7 days a week. Our fraud
          monitoring service may contact you to verify suspicious transactions.
        </div>
        <div className="bold">
          Please be advised that our representatives will never ask you for your
          PIN number, or your full card number.
        </div>
      </div>
      <div className="paragraph">
        <div className="part-title">Blocked Credit Card Activity</div>
        <div>
          Due to regulatory requirements and incidents of fraudulent activity,
          the credit union blocks certain debit card activity based on risk.
          From time to time, the list of blocked activity by country is updated
          based on current fraud trends and/or government sanctions. We
          currently have a block on all international transactions without prior
          notification.
        </div>
      </div>
    </div>
  );
  const Overdraft_Privilege = (
    <div className="content-block" style={{ paddingLeft: "1rem" }}>
      <div className="paragraph">
        <div className="part-title">Overdraft Protection</div>
        <div>
          Sometimes miscalculations happen. An overdraft occurs when you do not
          have enough money in your account to cover a transaction that has come
          into your share draft account for payment. We can cover standard
          overdrafts by linking to a savings account or utilizing courtesy pay.
        </div>

        <div>
          <div className="part-title">
            What are standard overdraft practices that come with my account?
          </div>
          <ul className="unordered-list">
            <li>
              Overdraft Privilege (Courtesy Pay): offered with checking accounts
              (except Restart Checking) at no cost to you unless you use it.
            </li>
            <li>
              Overdraft Protection Transfer: Transfers from Savings or Money
              Market any available funds ($5 per transfer fee) (needs to be
              requested on your account)
            </li>
          </ul>
        </div>
        <div>
          <div className="part-title">
            We do authorize and pay overdrafts for the following types of
            transactions:
          </div>
          <ul className="unordered-list">
            <li>
              Checks and other transactions made using your checking account
              number
            </li>
            <li>Automatic bill payments</li>
          </ul>
        </div>
        <div>
          <div className="part-title">
            We do NOT authorize and pay overdrafts for the following types of
            transactions unless you ask us to:
          </div>
          <ul className="unordered-list">
            <li>ATM transactions</li>
            <li>Everyday debit card transactions</li>
          </ul>
        </div>
        <div>
          <div className="part-title">
            What fees will I be charged if New York University Federal Credit
            Union pays my overdraft?
          </div>
          <ul className="unordered-list">
            <li>
              We will charge you a fee of $25.00 each time we pay an overdraft.
            </li>
            <li>
              There is no limit on the total fees we can charge you for
              overdrawing your account.
            </li>
          </ul>
        </div>
        <div>
          <div className="part-title">
            How Overdraft Privilege (Courtesy Pay) Helps You:
          </div>
          <ul className="unordered-list">
            <li>
              <strong>Convenience: </strong> When you are short on funds,
              Courtesy Pay covers your transaction on the spot.
            </li>
            <li>
              <strong>Peace of Mind: </strong>Courtesy Pay can prove vital in
              urgent circumstances
            </li>
            <li>
              <strong>Privacy: </strong> Courtesy Pay safeguards you from the
              potential embarrassment of bouncing a check with a merchant or
              having your debit card declined when taking a friend to dinner.
              Neither the merchant nor other patrons will be aware of the status
              of your account.
            </li>
            <li>
              Courtesy Pay may cover items that exceed the balance of your
              account up to $300 (including fees).
            </li>
            <li>
              If you have overdraft protection on your checking from your
              savings or money market accounts, all available funds will be
              transferred first before courtesy pay.
            </li>
            <li>
              There is no fee to have Courtesy Pay. You are only charged a fee
              if you overdraw your account and Courtesy Pay is used. Each time
              Courtesy Pay is used, a fee of $25 per transaction is assessed.
            </li>
          </ul>
        </div>
        <div className="part-title">
          What if I want New York University Federal Credit Union to authorize
          and pay overdrafts on my ATM and everyday debit card transactions?
        </div>
        <div>
          If you want us to authorize and pay overdrafts on ATM and everyday
          debit card transactions, call 212-995-3392, complete the form here.
          You are required to opt in to receive this coverage – you may do so by
          completing a paper form and emailing, mailing, faxing at 212-995-4582
          or bringing it into a branch. If you have previously completed an
          overdraft protection on debit card form, you will be automatically
          opted in or out based on this form.
        </div>
        <div className="part-title">Opt Out</div>
        <div>
          Every checking account (except restart) comes with Overdraft Privilege
          (Courtesy Pay) unless you opt out. If you wish to opt out from
          courtesy pay service, you may do so by completing the following
          opt-out form. Then, email, mail, fax at 212-995-4582, bringing it into
          a branch, or send a secure message through online banking with your
          request. If you wish to opt in/out of Overdraft Protection Transfers,
          please send a message through online banking.
          <NYUButton label="Opt-Out Form" redirect={Courtesy_Opt_Form} />
        </div>

        <div className="part-title">
          Requirements for Overdraft Privilege (Courtesy Pay):
        </div>
        <div>
          Whether or not a transaction is covered by Overdraft Privilege is
          discretionary and NYU FCU reserves the right not to pay. The following
          is a list of account characteristics that NYU Credit Union requires in
          order to pay an item under this privilege:
        </div>
        <ul className="unordered-list">
          <li>Your account is in good standing</li>
          <li>
            You are making regular payments via direct deposits or monthly
            deposits
          </li>
          <li>You have not had excessive overdrafts or overdrawn accounts</li>
          <li>Your account has been open for at least 30 days</li>
          <li>You do not have delinquent loan with NYUFCU</li>
        </ul>
      </div>
    </div>
  );
  const Ex_In_Transfers = (
    <div className="content-block" style={{ paddingLeft: "1rem" }}>
      <div className="paragraph">
        <div className="part-title">Domestic Wire Transfers</div>
        <div>
          To send a domestic wire transfer, please complete the following form:
          <NYUButton
            label="Domestic Wire Transfer"
            redirect="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDcUXbb22gi7IHrzdVJSZpD-2tlGdS41VwzVysHlqIuaNAPQxjWfJh6ERgPnbyZilk%2A"
          />
          If you are unable to come into the branch, additional verification
          will be required.
        </div>
      </div>
      <div className="paragraph">
        <div className="part-title">International Remittance</div>
        <div>
          Sending an international payment is possible to many countries around
          the world for a flat fee of $35 or $10 to Mexico. Contact Member
          Services today to verify whether the country you wish to send funds to
          is available. To send an international wire transfer- please complete
          the following form:
          <NYUButton
            label="International Wire Transfer"
            redirect="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDhRdn5pMA58M2bGA50JhD8NY94u2dHciaw_grcgcvjYze6jxgClOmKLLz4qO-eblo%2A"
          />
        </div>
      </div>
      <div className="paragraph">
        <div className="part-title">Cross Member Transfer</div>
        <div>
          If you wish to transfer funds from your NYU FCU membership to a
          different member, please send a message through online banking from
          the account initializing the transfer.
        </div>
        <div>
          If you have a joint account and you wish to view on your personal
          online banking, please contact Member Services.
        </div>

        <div>
          *Additional information may be required, depending on the country to
          which you're sending funds. NYU FCU won't send wire transfers to Cuba,
          Iran, Libya, North Korea, Sudan, Syria, Yemen, Venezuela or the
          Crimean Region of Ukraine.
        </div>
        <div>
          USA Patriot Act—Important information about opening a new account:
          Federal law requires that we obtain, verify and record information
          that identifies each person who opens an account. Within applications,
          we ask for your name, address, date of birth and other information
          that will allow us to identify you. We may also ask to see your
          driver's license or other identifying documents. Approval of your
          application may be delayed pending further verification of your
          identity.
        </div>
      </div>
    </div>
  );
  const Transfer_Info = (
    <div className="content-block" style={{ paddingLeft: "1rem" }}>
      <div className="paragraph">
        If you are receiving an ACH transfer or a wire transfer at NYU FCU,
        please make sure to supply the sender with the following:
      </div>
      <div className="paragraph">
        <div className="part-title">WIRE INFORMATION:</div>
        <div>
          <div>
            <strong>Routing number:</strong> 226082129
          </div>
          <div>
            <strong>Receiving Financial Institution:</strong> NYU Federal Credit
            Union
          </div>
          <div>
            <strong>Address of Financial Institution:</strong> 726 Broadway,
            Suite 110, New York, NY 10003
          </div>
          <div>
            <strong>Final Credit to: </strong>Your name and your NYU FCU account
            number
          </div>
        </div>
        <div>
          Please note there is a $10 charge for incoming international wire
          transfers. The NYU Federal Credit Union does not have a SWIFT code,
          international financial institutions must transfer funds to their US
          correspondent bank, who would then wire the funds with the above
          information.
        </div>
      </div>
      <div className="paragraph">
        <div className="part-title">
          <div>Link your NYU FCU to an external bank account</div>
          <div>ROUTING NUMBER: 226082129</div>
        </div>
        <div>
          <strong>Account Number: </strong>Your 7 digit savings or 14 digit
          checking account number
        </div>
        <div>
          To link a NYU FCU account to an external account, please enter the
          information of the Add External Account option of your other financial
          institution. In many cases, they will send a small debit and credit to
          the account (usually under $1). You will need to log in to your NYU
          FCU online banking or call our member services team at 212-995-3171 to
          verify the amounts and then provide those amounts back to the other
          financial institution to establish the link.
        </div>
        <div>
          Please note the savings account is a non-transaction account, only
          electronic credits are allowed on this account.
        </div>
      </div>
    </div>
  );
  const Currency_Order = (
    <div className="content-block" style={{ paddingLeft: "1rem" }}>
      <div className="paragraph">
        <div>
          Traveling abroad? Exchange Currency for 100+ Countries at the NYU FCU
          in advance of your travels.
        </div>
        <div>
          Currency orders placed prior to 3 PM Eastern, are delivered Next
          Business Day (Monday-Friday). Minor and Exotic Currencies may take an
          additional 1-2 days for delivery, depending on availability.{" "}
        </div>
        <div>
          Major Currencies: Canadian Dollar, Chinese Yuan, English Pounds,
          Euros, Japanese Yen, and Swiss Franc. All others are considered
          minor/exotic.
        </div>
      </div>
      <div className="paragraph">
        <div className="part-title">Currency Price Protection</div>
        <div>
          Certain currencies may be eligible for Currency Price Protection. You
          may purchase any amount of the currency and lock-in today's rate for
          only $10, and return up to the "Protected Amount" at today's rate. The
          "Protected Amount" is the lesser of the following: the amount you
          purchase today or a set figure of funds of the currency which will be
          disclosed at the time of purchase. If you return more of the currency
          than the "Protected Amount", we will gladly exchange the extra at
          prevailing sell back rates.
        </div>
        <blockquote>
          Shipping charges apply for orders and returns of currency.
        </blockquote>
      </div>
    </div>
  );
  const Check_Order = (
    <div className="content-block" style={{ paddingLeft: "1rem" }}>
      <div className="paragraph">
        <div>
          Members with checking account can request checks. Please send a
          message through online banking with the information you would like to
          appear on the checks.
        </div>
        <div>
          Your name must appear on checks, you can also request- phone number,
          email address and/or address.
        </div>
        <div>
          Please visit the Service Charge Schedule for applicable fees. If you
          would like to request specialty checks, please contact member
          services, additional fees may apply.
        </div>
      </div>
    </div>
  );

  const rowHeader = {
    fontSize: "1.75rem",
    fontWeight: 600,
    color: "#91009e",
    border: 0,
    textTransform: "uppercase",
  };

  const content = (
    <div className="content-container">
      <Table>
        <TableBody>
          <CollapsibleRow
            title={
              <div style={rowHeader}>Direct Deposit & Payroll Deduction</div>
            }
            content={Direct_Deposit}
          />
          <CollapsibleRow
            title={<div style={rowHeader}>Debit Cards</div>}
            content={Debit_Cards}
          />
          <CollapsibleRow
            title={
              <div style={rowHeader}>
                Overdraft Privilege (Courtsey Pay) & Opt-In for Overdrafts on
                Debit Card
              </div>
            }
            content={Overdraft_Privilege}
          />
          <CollapsibleRow
            title={<div style={rowHeader}>External and Internal Transfers</div>}
            content={Ex_In_Transfers}
          />
          <CollapsibleRow
            title={<div style={rowHeader}>Incoming Transfers Information</div>}
            content={Transfer_Info}
          />
          <CollapsibleRow
            title={<div style={rowHeader}>Currency Order</div>}
            content={Currency_Order}
          />
          <CollapsibleRow
            title={<div style={rowHeader}>Check Order</div>}
            content={Check_Order}
          />
        </TableBody>
      </Table>
    </div>
  );

  const img = <img src={cherry_blossoms} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Other Services</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
