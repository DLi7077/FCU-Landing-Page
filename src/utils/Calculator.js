const FREQUENCY = 365;
/**
 * @description Computes the result of multiple deposit calculator given an object of values
 * @param {*} values - Contains the following:
 * @param {number} intial - the initial deposit quantity
 * @param {number} monthly_deposit - monthly deposit quanitiy
 * @param {number} interest_rate - the daily interest rate
 * @param {number} years - the number of years to consider
 * @returns {number} the resulting amount after X years
 */
export function MultipleDepositCalc(values) {
  const { intial_deposit, annual_interest_rate, years } = values;
  const monthly_deposit = values.monthly_deposit ?? 0;

  const totalDeposit =
    intial_deposit + Math.floor(monthly_deposit * (years * 12)); // case user inputs decimal year

  const result = {
    end_amount: 0,
    interest_earned: 0,
  };

  const RATE_DIV_FREQ = annual_interest_rate / FREQUENCY;

  const initalDepositGain =
    intial_deposit * (1 + RATE_DIV_FREQ) ** (FREQUENCY * years);

  const monthlyDepositGain =
    (monthly_deposit * 12 * ((1 + RATE_DIV_FREQ) ** (FREQUENCY * years) - 1)) /
    annual_interest_rate;

  const endAmount = initalDepositGain + monthlyDepositGain;

  result["end_amount"] = endAmount;
  result["interest_earned"] = endAmount - totalDeposit;

  return result;
}

export function SingleDepositCalc(values) {
  return MultipleDepositCalc(values);
}

/**
 * @description Computes the ideal monthly loan payment given values
 * @param {*} values - contains:
 * @param {number} loan_amount
 * @param {number} annual_rate
 * @param {number} loan_duration_in_months
 */
export function LoanPaymentCalc(values) {
  const { loan_amount, annual_rate, loan_duration_in_months } = values;
  const RATE_DIV_DURATION = annual_rate / 12;
  return (
    (loan_amount * RATE_DIV_DURATION ?? 1) /
    (1 - (1 + RATE_DIV_DURATION) ** ((-12 * loan_duration_in_months) / 12))
  );
}

/**
 * @description Calculates Loan Affordability
 * @param {*} values - object that contains:
 * @param {number} desired_payment
 * @param {number} annual_rate - annual interest rate
 * @param {number} months
 * @returns Loan amount
 */
export function LoanAffordabilityCalc(values) {
  const { desired_payment, annual_rate, months } = values;
  return desired_payment * months * (1 - annual_rate / 12) ** months;
}
