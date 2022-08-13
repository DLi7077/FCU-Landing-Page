import PageLayout from "../../../Components/PageLayout";
import bird_eye from "../bird_eye.png";

export default function index() {
  const img = <img src={bird_eye} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Privacy Policy</div>
    </div>
  );
  const content = (
    <div className="content-container">
      <div className="title">Privacy Policy</div>
      <div className="content-block">
        <div className="subtitle">NOTICE OF YOUR FINANCIAL PRIVACY RIGHTS</div>
        <div className="paragraph">
          Important Information About the Personal Data NYU Federal Credit Union
          Collects, and How It Is Used.
          <div />
          To assure the continued privacy and confidentiality of your personal
          financial information, NYU Federal Credit Union observes these
          practices and procedures:
          <div className="part-title">INFORMATION WE COLLECT</div>
          We collect non-public information about you from some or all of the
          following sources:
          <ul>
            <li>
              Information we receive from you on applications or other forms
            </li>
            <li>
              Information about your transactions with us, our affiliates, or
              others
            </li>
            <li>Information we receive from a consumer reporting agency</li>
          </ul>
          <div className="part-title">INFORMATION WE DISCLOSE</div>
          We do not disclose any nonpublic personal information about our
          members and former members to affiliates or non-affiliated third
          parties except as permitted by law.
          <div className="part-title">OUR SECURITY MEASURES</div>
          We restrict access to nonpublic information about you to those
          employees who need to know that information to provide products or
          services to you. We maintain physical, electronic and procedural
          safeguards that comply with Federal regulations to guard your
          nonpublic information.
          <div />
          New York University Federal Credit Union members and the public may
          receive copies of this notice of privacy practices by contacting the
          credit union.
          <div />
          Credit Union members and the public may receive copies of this notice
          of privacy practices by contacting the credit union.
          <div />
          This notification meets the notification requirements of the National
          Credit Union Administration regulation on privacy of consumer
          information, Part 716.
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} img_content={imgContent} img={img} />
}
