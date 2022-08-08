import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";

export default function RealtyRewards() {
  const content = (
    <div className="content-container">
      <div className="title"></div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph"></div>
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph"></div>
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph"></div>
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph"></div>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
