import PageLayout from "../../../Components/PageLayout";
import CollapsibleRow from "../../../Components/CollapsibleRow";
import { Table, TableBody } from "@mui/material";
import BusinessMembershipPDF from "../../../Assets/pdfs/Business/Business_Membership.pdf";
import NYUButton from "../../../Components/Buttons/NYUButton";
import walk from "../walk.jpg";

const partTitleGenerator = (title) => {
  return (
    <div className="part-title" style={{ textTransform: "none" }}>
      {title}
    </div>
  );
};
export default function index() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="subtitle">Eligibility</div>
        <div className="paragraph">
          To be eligible for a Business account with NYU FCU' all owners of the
          organization must be NYU Affiliated and hold a personal account with
          NYU FCU. A minimal deposit of $50 into a savings account and $10 one
          time membership fee is required. You must provide the following
          documents according to the legal type of the business:
        </div>
        <Table>
          <TableBody>
            <CollapsibleRow
              title={partTitleGenerator("Coporations")}
              content={
                <div className="paragraph">
                  <ul>
                    <li>
                      <strong>Tax Identification Number</strong> (TIN' FEI' or
                      EIN)
                    </li>
                    <li>
                      <strong>Social Security Number</strong> (for each partner
                      and authorized signer)
                    </li>
                    <li>
                      <strong>2 Valid Photo Ids for ALL signers</strong>{" "}
                      (Drivers Licenses' Passport)
                    </li>
                    <li>
                      <strong>Articles of Partnership Agreement</strong>{" "}
                      (Certified Copy)
                    </li>
                    <li>
                      <strong>
                        Trade Name Registration (required for DBA only)
                      </strong>
                    </li>
                    <li>
                      <strong>Other Information (if applicable)</strong>
                    </li>
                    <li>
                      <strong>Occupational Licenses</strong>
                    </li>
                    <li>Meeting Minutes</li>
                    <li>Certification Regarding Beneficial Owners</li>
                  </ul>
                </div>
              }
            />
            <CollapsibleRow
              title={partTitleGenerator("Partnerships")}
              content={
                <div className="paragraph">
                  <ul>
                    <li>
                      <strong>Tax Identification Number</strong> (TIN' FEI' or
                      EIN)
                    </li>
                    <li>
                      <strong>Social Security Number</strong> (for each partner
                      and authorized signer)
                    </li>
                    <li>
                      <strong>2 Valid Photo Ids for ALL signers</strong>{" "}
                      (Drivers Licenses' Passport)
                    </li>
                    <li>
                      <strong>Articles of Partnership Agreement</strong>{" "}
                      (Certified Copy)
                    </li>
                    <li>
                      <strong>
                        Trade Name Registration (required for DBA only)
                      </strong>
                    </li>
                    <li>
                      <strong>Other Information (if applicable)</strong>
                    </li>
                    <li>
                      <strong>Occupational Licenses</strong>
                    </li>
                    <li>Meeting Minutes</li>
                    <li>Certification Regarding Beneficial Owners</li>
                  </ul>
                </div>
              }
            />

            <CollapsibleRow
              title={partTitleGenerator("Sole Proprietorships")}
              content={
                <div className="paragraph">
                  <ul>
                    <li>
                      <strong>Social Security Number</strong> (SSN) for sole
                      proprietor (owner) is used as the primary and the (SSN)
                      for any (co-owner) or Tax Identification Number (EIN) for
                      the business' if applicable
                    </li>
                    <li>
                      <strong>2 Valid Photo Ids for ALL signers</strong>{" "}
                      (Drivers Licenses' Passport)
                    </li>
                    <li>
                      <strong>Articles of Partnership Agreement</strong>{" "}
                      (Certified Copy)
                    </li>
                    <li>
                      <strong>
                        Trade Name Registration (required for DBA only)
                      </strong>
                    </li>
                    <li>
                      <strong>Other Information (if applicable)</strong>
                    </li>
                    <li>
                      <strong>Occupational Licenses</strong>
                    </li>
                    <li>Meeting Minutes</li>
                    <li>Certification Regarding Beneficial Owners</li>
                  </ul>
                </div>
              }
            />
            <CollapsibleRow
              title={partTitleGenerator("Limited Liability Company(LLC)")}
              content={
                <div className="paragraph">
                  <ul>
                    <li>
                      <strong>Tax Identification Number</strong> (TIN' FEI' or
                      EIN)
                    </li>
                    <li>
                      <strong>Social Security Number</strong> (for each partner
                      and authorized signer)
                    </li>
                    <li>
                      <strong>2 Valid Photo Ids for ALL signers</strong>{" "}
                      (Drivers Licenses' Passport)
                    </li>
                    <li>
                      <strong>
                        Articles of Organization or Operating Agreement
                      </strong>{" "}
                      (Certified Copy)
                    </li>
                    <li>
                      <strong>
                        Trade Name Registration (required for DBA only)
                      </strong>
                    </li>
                    <li>
                      <strong>Other Information (if applicable)</strong>
                    </li>
                    <li>
                      <strong>Occupational Licenses</strong>
                    </li>
                    <li>Meeting Minutes</li>
                    <li>Certification Regarding Beneficial Owners</li>
                  </ul>
                </div>
              }
            />
            <CollapsibleRow
              title={partTitleGenerator(
                "Recreation/ Clubs/ Organizations/ etc."
              )}
              content={
                <div className="paragraph">
                  <ul>
                    <li>
                      <strong>Social Security Number or Tax ID#</strong>{" "}
                      (whichever is applicable)
                    </li>
                    <li>
                      <strong>Social Security Number</strong> (for each officer
                      and authorized signer)
                    </li>
                    <li>
                      <strong>2 Valid Photo Ids for ALL Signers</strong>{" "}
                      (Drivers Licenses' Passport)
                    </li>
                    <li>
                      <strong>Board of Directors' Minutes</strong> (or similar
                      documentation authorizing who is allowed to open accounts
                      and sign checks on behalf of the Club or Organization)
                    </li>
                    <li>
                      <strong>Trade Name Registration</strong> (required for DBA
                      only):
                    </li>
                    <li>
                      <strong>Other Information</strong> (if applicable)
                    </li>
                    <li>Occupational License</li>
                  </ul>
                </div>
              }
            />
          </TableBody>
        </Table>
      </div>
      <div className="content-block">
        <div className="subtitle">Personal Information</div>
        <div className="paragraph">
          In addition, the following personal information is required from all
          business owners:
          <ul>
            <li>A valid photo ID</li>
            <li>Proof of eligibility for membership at the NYU FCU</li>
            <li>A personal NYU FCU membership is required</li>
            <li>
              Proof of Address, such as utility bill, pay stub, voter card,
              notarized letter of residence
            </li>
          </ul>
          All owners/ partners/ officers must be present at the credit union to
          open the business account.
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">APPLICATION</div>
        <div className="paragraph">
          <div>
            Complete the following application and email it to{" "}
            <a href="mailto:nyufcu.memberassist@nyu.edu">
              nyufcu.memberassist@nyu.edu
            </a>
          </div>
          <NYUButton
            label="Business Account Application"
            redirect={BusinessMembershipPDF}
          />
        </div>
      </div>
    </div>
  );

  const img = <img src={walk} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Business Accounts</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
