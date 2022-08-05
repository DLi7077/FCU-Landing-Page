import PageLayout from "../../../Components/PageLayout";
import NewCarRates from "./Tables/NewCarRates";
import UsedCarRates from "./Tables/UsedCarRates";
import RefianceNew from "./Tables/RefianceNew";
import RefianceUsed from "./Tables/RefianceUsed";
import MotorcycleLoan from "./Tables/MotorcycleLoan";

const headerStyle = {
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
};

const cellStyle = {
  fontSize: "1.25rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
};
export default function VehicleLoans() {
  const content = (
    <div className="content-container">
      <div className="title">Vehicle Loans</div>
      <div className="content-block">
        <div className="subtitle">VEHICLE LOANS</div>
        <div className="paragraph">
          Whether you're looking to buy a new or used car, or even want to
          refinance your auto loan from another lender, we're here to help. We
          offer auto loans with great rates and flexible terms. You'll finally
          stop dreaming and start driving.
          <div>
            <a href="/join" target="_blank" rel="noreferrer">
              NYUFCU membership
            </a>{" "}
            is required for all loans.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">NEW AND USED AUTO PURCHASES</div>
        <div className="paragraph">
          Set your wheels in motion with an auto loan from New York University
          Federal Credit Union. Borrow up to 6 years on new and used cars with
          crazy low rates for the first 36 months. No prepayment penalties and
          flexible terms with financing of up to 100% of the purchase. Protect
          your purchase with optional Payment Protection, Guaranteed Asset
          Protection and Mechanical Breakdown Protection.
        </div>
        <div className="part-title">
          New Car Loan Rate - Newest Two Care Model Years Released
        </div>
        <NewCarRates headerStyle={headerStyle} cellStyle={cellStyle} />
      </div>
      <div className="content-block">
        <div className="part-title">
          Used Car Loan Rates - Up to 5 Years Old
        </div>
        <UsedCarRates headerStyle={headerStyle} cellStyle={cellStyle} />
        <div className="paragraph">
          <blockquote>
            <div>
              * Rates with automated payments. Rates for vehicle loans are
              subject to change without notice.
            </div>
            <div>
              ** We finance cars only in NY, NJ, FL, MA, MD, VA and PA . Vehicle
              must be registered in NY, NJ, FL, MA, MD, VA and PA. Purchase from
              online vehicle retailer is not permitted. An NYUFCU share account
              is required for auto loan account. Financing up to 100% of value
              available as indicated by NADA.
            </div>
            <div>Add 0.25% to rate if vehicle has more than 75,000 miles</div>
            <div>Add 1.00% to rate if vehicle is older than 4 years</div>
            <div>
              Add 1.25% to rate if vehicle is both over 75,000 miles and 5 years
              through 10 years old.
            </div>
            <div>
              *** Refinancing not available on existing NYU FCU auto loans.
              Available only on last 5 years of car models. For new auto loans,
              in case of refinance must be done within 6 months of initial
              purchase.
            </div>
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">NEW AND USED AUTO REFINANCING</div>
        <div className="paragraph">
          Refinancing your car loan from another lender with New York University
          Federal Credit Union may help you lower your interest rate, decrease
          your monthly payment or pay off your car loan sooner. Borrow up to 6
          years with fixed interest rates. No prepayment penalties and flexible
          terms with financing of up to 100% of the existing loan balance.
          Protect your purchase with optional Payment Protection, Guaranteed
          Asset Protection and Mechanical Breakdown Protection.
        </div>
        <div className="part-title">
          Refinancing New Car Loan Rates - Newest Two Car Model Year Released
        </div>
        <RefianceNew headerStyle={headerStyle} cellStyle={cellStyle} />
      </div>
      <div className="content-block">
        <div className="part-title">
          Refinancing Used Car Loan Rates - Up to 5 years old
        </div>
        <RefianceUsed headerStyle={headerStyle} cellStyle={cellStyle} />
        <blockquote>
          <div>
            * Rates with automated payments. Rates for vehicle loans are subject
            to change without notice.
          </div>
          <div>
            ** We finance cars only in NY, NJ, FL, MA, MD, VA and PA . Vehicle
            must be registered in NY, NJ, FL, MA, MD, VA and PA. Purchase from
            online vehicle retailer is not permitted. An NYUFCU share account is
            required for auto loan account. Financing up to 100% of value
            available as indicated by NADA.
          </div>
          <div> Add 0.25% to rate if vehicle has more than 75,000 miles</div>
          <div>Add 1.00% to rate if vehicle is older than 4 years</div>
          <div>
            Add 1.25% to rate if vehicle is both over 75,000 miles and 5 years
            through 10 years old.
          </div>
          <div>
            *** Refinancing not available on existing NYU FCU auto loans.
            Available only on last 5 years of car models. For new auto loans, in
            case of refinance must be done within 6 months of initial purchase.
          </div>
        </blockquote>
      </div>
      <div className="content-block" id="motorcycle">
        <div className="subtitle">Motorcycle Loan</div>
        <div className="paragraph">
          Feeling the wind is just a loan away. Borrow up to 5 years with fixed
          interest rates. No prepayment penalties and flexible terms with
          financing of up to 80% of the existing loan balance.
        </div>
        <div className="part-title">
          Motorcycle Loan Rates - Up to 4 years old
        </div>
        <MotorcycleLoan headerStyle={headerStyle} cellStyle={cellStyle} />
        <blockquote>
          <div>
            * All rates are annual percentage rates and are accurate as of date
            of publication. All loans subject to credit approval. Rates and
            terms are subject to change without notice. Other conditions and
            terms may apply; ask for details. Contact Member Services
            Representative at 212-995-3171 and ask for details.
          </div>
          <div>
            * Conditions Apply. Not a member yet? Membership with a NYUFCU share
            account is required for all loans. Check your eligibility and apply
            to become a member today!
          </div>
        </blockquote>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
