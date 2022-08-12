import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import { Table, TableBody } from "@mui/material";
import CollapsibleRow from "../../../Components/CollapsibleRow";
import "../../../Pages/layout.css";
import NYUButton from "../../../Components/Buttons/NYUButton";

/**
 * @description FAQ page, found in /faq
 * @returns the faq page contents
 */
export default function FAQ() {
  const Online_Banking = (
    <CollapsibleRow
      title="How can I sign up for online banking?"
      content={
        <div style={{ fontSize: "1.25rem" }}>
          <ol className="list">
            <li>Click on "Online Banking"</li>
            <li>Click on "Enroll"</li>
            <li>Enter Your Member Number</li>
            <li>
              Enter your PIN (last four digits of SSN or "N" number for
              international students)
            </li>
            <li>Create a new Login ID</li>
            <li>
              Create a password (must be 8 characters long and contain at least
              2 numbers and 2 letters.)
            </li>
          </ol>
        </div>
      }
    />
  );
  const E_Statements = (
    <CollapsibleRow
      title="How can I sign up for online banking?"
      content={
        <div style={{ fontSize: "1.25rem" }}>
          <ol className="list">
            <li>Login to our online banking</li>
            <li>Click on "Self Service"</li>
            <li>Click on "eStatement"</li>
            <li>
              A window will pop-up with terms and disclosures. Read through
              these and click "Accept". If this window does not pop-up, turn
              off/disable your pop-up blocker and try again.
            </li>
          </ol>
        </div>
      }
    />
  );
  const Account_Number = (
    <CollapsibleRow
      title="What is my Account Number?"
      content={
        <div className="paragraph">
          <div>
            Your savings account number is a 7 digit number that is also called
            your Member Number. It can be found on top of your statements.
          </div>
          <div>
            Your checking account number is a 14 digit number. It has a preface
            of 140400, followed by your member number and a draft digit. This
            number can be found on the bottom of your check book, or you can
            call us to obtain this number.
          </div>
        </div>
      }
    />
  );
  const Change_Address = (
    <CollapsibleRow
      title="How can I change my address?"
      content={
        <div className="paragraph">
          <div>
            You can change your address in person at the branch, online by
            sending us a secure message through your online banking, or by
            sending in a signed and dated change of address form that can be{" "}
            <Link to="/forms">downloaded here.</Link>
          </div>
        </div>
      }
    />
  );
  const Paycheck = (
    <CollapsibleRow
      title="How can I have part of my paycheck go to my Credit Union Account?"
      content={
        <div className="paragraph">
          <ul className="list">
            <li>
              If you work for NYU and are paid through Washington Square, please
              complete the payroll deduction or direct deposit using PeopleSync.
            </li>
            <li>
              If you work for the medical center, payroll deductions are changed
              through "my e-connect"
            </li>
            <li>
              If you are not an NYU employee, you will just need to provide your
              employer with your routing number (226082129) and your account
              number.
            </li>
          </ul>
        </div>
      }
    />
  );
  const How_To_Join = (
    <CollapsibleRow
      title="How can I join the Credit Union?"
      content={
        <div className="paragraph">
          <Link to="/join">Click here!</Link>
        </div>
      }
    />
  );
  const Apply_For_Loan = (
    <CollapsibleRow
      title="How can I apply for loan?"
      content={
        <div className="paragraph">
          You need to become a member before you can apply for a loan. Once you
          are a member of the credit union, you can apply for a loan through
          your online banking by clicking on "Self Service" and then "Apply for
          a Loan". We then require some further documentation. The list of
          documentation can be found here.
        </div>
      }
    />
  );
  const Routing_Number = (
    <CollapsibleRow
      title="What is my Routing Number?"
      content={<div className="paragraph">226082129</div>}
    />
  );
  const Available_Balance = (
    <CollapsibleRow
      title="Why is my Available Balance $0, when there is $50 in my account?"
      content={
        <div className="paragraph">
          The minimum balance requirement for all members is $50. This $50 is
          frozen in the account and only accessible if you choose to close the
          account.
        </div>
      }
    />
  );
  const Deposits = (
    <CollapsibleRow
      title="How can I make deposits?"
      content={
        <div className="paragraph">
          <div className="subtitle" style={{ fontSize: "1.25rem" }}>
            Checks:
          </div>
          <ul className="list">
            <li>In person at the branch</li>
            <li>
              In the mail. Make sure the check is endorsed on the back and that
              your name and account you wish the check to be deposited in is
              clearly stated
            </li>
          </ul>
          <div className="subtitle" style={{ fontSize: "1.25rem" }}>
            You can deposit cash the following ways:
          </div>
          <ul className="list">
            <li>In person at the branch</li>
            <li>
              At one of the deposit taking ATMs. To find out the closest one to
              you, <Link to="/atm-locations">click here!</Link>
            </li>
          </ul>
          You can wire money to your account. Be sure to give the person sending
          the money your routing number, account number, account name and the
          address of the NYU FCU.
        </div>
      }
    />
  );
  const Withdrawal = (
    <CollapsibleRow
      title="How can I withdraw?"
      content={
        <div className="paragraph">
          <div className="subtitle">You can do a withdrawal several ways</div>
          <ul className="list">
            <li>At an ATM using your NYU FCU ATM or Debit Card</li>
            <li>By check using the Audio Teller feature</li>
            <li>In the branch</li>
          </ul>
        </div>
      }
    />
  );
  const Location = (
    <CollapsibleRow
      title="Where are we located?"
      content={
        <div className="paragraph">
          726 Broadway, Suite 110, New York NY 10003. We are on the ground floor
          and located between Waverly Place and Washington Place.
        </div>
      }
    />
  );
  const Become_A_Member = (
    <CollapsibleRow
      title="Who can become a member of the NYU Federal Credit Union?"
      content={
        <div className="paragraph">
          <NYUButton label="Read more here" redirect="/join" local={true} />
        </div>
      }
    />
  );
  const sections = [
    Online_Banking,
    E_Statements,
    Account_Number,
    Change_Address,
    Paycheck,
    How_To_Join,
    Apply_For_Loan,
    Routing_Number,
    Available_Balance,
    Deposits,
    Withdrawal,
    Location,
    Become_A_Member,
  ];

  const content = (
    <div className="content-container">
      <div className="title">FAQS</div>
      <div className="content-block">
        <Table>
          <TableBody>
            {sections.map((section, idx) => {
              return section;
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
