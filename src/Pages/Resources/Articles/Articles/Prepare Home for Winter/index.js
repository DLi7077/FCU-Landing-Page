import prep from "./prep.jpg";

export default function index() {
  return (
    <div className="paragraph">
      <img src={prep} style={{ width: "100%" }} alt="prep" />
      <div>
        <strong>Q: </strong>What steps do I need to take to prepare my home for
        the cold weather?
        <br />
        <strong>A: </strong> Keep your home warm and safe this winter by
        following our comprehensive to-do list before the real cold sets in. for
        the cold weather?
        <br />
      </div>

      <div>
        <strong>1. Seal your home </strong>
        <br />
        Give your home a quick run-through, checking for drafts. You can do this
        by holding a lit candle near the following areas:
        <br />
        <ul>
          <li>Windows</li>
          <li>Doors</li>
          <li>Vents and fans</li>
          <li>Plumbing areas</li>
          <li>Air conditioners</li>
          <li>Mail chutes</li>
          <li>Electrical and gas lines</li>
        </ul>
        If the candle flickers, you've got a draft.
        <br />
        Seal up all holes and reinforce existing points of entry with weather
        stripping. You can also caulk windows and doors to make sure they're
        truly sealed against the cold.
      </div>

      <div>
        <strong>2. Clean your gutters </strong>
        <br />
        If your gutters are clogged with sodden leaves, they can freeze up and
        block the drainage, allowing melting ice and snow to slowly seep into
        your roof and cause excessive damage.
      </div>

      <div>
        <strong>3. Invest in a roof rake </strong>
        <br />
        If you live in an area that sees lots of snow each winter, your roof can
        be sitting under several feet of snow for weeks at a time. All of that
        snow can cause your roof to collapse. Invest in a roof rake that will
        help you clear the snow off your roof when it really starts piling up.
      </div>
      <div>
        <strong>4. Reverse your ceiling fans </strong>
        <br />
        Flick the reverse switch on your ceiling fans to make the blades spin in
        a clockwise direction instead of counterclockwise. This way, the fans
        will produce an updraft to push the rising hot air downward.
      </div>
      <div>
        <strong>5. Prune your trees </strong>
        <br />
        Check all trees near your home's façade for low-hanging or loose
        branches. Prune them so they don't end up cracking from heavy snow or
        wind and causing damage to your home.
      </div>
      <div>
        <strong>6. Take inventory of your emergency supplies </strong>
        <br />
        Stock up on water, canned food, batteries, flashlights and storm
        lanterns. You may also want to invest in an external charger for some
        juice when the lights go out.
      </div>
      <div>
        <strong>7. Turn off external faucets </strong>
        <br />
        Unscrew your garden hose from the spigot and drain your sprinkler system
        to prevent any freezing. You may need to call in a professional in order
        to do this properly.
      </div>
      <div>
        <strong> 8. Protect your pipes from freezing</strong>
        <br />
        Prevent burst pipes, and avoid costly repairs, with these simple steps:
        <ul>
          <li>
            Keep your heat on even when you're not home so that your pipes don't
            freeze and burst.
          </li>
          <li>Allow your faucets to drip during severe cold snaps.</li>
          <li>Wrap any exposed piping and hose bibs to prevent freezing.</li>
        </ul>
      </div>
      <div>
        <strong> 9. Check your heating system</strong>
        <br />
        Crank up the heat before the cold blows in to ensure everything is in
        working order. If anything needs repairs, tend to it now while it's
        still warm out.
      </div>
    </div>
  );
}
