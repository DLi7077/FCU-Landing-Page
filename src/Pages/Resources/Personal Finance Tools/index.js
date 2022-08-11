import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";

export default function index() {
  const content = (
    <div className="content-container">
      <div className="title">Investments, Retirement, and Insurance</div>
      <div className="content-block">
        <div className="paragraph">
          NYU FCU has partnered with the UNFCU Advisors™ to provide you with an
          expanded range of financial, insurance, retirement and credit union
          products and services.
          <div />
          UNFCU Advisors™ is a wholly owned subsidiary of the United Nations
          Federal Credit Union. UNFCU Advisors™ is committed to helping you
          realize your short and long-term financial goals and objectives as
          well as assess risk and insurance needs.
          <div />
          Take advantage of these innovative, comprehensive and flexible
          programs and services today!
          <div />
          Because New York University is the sponsoring organization of the New
          York University Federal Credit Union, the NYUFCU's field of membership
          is limited to individuals who are connected to New York University
          (such as students or employees and their immediate families). However,
          New York University and the NYUFCU are not otherwise affiliated and
          the NYUFCU acts independently from New York University.
          <NYUButton
            label="Investments and Retirement"
            redirect="https://www.unfcu.org/investments/"
          />
          <NYUButton
            label="Insurance"
            redirect="https://www.industrialcoverage.com/"
          />
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
