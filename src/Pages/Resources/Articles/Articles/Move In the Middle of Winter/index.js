import winter_apartment from "./winter_apartment.jpg";

export default function index() {
  return (
      <div className="paragraph">
        <img
          src={winter_apartment}
          style={{ width: "100%" }}
          alt="winter_apartment"
        />
        <div>
          There is a saying that - if you're looking to change locations soon -
          do it when it's still cold out and save 10-15% on the rental price.
          This is a well-known trick in NYC, but it holds true for smaller
          cities across the country. It's simple deduction: When the demand for
          an item is low, prices will drop. Since most people prefer to move
          when it's warmer out, apartment prices decrease in the middle of the{" "}
          <strong>winter</strong>. Turn your nose up at convention and choose to
          move in the middle of the <strong>winter</strong>. You'll find great
          deals and enjoy the payoff throughout the year with your lower rent
          cost!
        </div>
      </div>
  );
}
