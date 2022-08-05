import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";
import AnnualContributionLimit from "./Tables/AnnualContributionLimit";
import IraShareAccount from "./Tables/IraShareAccount";
import Individual_Retirement_Custodial_Account_Agreement from "../../../Assets/pdfs/Tradtional IRA/Individual_Retirement_Custodial_Account_Agreement.pdf";
import Truth_In_Savings_Policy from "../../../Assets/pdfs/Tradtional IRA/Truth_In_Savings_Policy.pdf";
import IraShareCertificate from "./Tables/IraShareCertificate";
import { Table, TableBody } from "@mui/material";
import CollapsibleRow from "../../../Components/CollapsibleRow";

const headerStyle = {
  backgroundColor: "#91009e",
  color: "white",
  fontSize: "1.25rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
};

const cellStyle = {
  fontSize: "1.25rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
};

export default function TraditionalIRA() {
  const content = (
    <div className="content-container">
      <div className="title">
        Traditional IRA
        <NYUButton
          label="Contact Us to Setup your account"
          redirect="/contact-us"
          local={true}
        />
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph">
          <div>
            Traditional IRA accounts are special accounts that allow your
            earnings to grow tax-deferred.
          </div>
          <div>
            You are eligible for penalty-free withdrawals from your Traditional
            IRA once you are age 59½ or older. Once you reach age 70½ you must
            take a required minimum distribution (RMD) every year.
          </div>
          <div>
            Traditional IRA accounts grow tax-deferred. Your contributions to a
            Traditional IRA are tax deductible based on your income. Your
            earnings also grow tax-deferred, meaning you only pay tax when you
            make a withdrawal. Thus, Traditional IRA accounts may be the best
            option if you need to reduce your current tax liability and think
            you'll be in a lower tax bracket when you eventually withdraw money
            from the account.
          </div>
          <div>
            Federally insured by NCUA up to $250,000 on all IRA products. We
            allow up to $250,000 in combined share/certificate deposits per
            member.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Annual Contribution Limit</div>
        <div className="paragraph">
          <AnnualContributionLimit
            headerStyle={headerStyle}
            cellStyle={cellStyle}
          />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">IRA Share Account</div>
        <div className="paragraph">
          <IraShareAccount headerStyle={headerStyle} cellStyle={cellStyle} />
          <blockquote>
            *Dividends on IRA share accounts are compounded and credited on a
            quarterly basis. The day of deposit/day of withdrawal (actual daily
            balance) method is used to calculate the dividends. This credit
            union will pay dividends on the full balance in the account whether
            deposits are made by cash or check. If you close your IRA account
            before your accrued dividends are credited, no dividends will be
            paid for that period. On all accounts dividends are paid from
            current income and available earnings at the end of a dividend
            period. Dividends rates and annual percentage yields may change from
            time to time on all credit union accounts. IRA accounts terms are
            controlled by the{" "}
            <a href={Truth_In_Savings_Policy} target="_blank" rel="noreferrer">
              Truth in Savings
            </a>{" "}
            and the{" "}
            <a
              href={Individual_Retirement_Custodial_Account_Agreement}
              target="_blank"
              rel="noreferrer"
            >
              Individual Retirement Custodial Account Agreement.
            </a>
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">IRA Share Account</div>
        <div className="paragraph">
          <IraShareCertificate
            headerStyle={headerStyle}
            cellStyle={cellStyle}
          />
          <blockquote>
            If a certificate is withdrawn or transferred to another institution
            before the maturity date, there will be a 90-180 day interest
            penalty. The principle and accrued interest on the term share
            accounts will renew unless otherwise requested. *The day of
            deposit/day of withdrawal (actual daily balance) method is used to
            calculate the dividends. This credit union will pay dividends on the
            full balance in the account whether deposits are made by cash or
            check. If you close your IRA account before your accrued dividends
            are credited, no dividends will be paid for that period. Dividends
            are credited at certificate term. Rate may change after account is
            opened and is subject to change at renewal term in case of auto
            renewed certificate. On all accounts dividends are paid from current
            income and available earnings at the end of a dividend period.
            Dividends rates and annual percentage yields may change from time to
            time on all credit union accounts. IRA accounts terms controlled by
            the{" "}
            <a href={Truth_In_Savings_Policy} target="_blank" rel="noreferrer">
              Truth in Savings
            </a>{" "}
            and the{" "}
            <a
              href={Individual_Retirement_Custodial_Account_Agreement}
              target="_blank"
              rel="noreferrer"
            >
              Individual Retirement Custodial Account Agreement.
            </a>
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">FAQ</div>
        <Table>
          <TableBody>
            <CollapsibleRow
              title={
                <div className="bold">How can I establish an IRA Account?</div>
              }
              content={
                <div className="paragraph">
                  To establish an account, send a message through online
                  banking, stop by the branch or give us a call and we will
                  provide you with the necessary IRA account paperwork. You must
                  be a NYU FCU member to set up the account.
                  <NYUButton
                    label="Learn more about joining"
                    redirect="/join"
                    local={true}
                  />
                </div>
              }
            />
            <CollapsibleRow
              title={
                <div className="part-title">
                  Is there a penalty for withdrawing from my Traditional IRA
                  before I retire?
                </div>
              }
              content={
                <div className="paragraph">
                  The purpose of an IRA is to save for retirement, so this
                  tax-advantaged savings vehicle is specifically designed to
                  discourage investors from withdrawing funds before turning age
                  59½. If you do so, the IRS imposes a 10 percent penalty on top
                  of the income taxes you pay on the withdrawal. There are some
                  exceptions that allow early withdrawal without penalty, so
                  please speak with a tax professional for more details.
                </div>
              }
            />
            <CollapsibleRow
              title={
                <div className="part-title">
                  I make too much money to qualify for an IRA tax deduction. Can
                  I contribute to my traditonal IRA?
                </div>
              }
              content={
                <div className="paragraph">
                  Yes. There are no income limits to make contributions to a
                  traditional IRA. Your ability to make deductions may be
                  affected by filing status and your participation in an
                  employer retirement plan.
                </div>
              }
            />
            <CollapsibleRow
              title={
                <div className="part-title">
                  When am I required to begin withdrawing money from my
                  traditional IRA?
                </div>
              }
              content={
                <div className="paragraph">
                  You must begin to annually withdraw a required minimum
                  distribution (RMD) from your IRA once you turn 70½ years of
                  age. RMD guidelines, set by the IRS, ensure that investors
                  don't use an IRA as a permanent shelter from income taxes.
                </div>
              }
            />
            <CollapsibleRow
              title={
                <div className="part-title">
                  Can I name a beneficiary for my IRA?
                </div>
              }
              content={
                <div className="paragraph">
                  Yes. There are specific rules and forms to ensure that your
                  IRA funds are dispersed to your intended beneficiary, in case
                  of death. You can use the Individual Retirement Account
                  Beneficiary Designation/Change form to select your
                  beneficiary.
                </div>
              }
            />
            <CollapsibleRow
              title={
                <div className="part-title">
                  Is there a limit on the number of IRA Rollovers that can be
                  done?
                </div>
              }
              content={
                <div className="paragraph">
                  Yes. Effective January 1, 2015, the IRS imposed the new IRA
                  Rollover rule which stipulates that an IRA owner may complete
                  only one IRA-to-IRA rollover per 365 days, regardless of how
                  many IRAs you own, without differentiating between
                  Traditional, Roth and SEP IRAs. This change of only one
                  rollover per year will only affect rollovers, and will not
                  have any impact on trustee-to-trustee transfers. The
                  once-per-365-day rule does not apply to the direct rollover of
                  401(k) funds to a Traditional IRA.
                </div>
              }
            />
          </TableBody>
        </Table>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
