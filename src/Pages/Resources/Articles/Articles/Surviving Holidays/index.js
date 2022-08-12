import NYUButton from "../../../../../Components/Buttons/NYUButton";
import present from "./present.jpg";

export default function index() {
  return (
      <div className="paragraph">
        <img src={present} style={{ width: "100%" }} alt="present" />
        The holiday season is a special time. With Charlie Brown on TV and
        carols on the radio, and an ever-growing list of people to shop for,
        it's easy to get carried away. The pressure to over-shop and overspend
        when you're rushing to buy everything on your list can be overwhelming.
        No worries, though! We've got you covered. Read on for fantastic pre-and
        post-holiday tips to ensure you'll have a jolly December without
        breaking the bank.
        <div
          className="subtitle"
          style={{
            width: "fit-content",
            paddingRight: "1rem",
            fontSize: "1.75rem",
          }}
        >
          6 Pre-Holidays Tips
        </div>
        <div>
          <strong>1. Revise your gift list </strong>
          <br />
          Gift giving is a treasured tradition, but chances are, lots of the
          people you exchange gifts with would be as relieved as you'd be to be
          taken off your list. Narrow down your gift list. Talk to coworkers and
          acquaintances about just exchanging cards this year, or make a deal to
          only exchange homemade or inexpensive gifts.
          <div style={{ height: "0.5rem" }} />
          This way, you can focus on buying special gifts for those closest to
          you instead of generic gifts for everyone you've ever met and their
          cousins, too.
        </div>
        <div>
          <strong>2. Organize a Yankee Swap or Secret Santa </strong>
          <br />
          Still got a list that's a mile long? Try one of these creative
          solutions! A Yankee Swap or a Secret Santa activity not only saves
          money and stress, it adds a bit of intrigue and playfulness to the
          holiday. These swaps are great for family gatherings, office parties
          and neighborhood get-togethers. Everyone involved only needs to bring
          a single gift - and it's always fun.
          <div style={{ height: "0.5rem" }} />
          Set a reasonable price cap on gifts so no one ends up leaving with a
          candy cane while the person next to them hauls off a flat-screen TV.
          You can check out online tips for organizing a fun and affordable
          Yankee Swap or Secret Santa.
        </div>
        <div>
          <strong>3. Bake holiday treats </strong>
          <br />
          Another great way to reduce the financial weight of your gift list is
          to break out the baking supplies and start whipping up your own
          holiday treats instead of buying gifts.
          <div style={{ height: "0.5rem" }} />
          It's hard to know exactly what your friend will like as a gift, but no
          one turns down a tin of homemade holiday cookies! Use your favorite
          traditional recipes, or try something new and different.
        </div>
        <div>
          <strong>4. Make a budget and stick to it </strong>
          <br />
          This tip sounds a bit obvious. After all, we all plan to stick to a
          budget, right? But make this the year it really happens!
          <div style={{ height: "0.5rem" }} />
          Don't set yourself a ballpark budget. Set an absolute limit to how
          much you will spend on the holidays this season. This will encourage
          you to plan your spending rather than grabbing impulse items as you
          move through a store. It will also encourage you to look for great
          deals, which brings us to our next tip.
        </div>
        <div>
          <strong>
            5. Make use of holiday deals….but don't get distracted
          </strong>
          <br />
          It's easy to become hypnotized by deals. Prices drop and we go wild,
          spending more than we originally intended because we don't want to
          miss out on those "crazy, low holiday prices."
          <div style={{ height: "0.5rem" }} />
          Take a deep breath. Make use of these deals wisely by buying items on
          your list at a discounted price. But don't be tantalized by the deals
          to the point that you buy things you don't really need….or even want.
        </div>
        <div>
          <strong>6. Rethink giving </strong>
          <br />
          We know that the holidays are all about giving - but giving doesn't
          need to mean spending money. Instead of running to the mall again,
          think of other ways you can give that will help improve your
          community, make the world a better place, and truly brighten someone's
          holiday.
          <div style={{ height: "0.5rem" }} />
          It's the perfect time of year to volunteer at local soup kitchens,
          homeless shelters and charity organizations. This kind of giving
          doesn't cost a dime, but can be a memorable and significant experience
          for all involved.
          <br />
          <NYUButton
            label="Find Local Volunteer Opportunities"
            redirect="https://www.volunteermatch.org/"
          />
        </div>
        <div
          className="subtitle"
          style={{
            width: "fit-content",
            paddingRight: "1rem",
            marginTop: "1rem",
            fontSize: "1.75rem",
          }}
        >
          2 Post-Holiday Tips
        </div>
        <div>
          <strong>1. Use those gift cards </strong>
          <br />
          Gift cards are a typical holiday gift, but many people forget they
          have them, and they go unused.
          <br />
          Put all of your gift cards in your wallet and spend them creatively.
          Maybe you don't care for coffee on the go, but you can buy a package
          of ground coffee beans at Starbucks and use it at home. Use that
          iTunes gift card to rent a movie instead of taking the family out.
          Whatever it might be, use these gift cards and appreciate them for
          what they are - money in your wallet.
        </div>
        <div>
          <strong>2. Invest in next year's regifting effort </strong>
          <br />
          In addition to gift cards, you'll probably find yourself with a bunch
          of gifts you don't really want. Some of these can be saved and
          re-gifted next year or used as birthday gifts throughout the year -
          scented candles, bottles of wine, bath products, etc. Even if you
          don't actually want it, you can find someone else who does!
        </div>
      </div>
  );
}
