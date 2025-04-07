const InstrumentsTable = () => {
  interface SecuritySymbol {
    symbol: string;
    security: string;
  }

  const securitySymbols: SecuritySymbol[] = [
    { symbol: "ES", security: "E-mini S&P 500" },
    { symbol: "NQ", security: "E-mini NASDAQ-100" },
    { symbol: "YM", security: "E-mini Dow" },
    { symbol: "RTY", security: "E-mini Russell 2000" },
    { symbol: "GC", security: "Gold Futures" },
    { symbol: "SI", security: "Silver Futures" },
    { symbol: "CL", security: "Crude Oil" },
    { symbol: "NG", security: "Natural Gas" },
    { symbol: "ZB", security: "30-Year T-Bond" },
    { symbol: "ZN", security: "10-Year T-Note" }
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-dark-grey">
          <th className="p-2 text-left">Symbol</th>
          <th className="p-2 text-left">Security</th>
        </tr>
      </thead>
      <tbody>
        {securitySymbols.map((symbol) => (
          <tr key={symbol.symbol} className="border-b border-light-grey">
            <td className="p-2">{symbol.symbol}</td>
            <td className="p-2">{symbol.security}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const FAQsData = [
  {
    Question: "Is your drawdown based on balance or equity?",
    Answer: (
      <>
        <p>Futures Accounts offer End of Day(EOD) Drawdown which is based on the end of day closing balance of your account. This stops once your EOD drawdown reaches the original account starting balance.</p>
        <p className="mt-4">For example, you start at 100k, with an $800 dollar drawdown:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>If you make $400 on the first day, your drawdown is now at 99,600</li>
          <li>If you then lose 200, your drawdown stays at 99,600</li>
          <li>If you then make 200, your drawdown is still 99,600</li>
          <li>Once your account hits 100,800, your drawdown will lock at the 100k starting balance. So, even if you take your account to 110k, your drawdown stays at 100k.</li>
        </ul>
        <p className="mt-4">We will never offer intraday equity trailing drawdown as we believe it's predatory, and unfair to traders. We don't use them on our strategies, so we choose not to apply them in our evaluations.</p>
      </>
    )
  },
  {
    Question: "How do you calculate Daily Loss Limit?",
    Answer: "For Futures, we have no daily loss limits. Only the initial End of Day Drawdown, which will lock at your starting balance."
  },
  {
    Question: "Are there any Activation Fees?",
    Answer: (
      <>
        <p>We charge ZERO activation fees to our traders!</p>
        <p className="mt-2">We try and keep the process simple, with no extra hidden charges.</p>
        <p className="mt-2">The only fees you'll pay with us is the initial evaluation fee.</p>
        <p className="mt-2">Our evaluation fees are billed monthly until a trader passes, at that point billing is paused and no further costs fall on the trader.</p>
      </>
    )
  },
  {
    Question: "What are the payout rules?",
    Answer: (
      <>
        <p>For Futures:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Once you reach pass the evaluation and reach the funded stage you need to grow your account 1% (101k)</li>
          <li>At this point we will pause your trading, and move you to a live brokerage account with one of our brokers: Interactive Brokers, NinjaTrader, or T3 Global</li>
          <li>You are then eligible for payouts above the 1% buffer zone</li>
          <li>For example: Your account is equal to $101,200, you can withdraw the $200</li>
          <li>There are no payout caps, you can withdraw as little as $100, or $50k all at once</li>
          <li>We process payments within a 3 day time window, usually trying to process the same day when possible</li>
          <li>Payouts are processed by Bank Wire, or can also be sent through Crypto</li>
          <li>Traders receive an 80% split of their profits</li>
        </ul>
      </>
    )
  },
  {
    Question: "Are there any hidden rules I can't see on your site?",
    Answer: (
      <>
        <p>No we are very transparent with our rules, funding, and data. Everything is listed clearly, and we are not trying to hide anything.</p>
        <p className="mt-2">If you have any questions at all, please do not hesitate to reach out!</p>
        <p className="mt-2">max(at)traderslaunch(dotcom)</p>
      </>
    )
  },
  {
    Question: "Is there any amount of minimum trading days?",
    Answer: (
      <>
        <p>For the evaluation stage, we have a 3 day minimum trading days.</p>
        <p className="mt-2">Once funded, there are no minimum days before being able to request payout.</p>
      </>
    )
  },
  {
    Question: "Am I allowed to swing trade?",
    Answer: (
      <>
        <p>You are not allowed to swing trade when you are trying out.</p>
        <p className="mt-2">In the funded stage, if you have made at least 10% on your account, then please reach out and we will hop on a call to discuss.</p>
        <p className="mt-2">It's our goal to scale traders, and accommodate to their needs.</p>
      </>
    )
  },
  {
    Question: "What brokerages do you work with?",
    Answer: "For our live funded accounts, we work with Interactive Brokers, Ninjatrader, and T3 Global based on the specific needs of our traders."
  },
  {
    Question: "Can I trade SPX, NDX, US30, gold?",
    Answer: (
      <>
        <p>Yes we offer Index future equivalents. Futures offer better spreads than Forex, allowing almost no slippage.</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>SPX = ES</li>
          <li>NDX = NQ</li>
          <li>US30 = YM</li>
          <li>Gold = GC</li>
        </ul>
      </>
    )
  },
  {
    Question: "What am I allowed to trade?",
    Answer: (
      <>
        <p>All Futures Contracts. The main ones that people trade with us are:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>S&P500 (ES)</li>
          <li>Nasdaq-100 (NQ)</li>
          <li>Gold (GC)</li>
          <li>Crude Oil (CL)</li>
        </ul>
        <p className="mt-4">See the full list of available instruments below:</p>
        <div className="mt-4">
          <InstrumentsTable />
        </div>
      </>
    )
  },
  {
    Question: "What are the trading hours?",
    Answer: (
      <>
        <p>Trading hours are locked to the New York Session, as it is the highest liquidity session with the most opportunity.</p>
        <p className="mt-2">Hours are 9:30am - 4pm EST Timezone</p>
      </>
    )
  },
  {
    Question: "What is the 40% Rule?",
    Answer: (
      <>
        <p>The 40% rule only exists while in the initial evaluation, and is dropped once in the funded stage.</p>
        <p className="mt-2">What it means, is that no single trading day can be greater than 40% of your overall profits to pass the evaluation.</p>
        <p className="mt-2">In the event you have a trading day greater than 40% of your overall passing profits, you will need to continue trading until that day is less than 40% of your total profits.</p>
        <p className="mt-2">This rule is put in place to help us avoid gamblers. We want traders who show they can be consistent over multiple trades, not get lucky on 1 large single trade.</p>
      </>
    )
  },
  {
    Question: "Are there any inactivity rules?",
    Answer: (
      <>
        <p>Traders must place a minimum of 1 trade per week during the evaluation phase, otherwise their account will be deactivated.</p>
        <p className="mt-2">During the funded stage, traders must place a minimum of 1 trade per month before your account will be put on pause. You are still eligible to your profits, and will be paid out regardless.</p>
      </>
    )
  }
];
