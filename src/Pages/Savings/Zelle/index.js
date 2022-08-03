import PageLayout from "../../../Components/PageLayout";

export default function Zelle() {
  const content = (
    <div className="content-container">
      <div className="title"></div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph"></div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
