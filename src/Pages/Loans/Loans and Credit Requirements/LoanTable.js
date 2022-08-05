import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
const headerStyle = {
  backgroundColor: "primary.main",
  color: "neutral.contrastText",
  fontSize: "1.5rem",
};
const cellStyle = {
  color: "black",
  fontSize: "1.25rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  borderInline: "1px solid purple",
};
const headers = ["Type of Loan", "Required Documents", "Loan Specific"];
const tCell = (label) => <TableCell sx={cellStyle}>{label}</TableCell>;

export default function LoanTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header, idx) => {
            return (
              <TableCell key={idx} sx={headerStyle}>
                {header}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {tCell("Personal")}
          <TableCell rowSpan={21} sx={{ ...cellStyle, maxWidth: "600px" }}>
            <div style={{ fontSize: "1.5rem" }}>
              Last two paystubs W2 for the past year OR Last 6 months of bank
              statements Last two years of tax returns AND Reference Form
            </div>
          </TableCell>
          {tCell()}
        </TableRow>
        <TableRow>
          {tCell("Vacation/Holiday")}
          {tCell()}
        </TableRow>
        <TableRow>
          {tCell("Bill Consolidation")}
          {tCell("Copies of bills for consolidation")}
        </TableRow>
        <TableRow>
          {tCell("Classic/Gold Credit Card")}
          {tCell("Credit card agreement,Balance transfer form(if applicable)")}
        </TableRow>
        <TableRow>
          {tCell("Secured Credit Card")}
          {tCell(
            "Credit card agreement, Pledge of Shares Agreement- 125% of limit must be pledged in account"
          )}
        </TableRow>
        <TableRow>
          {tCell("Auto Loans")}
          {tCell(
            "Bill of Sale or Purchase agreement prior to funding, (not required for pre- approval), Statement from current lender, if refinance, and Title"
          )}
        </TableRow>
        <TableRow>
          {tCell("Motorcycle")}
          {tCell(
            "Bill of Sale or Purchase agreement prior to funding, (not required for pre-approval), Statement from current lender, if refinance, and Title"
          )}
        </TableRow>
        <TableRow>
          {tCell("Share Secured")}
          {tCell("105% of loan amount must be pledged in account")}
        </TableRow>
        <TableRow>
          {tCell("Credit Builder")}
          {tCell("100% of disbursed amount pledged")}
        </TableRow>
        <TableRow>
          {tCell("Life Happens")}
          {tCell(
            "Must list supervisor's contact information on Reference form"
          )}
        </TableRow>
        <TableRow>
          {tCell("Quick Cash")}
          {tCell("Fee based on Loan Amount")}
        </TableRow>
      </TableBody>
    </Table>
  );
}
