import subscriptions from "./media-streaming-services-logos.png";

export default function index() {
  return (
    <div className="paragraph">
      <img src={subscriptions} style={{ width: "100%" }} alt="subscriptions" />
      Entertainment can be costly - especially when you're paying for something
      you don't use.
      <div style={{ height: ".5rem" }} />
      Take the time this month to rethink all of your entertainment
      subscriptions. Do you really need cable when you've got Netflix? Are you
      paying for Amazon Prime even though you haven't used it in months? Do you
      subscribe to magazines you never read?
      <div style={{ height: ".5rem" }} />
      Find one entertainment subscription you can cancel this month without
      feeling the loss. You might even find several that fit the bill!
      Unsubscribe and stop wasting money today.
    </div>
  );
}
