import online_shopping from "./online_shopping.jpg";

export default function index() {
  return (
    <div className="paragraph">
      <img src={online_shopping} style={{ width: "100%" }} alt="destress" />
      <div>
        <strong>Q</strong>: I'm doing most of my holiday shopping online. How do
        I keep from going over my budget?
      </div>
      <div>
        <strong>A</strong>: The internet is designed to help you lose track of
        your dollars. Start by understanding how:
      </div>
      <div
        className="subtitle"
        style={{
          width: "fit-content",
          paddingRight: "1rem",
          fontSize: "1.75rem",
        }}
      >
        Why we spend more online
      </div>
      Here are 10 ways online retailers push us to overspend:
      <ol style={{ gap: "1rem" }}>
        <li>
          <strong>They push products strategically</strong>
          <br /> The products on a website's homepage are not always the
          hottest-selling items. Most people assume these items are mega-popular
          and will quickly drop one or two into their cart. Often, it's just
          surplus inventory the retailer is trying to move out.
        </li>
        <li>
          <strong>They offer free shipping — with a MINIMUM purchase</strong>
          <br />
          When retailers offer to sponsor shipping costs if you spend $50, they
          lure you into spending more. It works: Most people will fill their
          carts with stuff they don't need just to avoid paying for shipping.
        </li>
        <li>
          <strong>They make it super-easy to check out</strong> <br />
          Websites make their checkout process very easy just to keep you
          buying. The quicker you make those purchases, the less time you have
          to reconsider.
        </li>
        <li>
          <strong>They offer spending-based discounts</strong>
          <br /> Websites often offer discounts after you've reached a certain
          spending amount, as they do with free shipping. These conditional
          discounts manipulate you into spending more.
        </li>
        <li>
          <strong>They constantly change prices</strong>
          <br />
          This tactic is designed to draw you back to check the going price or
          buy before the price rises again.
        </li>
        <li>
          <strong>Their ads stalk you</strong>
          <br /> Online retailers target you with ads based on your search
          history.
        </li>
        <li>
          <strong>They have lenient return policies</strong>
          <br /> Online retailers know you're more likely to buy something
          online if you can easily send it back.
        </li>
        <li>
          <strong>They have a virtual checkout aisle</strong>
          <br /> Retailers' virtual checkout aisles, full of add-ons related to
          stuff you're buying, are designed to make you overspend at the last
          minute.
        </li>
        <li>
          <strong>They stay in touch</strong>
          <br />
          When retailers send you emails that scream "Today Only!"" they get
          your attention. And your money, too.
        </li>
      </ol>
      <div
        className="subtitle"
        style={{
          width: "fit-content",
          paddingRight: "1rem",
          fontSize: "1.75rem",
        }}
      >
        Spending less online
      </div>
      <ul>
        <li>
          <strong>Shop with a list</strong>
          <br /> Decide what you need before browsing, and stick to your list.
        </li>
        <li>
          <strong>Set a time limit</strong>
          <br />
          It's easy to lose track of time when online. Give yourself a
          reasonable time limit, and once time's up, snap your laptop shut.
        </li>
        <li>
          <strong>Never pay full price</strong>
          <br />
          Before checking out, do a search for coupons and discounts on sites
          like CouponCabin.com.
        </li>
        <li>
          <strong>Don't fall into the free shipping trap</strong>
          <br />
          Don't buy stuff you don't need just to avoid a shipping fee.
        </li>
        <li>
          <strong>Shop early</strong>
          <br />
          You'll find it easier to stick to your budget.
        </li>
      </ul>
    </div>
  );
}
