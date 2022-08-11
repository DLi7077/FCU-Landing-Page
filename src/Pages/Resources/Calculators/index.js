import PageLayout from "../../../Components/PageLayout";

export default function index() {
  const content = (
    <div className="content-container">
      <div className="title"></div>
      <div className="content-block">
        <div className="paragraph"></div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
