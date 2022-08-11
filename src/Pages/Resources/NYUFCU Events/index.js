import PageLayout from "../../../Components/PageLayout";

export default function index() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="subtitle">NYU FCU Events</div>
        <div className="paragraph">No events right now...</div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
