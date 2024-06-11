const InstrumentsTable = () => {
  // Define an interface to represent the structure of each row in the table
  interface SecuritySymbol {
    symbol: string;
    security: string;
  }

  // Create an array of objects that adhere to the SecuritySymbol interface
  const securitySymbols: SecuritySymbol[] = [
    { symbol: "AUDCADx", security: "Forex X" },
    { symbol: "AUDCHFx", security: "Forex X" },
    { symbol: "AUDJPYx", security: "Forex X" },
    { symbol: "AUDNZDx", security: "Forex X" },
    { symbol: "AUDUSDx", security: "Forex X" },
    { symbol: "CADCHFx", security: "Forex X" },
    { symbol: "CADJPYx", security: "Forex X" },
    { symbol: "CHFJPYx", security: "Forex X" },
    { symbol: "EURAUDx", security: "Forex X" },
    { symbol: "EURCADx", security: "Forex X" },
    { symbol: "EURCHFx", security: "Forex X" },
    { symbol: "EURGBPx", security: "Forex X" },
    { symbol: "EURJPYx", security: "Forex X" },
    { symbol: "EURNOKx", security: "Forex X" },
    { symbol: "EURNZDx", security: "Forex X" },
    { symbol: "EURSGDx", security: "Forex X" },
    { symbol: "EURUSDx", security: "Forex X" },
    { symbol: "GBPAUDx", security: "Forex X" },
    { symbol: "GBPCADx", security: "Forex X" },
    { symbol: "GBPCHFx", security: "Forex X" },
    { symbol: "GBPJPYx", security: "Forex X" },
    { symbol: "GBPNZDx", security: "Forex X" },
    { symbol: "GBPUSDx", security: "Forex X" },
    { symbol: "NZDCADx", security: "Forex X" },
    { symbol: "NZDCHFx", security: "Forex X" },
    { symbol: "NZDJPYx", security: "Forex X" },
    { symbol: "NZDUSDx", security: "Forex X" },
    { symbol: "USDCADx", security: "Forex X" },
    { symbol: "USDCHFx", security: "Forex X" },
    { symbol: "USDJPYx", security: "Forex X" },
    { symbol: "USDNOKx", security: "Forex X" },
    { symbol: "USDSEKx", security: "Forex X" },
    { symbol: "USDSGDx", security: "Forex X" },
    { symbol: "EURHUFx", security: "Forex X" },
    { symbol: "USDMXNx", security: "Forex X" },
    { symbol: "USDZARx", security: "Forex X" },
    { symbol: "EURZARx", security: "Forex X" },
    { symbol: "EURPLNx", security: "Forex X" },
    { symbol: "GBPZARx", security: "Forex X" },
    { symbol: "USDCNHx", security: "Forex X" },
    { symbol: "XAUUSDx", security: "GOLD X" },
    { symbol: "XAGUSDx", security: "SILVERX" },
    { symbol: "BRENT", security: "Commodities" },
    { symbol: "WTI", security: "Commodities" },
    { symbol: "NGAS", security: "Commodities" },
    { symbol: "AUS200", security: "Indices" },
    { symbol: "ESTX50", security: "Indices" },
    { symbol: "FRA40", security: "Indices" },
    { symbol: "GER40", security: "Indices" },
    { symbol: "UK100", security: "Indices" },
    { symbol: "SPAIN35", security: "Indices" },
    { symbol: "JPN225", security: "Indices" },
    { symbol: "NAS100", security: "Indices" },
    { symbol: "SPX500", security: "Indices" },
    { symbol: "US30", security: "Indices" },
    { symbol: "US2000", security: "Indices" },
    { symbol: "VIX", security: "Indices" },
    { symbol: "USDINDEX", security: "Indices" },
    { symbol: "CHINA50", security: "Indices" },
    { symbol: "HK50", security: "Indices" },
    { symbol: "BTCUSD", security: "BTC" },
    { symbol: "ETHUSD", security: "Crypto" },
    { symbol: "LTCUSD", security: "Crypto" },
    { symbol: "BCHUSD", security: "Crypto" },
  ];

  // Example usage: Log the first symbol and its security type

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Security</th>
        </tr>
      </thead>
      <tbody>
        {securitySymbols.map((symbol) => (
          <tr key={symbol.symbol}>
            <td>{symbol.symbol}</td>
            <td>{symbol.security}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const FAQsData = [
  {
    Question: "Do You Offer a Free Trial of the Challenge?",
    Answer:
      "Yes! With Traddoo you can sign up for as many Free Trials as you need to practice and get comfortable with our rules! What's more important, if you profit >0.1% in your Free Trial, you can convert it in a Funded Account Challenge and carry over the profit (up to a maximum of 4.5%), this way you'll get a head start!",
  },
  {
    Question: "Why Choose Traddoo?",
    Answer:
      "Becoming a full-time trader might seem like a pipe dream. With Traddoo we are giving you the chance to make your dream a reality. You can manage the Traddoo account with an initial balance of up to $200,000 and keep 80% of the profits. Prove you can build a consistent & profitable trading strategy, and anything is possible. The Traddoo program was built with the following cornerstones: Simplicity, Support, Scale.",
  },
  {
    Question: "Who Can Join Traddoo?",
    Answer:
      "Traddoo has very few limitations and is on the lookout for promising traders from all around the world. However, to enter any of our challenges users must be 18 years or over. All we need from you is that you prove yourself to be consistently profitable and adhere to proper risk management, then we are happy to offer you our capital and cover the losses.",
  },
  {
    Question: "How Can I Contact You?",
    Answer:
      "Our support team is available 24/7. Simply contact our team via email at support@traddoo.com, via Live Chat, or fill out the contact form.",
  },
  {
    Question: "What are the restricted countries?",
    Answer:
      "Unfortunately, we are unable to offer our services to the following countries: Afghanistan, Botswana, Burma (Myanmar), Democratic Republic of Congo, Crimea, Cuba, Ethiopia, Iran, Iraq, Japan, Lebanon, Libya, Kenya, North Korea, Pakistan, Republic of the Congo, Russian Federation, Somalia, Sri Lanka, Sudan, Syria, Trinidad and Tobago, Tunisia, Vietnam, Yemen, or Zimbabwe.",
  },
  {
    Question: "How Do I Get Started?",
    Answer:
      "Becoming a Traddoo Trader is as easy as ABC. Before you get started you will need to create an account and then follow the simple steps below: Once you have provided us with the email you wish to register we will send you an email prompting you to complete sign up. Here you will be redirected to our short & concise registration form. You will need to provide your full name and create a password that you will remember. Please ensure you accept our T&Cs and confirm you are 18 years or over, then press confirm. That's it, you'll get instant access to your account and be ready to take on your first challenge. If you didn't get the verification email direct to your inbox please check all folders including spam. If you are still unable to find the email please reach out to us via live chat or at support@traddoo.com for assistance.",
  },
  {
    Question: "How Do I Purchase a Challenge?",
    Answer:
      "Once you have completed the sign-up and have had a chance to look around the dashboard, now it's time to purchase your challenge. With clear product detail, clever coupon functionality, and a mobile-optimized interface our checkout is as much about speed as it is simplicity. To buy your challenge simply log into your dashboard, choose the product you wish to purchase ($5k, $10k, $25k, $50k, $100k, $150k, or $200k), then choose your platform and follow these easy steps: Review your order to make sure you have chosen the account that suits you. Enter the country you are purchasing from. Select your payment method. We currently offer card payments as well as crypto, such as Litecoin (LTC), Bitcoin (BTC), Dogecoin (DOGE), Ethereum (ETH - ERC20), Tether (USDT - ERC20) and USD Coin (USDC - ERC20). If you are lucky enough to have a coupon (keep your eyes peeled, we are generous 😉) please provide your code in the field and hit 'apply'. Click 'proceed to payment' and follow the instructions for card payments or scan the QR provided for crypto payments (alternatively, you can manually copy the crypto address to send funds from your wallet). Once your payment has been completed and confirmed, you will receive your credentials via email. You are now ready to join the family. In order to use ETH (ERC-20), USDT (ERC-20), or USDC (ERC-20) you will need to use the ERC-20 standard.",
  },
  {
    Question: "Is the fee refundable?",
    Answer:
      "Yes! Once you have successfully passed phases 1 and 2 of your challenge we will reimburse your purchase fee in full.",
  },
  {
    Question: "Are there any hidden fees?",
    Answer:
      "No, we are completely transparent with our pricing. With us, you will pay a one-time refundable fee and never experience any hidden costs.",
  },
  {
    Question: "Can I only have one account?",
    Answer:
      "No, just like we have no limits on time, we have no limits on the number of challenges any user can purchase.",
  },
  {
    Question: "How Do I Use The Dashboard?",
    Answer:
      "Our mission is to build a better funding experience. Our obsessiveness with detail has allowed us to build a dashboard that is simple, and intuitive but is also powered by lightning-fast tech and an analytics solution that is sure to wow.",
  },
  {
    Question: "How can you log into the dashboard?",
    Answer: (
      <>
        Once you have an active Traddoo account you can log into your dashboard
        with the following URL{" "}
        <a href="/" className="text-blue">
          www.traddoo.com
        </a>{" "}
        . Simply enter the email registered with the account and your password
        and log in.
      </>
    ),
  },
  {
    Question: "How can I change the password on my account?",
    Answer:
      "If you've forgotten your password and need to recover your account, go to log in and click 'forgot password?' and follow the steps below: You will now receive an email with a prompt to reset the password on your account. Click the reset password and enter your new password. Try to make it simple enough that you remember but strong enough that nobody can crack it. Now you can log back into your dashboard and continue your challenges. Or alternatively, you can navigate to the profile section in your dashboard and change from there.",
  },
  {
    Question: "What information can I view on my dashboard?",
    Answer:
      "Before any purchase, you will see your standard dashboard with general information about the challenge and the payment panel allowing you to choose your account details and TradeLocker as your trading platform. If you navigate to the left panel, you will see: My profile section is where you can update any personal information or change your passwords. The affiliates section is equipped with all your affiliate tracking tools and campaigns to start earning more. Live support, where you can chat with a member of our support team 24/7. Once you have made a purchase, this is where the fun starts! Now you will be able to see all the relevant data and statistics of all your active challenges such as balance, challenge size, P/L, and result. Click on each individual challenge and unlock information on winning & losing trades, end date, and the total amount left to earn. All the data you need to keep you on track. If you require information such as login credentials or server details, you may click on the Credentials button to obtain the information or either reset your account password.",
  },
  {
    Question: "What's in the Funded Account section?",
    Answer:
      "Once you have completed your challenges, you will be able to see all your challenges from this section of your dashboard. Note that this differs from the challenge section as this will only showcase challenges that are currently in phase 1 or 2. Click on the Funded Accounts tab. Select the account from the drop-down menu. Here you will see data such as challenge status, your account credentials, and the rules of the challenge. On the performance section, you will clearly see information such as balance, overall profit/loss, and 24hr profit/loss. Glossary from the performance section: Average loss: This refers to the average loss on all of your losing trades Win Rate: This displays the ratio of winning trades to losing positions. Average Win: This refers to the average win on all of your winning positions. Average Trade Duration: Refers to the average time spent on each position. Profit Factor: (Sum of profit from all winning trades) / (Sum of loss from all losing trades). Lots: This number is the total number of lots traded throughout the challenge Note: You are free to trade as many lots as you wish.",
  },
  {
    Question: "Do You Have an Affiliate Scheme?",
    Answer:
      "We offer up to 10% commission to Affiliates who work with us to recruit top talent.",
  },
  {
    Question: "How To Join?",
    Answer:
      "Becoming an Affiliate is simple. Sign up or log into your existing account and follow the steps: Navigate to the 'Affiliates' tab from within your trader's portal. Now you'll see your referral dashboard. This includes your Affiliate ID, an overview of commissions & referrals, campaigns, your USDT ERC20 address, and your unique link. Copy your link and spread the good word. How It Works As a Traddoo Affiliate, you can earn 10% for every referral that signs up and purchases a challenge account with your unique referral link. Payouts occur weekly, every Friday. However, it's important to note that you are required to accumulate a minimum of $100 if you are to qualify for payouts. The payouts will be done in cryptocurrency.",
  },
  {
    Question: "How Quick Can I Start?",
    Answer:
      "Once you create your Traddoo account, you will instantly receive access to your dashboard, where you will be able to purchase a challenge through either card or crypto. If you pay with crypto, the transaction will not be confirmed until it has been validated by the blockchain. This can take a few hours depending on network traffic. Once your payment has been verified, you will receive a 'Completed Purchase' email from us within minutes. If you don't receive this email, please check your spam, junk, and promotion folders. If the payment has been deducted from your crypto wallet, but you haven't received the confirmation email, please email support@traddoo.com and we will resolve the matter promptly.",
  },
  {
    Question: "What Features & Platforms Can I Trade With?",
    Answer:
      "We want our traders to succeed, and that is why now we are offering a platform with the best technology and tools they need to succeed in our challenges. TradeLocker is a cutting-edge trading platform with charts powered by TradingView, allowing our users to take their trading experience to the next level. With TradeLocker you do not need to download any application, all you must do is choose the challenge amount and purchase it. Once your payment has been fully completed, you will receive your TradeLocker credentials via email, and you will be ready to start.",
  },
  {
    Question: "What other features are available?",
    Answer:
      "We want our traders to succeed, and that is why we offer a platform with the best technology and tools they need to succeed. Traders Portal With a dashboard built for ease of use and performance all in one, we set you up for success from the get-go. Simply purchase accounts, manage your performance, and more all from the convenience of one portal. Real Capital Accounts Once you have passed all the requirements of your challenge account, we'll give you a fully funded account, where you can trade with our capital and keep 80% of the profits. However, we don't conform to the regular industry standard of offering demo accounts and virtual funds. No! We offer REAL capital and allow you to trade on a Live STP/ECN trading account. Affiliate Dashboard We have a fully integrated Affiliate portal within your portal, where you can easily find everything you need to grow your Affiliate business. From a detailed overview of your performance and commission, to campaign setup, you can earn with the ultimate convenience. THE CHALLENGE",
  },
  {
    Question: "How Do I Become a Funded Trader?",
    Answer:
      "We believe traders should have the chance to perform at their best, without focusing on Time, or unrealistic goals. With that in mind, we have built our evaluation in a way that simplifies that path to getting funded while safeguarding traders against mishaps, allowing them to become risk management pros. Phase 1: Evaluation In phase one, you will trade on a demo account where you will have unlimited time to pass the set criteria. Here you can trade all your favourite assets with tighter spreads but to pass this phase you must meet the below criteria: ● 10% Profit Target ● Minimum Trading Day of 1 ● Maximum Daily Drawdown of 5% ● Maximum Overall Drawdown of 10% Once you have met these targets you will successfully move to phase 2, Verification. Phase 2: Verification Again with no time limits on a demo account, you will prove your ability to build consistent profits. In this phase, we have introduced a black-and-white consistency rule whereby traders the total profits generated on your best trading day must not exceed 45% of your total profit earned. You can clearly monitor The 'Highest Day Profit' parameter, directly from the Funded Accounts Dashboard. Meet the below requirements in phase 2: ● 8% Profit Target ● Minimum Trading Day of 1 ● Maximum Daily Drawdown of 5% ● Maximum Overall Drawdown of 10% ● *The consistency rule applies: 45%* Once you have successfully met the requirements of this phase, we'll carefully assess your performance, and you will then become a Traddoo funded trader. Once you become funded, you will trade on a live account with a full STP/ECN broker. Because of this, you are required to fully verify your identification. Here you will be asked for: ● Proof of identification (passport, national ID card, or driving licence)● Proof of address (a household bill or similar within the last 6 months) The conclusion of the Funded Account contract will depend on the completion and approval of your identification process. Once approved you will be able to trade our capital (based on the initial capital account chosen at the start of the challenge) and earn an 80/20 profit share in your favour.",
  },
  {
    Question: "Want to scale?",
    Answer:
      "We offer scaling on our two highest capital accounts, $100k & $200k challenges. Prove you can build a 10% profit consecutively for 3 months and we will increase your account balance by 50%, this means if you are trading a $100k account after 3 months it will have increased to $150,000. Scale all the way up to $5 million - THE HIGHEST ON THE MARKET.",
  },
  {
    Question: "Will I get a certificate on completion of the challenge?",
    Answer:
      "Yes! Once you have completed phase 1 and 2 successfully, we will email you your certificate of completion, so you can show your successes off to the world.",
  },
  {
    Question: "How Does the Daily Drawdown Work?",
    Answer:
      "Traders can have a maximum Daily Drawdown of 5% from their starting equity (including all floating losses & profits). The 24-hour period starts at 00:00 GMT+3 server time . For example: If you have a starting balance of $200,000, 5% drawdown equals to a $10,000 loss. If your account falls below $190,000 within any given trading day, you are in violation of the Daily Drawdown rule. On the other hand, if you end the trading day with a profit of, for example, $10,000, your starting capital will increase to $210,000 and your new maximum daily loss will be $10,500.",
  },
  {
    Question: "How do I calculate Daily Drawdown?",
    Answer:
      "The maximum Daily Drawdown is always 5% of your equity at the start of the trading day. It's important to note that the maximum daily loss of 5% is based on the trader's equity at the end of the day (EOD), which is calculated at 00:00 GMT+3 server time. This includes both the realized and unrealized profit and loss (P&L) of the trader's open positions.",
  },
  {
    Question: "How Does the Overall Drawdown Work?",
    Answer:
      "The capital in any Traddoo Trading Account cannot at any given time drop below 10% of the initial account value. For example: If you have a starting balance of $100,000, 10% of this equals $10,000. This means if your account falls below $90,000 at any given moment you are in violation of the Overall Drawdown rule.",
  },
  {
    Question: "How do I calculate the Overall Drawdown?",
    Answer:
      "The maximum Overall Drawdown allowed is a constant of 10% of your initial account size. This means that if you have a $100,000 account, the maximum overall loss you can incur is $10,000 (10% of $100,000) at any given time, both during the FAC (Funded Account Challenge) and after getting your Funded Account. It's important to note that the maximum loss of 10% includes both the realized and unrealized profit and loss (P&L) of your open positions.",
  },
  {
    Question: "What are the Min & Max Trading Days?",
    Answer: "The Traddoo' challenge has no minimum Trading Days Rule.",
  },
  {
    Question: "How do you define a trading day?",
    Answer:
      "A trading day is defined as a day where at least one trade is executed. In the case that a trade is held over a number of days, the only day that will be considered a 'Trading Day' is the day the position was opened.",
  },
  {
    Question: "What's the maximum trading period?",
    Answer:
      "We have no time limits to complete the challenge, this means your path to funding can be done at your own pace.",
  },
  {
    Question: "What Are the Challenge Profit Targets?",
    Answer:
      "The profit target of a Traddoo Challenge is set to 10% in the Evaluation phase (phase 1) and 8% during Verification (phase 2). Profit Target means that traders need to reach a total profit in the sum of closed trades on their challenge account within the duration of their challenge. For example: If you choose an account balance of $50,000, your profit target for Phase 1 (Evaluation) will be $5,000, and $4,000 for Phase 2 (Verification). If you are in violation of this rule this will lead to an automatic failure of your challenge account.",
  },
  {
    Question: "I Have Passed Phase 2! What Next?",
    Answer:
      "Congratulations on passing Phase 2. Your Traddoo Funded Account should be processed in no longer than 72 hours. However, before you receive your Funded Account our team will evaluate your performance. To get your Funded Account granted, you must have met the below requirements: ● Met the profit target of 8% ● Traded a minimum of 1 trading day ● Closed all active trades on the phase 2 account ● Have not violated any of our rules & met our consistency target of 45% Once we are happy that you've met all these requirements we will grant you your Funded Account with the capital initially chosen at the beginning. Important: Once you are a Traddoo trader you will trade on a live account and therefore will be required to provide the required Identity (KYC) documents.",
  },
  {
    Question: "Do I Trade Live or Demo?",
    Answer:
      "In phases 1 and 2, all accounts are simulated to mimic actual market conditions. This means you will trade on a demo account and any profits made during stage 1 and stage 2 can not be withdrawn. Once you have been funded, your account will be connected to a live trading account with an STP/ECN broker where you will trade with real capital. This is where you can earn an 80% profit share with the option to scale and reach an account balance of $5 million.",
  },
  {
    Question: "What is the Consistency Rule?",
    Answer:
      "The Consistency Rule in Traddoo is designed to ensure you achieve steady and sustainable profits while effectively managing risk. The rule states that the earnings of your best trading day should not exceed 45% of your total profits. The Consistency Rule applies to both Phases of Day Trading and Swing challenge types and only Phase of Single Phase Challenge",
  },
  {
    Question: "Why is the Consistency Rule Important?",
    Answer:
      "Traddoo's Consistency Rule aids in the cultivation of consistent profits and the avoidance of emotion-driven trading. By ensuring your most profitable day falls below 45% of your overall profits, you can better manage your risk-reward ratio (RRR) and develop a more sustainable trading approach. This rule assists Traddoo in identifying the top professional traders to fund. It is important to note that in the case of your profit/loss being in the negative, the consistency rule will not apply.",
  },
  {
    Question: "When is the Consistency Rule required and how is it calculated?",
    Answer: (
      <p>
        The Consistency Rule applies to all phases of the Funded Account
        Challenge. Here, you have the chance to demonstrate your ability to
        manage risk effectively and build consistent success. The calculation is
        as follows: Best Day Profit ÷ Overall Profit = Best Day % of Total
        Profit Let's illustrate this with a new example: Imagine a $25,000
        account with a Phase 2 profit target of $2,000 (8%). The daily profit
        should never exceed $900, which is 45% of total profits. Consider this
        scenario:
        <ul className="space-y-4">
          <li>● You reach your target and make a total profit of $2,000.</li>
          <li>
          ● You earn a $900 profit in a single day. Result: You do not pass the
            Challenge. To succeed, you should devise a strategy that prevents
            you from exceeding a $900 daily profit.
          </li>
          <li>
          ● Once you reach a total profit of $2,000, you will pass the Challenge
            as you have demonstrated that you can profit consistently without
            relying on risky large trades.
          </li>
          <li>
            Here is another example taking into consideration multiple trading
            days in the challenge:
          </li>
          <li>5 trading days with the following results, day-by-day:</li>
            <li>+ $1,000</li>
            <li>- $500</li>
            <li>+ $2,000</li>
            <li>+ $750</li>
            <li>- $250</li>
          <li>
            This results in a total P/L of $3,000. The highest profit day was
            the day of +$2,000, so we arrive at the following calculation and
            value:
          </li>
          <ul>
            <li>
              $2,000 / $3,000 * 100 = ~0.667 * 100 = ~66.67% Highest Profit Day
            </li>
          </ul>
        </ul>
      </p>
    ),
  },
  {
    Question: "What is meant by the Recommended Best Day?",
    Answer:
      "Given that your best trading day should remain below 45% of your total profit, we recommend that you set a daily profit target below this threshold. This strategy will help you maintain consistency and lock in daily profits. Here are the examples of best day profits by account size during Phase 1:Less than $225, Less than $450, Less than $1125, Less than $2250, Less than $4500, Less than $6750, Less than $9000",
  },
  {
    Question: "Can I Reset My Challenge?",
    Answer:
      "We want to empower our traders to succeed. If at any time you violate one of our requirements your account will become ineligible for funding due to the success criteria not being met. However, you can reset your account at any time during your Phase 1 (Evaluation) of your challenge, even if your profit/loss during the challenge is negative.",
  },
  {
    Question: "Who can Reset their Challenges?",
    Answer:
      "If you have a Day Trading or Swing Challenge, you can reset it only during Phase 1.",
  },
  {
    Question: "How does the reset help?",
    Answer:
      'It\'s not a good feeling to fail, our reset function allows you to adapt your trading plan and strategy and try again for 30% less than the original cost. You can reset your account by following the simple steps below: 1. Access your funded 2. Navigate to the challenge you wish to reset. 3. Simply click "Reset Challenge" and you\'re ready to go again. Once you have successfully reset your challenge you will see a pop-up window highlighting your discounted price (30% Less) and the available payment options. Now all you have to do is confirm or cancel. Click "Cancel" if you do not wish to continue or "Reset & Keep Trading" to keep going. If you have failed your Challenge, you can retry it from your Dashboard within 24 hours for a 15% discount',
  },
  {
    Question: "How To Calculate Profits from a Trade",
    Answer:
      "Calculating trade profits is an essential aspect of trading. The formula for calculating trade profits depends on whether you have a sell or buy position. Here is how to calculate profits for each position: ● For a sell position: (OpenPrice -- ClosePrice) × Lots × Contract size; For a buy position: (ClosePrice - OpenPrice) × Lots × Contract size The open price is the price at which you opened the position, while the close price is the price at which you closed the position. Lots refer to the number of units of the asset you're trading, while the contract size is the equivalent amount of the traded asset on the market.",
  },
  {
    Question: "Are Instant Funding Accounts Available?",
    Answer:
      'At the time being, we do not offer an "Instant Funding Account" option within our platform. We provide a range of funding and trading services designed to empower traders, and instant funding may be added soon. We are constantly working to expand our repertoire and bring traders new opportunities, so be sure to stay informed with the latest updates.',
  },
  {
    Question: "Do I Trade With Real Funds?",
    Answer:
      "Once you have passed our 2 phase evaluation, Traddoo traders will have the same capital to trade with as initially chosen for their preceding evaluation (phase 1) and verification (phase 2) phases. Your Traddoo Funded Account will be connected to a live STP/ECN trading account with real capital, an industry first. It's from your live account where we generate real profits, and you are entitled to 80% of the profits you earn on the account. Note: We don't provide account upgrades, please be sure to choose the account size that suits you from the beginning. This initial capital is what you will trade on your Funded Account. If you are successful, prove you are able to build consistent profits and have a winning trading strategy in the long run, you can scale your account (this is limited to 100k and 200k challenges).",
  },
  {
    Question: "What does it mean to trade with an STP/ECN broker?",
    Answer:
      "We want all our traders to succeed, this is why we are the only prop firm to connect all Funded Traders to an STP/ECN account. By offering both STP (Straight-Through-Processing) and ECN (Electronic Communications Network), we ensure your order will always find liquidity to get executed instantaneously. Through the STP routing, your order gets sent to a liquidity provider; through the ECN model, your order is sent to a pool of market participants where it can always find the right counterparty.",
  },
  {
    Question: "How Does the Funded Account Work?",
    Answer:
      "You will trade with the same account balance that you traded in the Traddoo Evaluation and Verification Phases, meaning if you chose $100,000 you will manage a $100,000 Funded Account. To maintain your status as a Funded Trader you will need to meet certain drawdown limits: ● Lose no more than 5% of the day's starting balance (Daily Drawdown)● Lose no more than 10% of the initial balance (Overall Drawdown)",
  },
  {
    Question: "How much profit do I get?",
    Answer:
      "The Funded Account allows you to receive an 80% profit split by default. If you keep within the drawdown limits and are profitable, you will be eligible for your first payout as soon as your Funded Account is $50 in profit. You can request a payout every time your Funded Account is in profit of at least $50.",
  },
  {
    Question:
      "What happens if I breach the drawdown limits or any other Funded Account requirement?",
    Answer:
      "If you are in violation of the Daily or Overall drawdowns or any other rule applicable to your Funded Account, this will be disabled. You can purchase another Challenge and get funded again without any penalty. Please note that you will not bear any of the losses, we take the risk of all your potential losses.",
  },
  {
    Question: "How Can I Withdraw Profits?",
    Answer:
      "Every day, you can request payouts for any profits that you generate. We will process your payment as quickly as possible (usually within 8 hours). In order to be eligible for a payout: ● Your first payout request can be made as soon as your balance exceeds $50 in profits ● Due to the current market state of crypto, we will only pay out if your profit exceeds $50. This will be calculated on equity gain made from the previous payout ● Since Traddoo Funded Accounts are STP, your profits are made in the real market (not simulated). This allows you to request payouts at anytime, even daily",
  },
  {
    Question: "What are the payout methods available?",
    Answer:
      "You can withdraw your profits in USDT ERC20 directly into your wallet. Once you have requested your payout, we will review the request and aim to process it as soon as possible (on average it takes less than 8 hours). Payouts will ONLY be accredited to traders who have fully verified accounts and who have not breached any of the Funded Account requirements. You can easily update your payment details at any time from your Dashboard, and you'll receive a confirmation email as an extra measure of security.",
  },
  {
    Question: "Can I Scale My Account?",
    Answer:
      "The Traddoo scaling plan, available on all accounts, not only allows you to increase your balance but over time you can also increase your potential payout by simply proving yourself as a consistent, profitable trader.",
  },
  {
    Question: "Why our Scaling Plan is the best on the market?",
    Answer:
      "A very generous 50% increase in account balance every 3 months, all the way up to $5 million Fair and safe profit eligibility requirement (10% consecutively for 3 months) Trading goals remain the same Profit split of 80/20 in your favor",
  },
  {
    Question: "What are the requirements?",
    Answer:
      "To be eligible, traders must meet a 10% profit target consecutively for 3 months, and we will reward you with a 50% balance increase of up to $5 million. If you consistently build 10% profit again in the next 3 months, we will reward you with another 50% balance increase, and so on. For example: If you start with a $100k account and are profitable for 3 consecutive months with at least 10% profit, you will qualify for a 50% scale increase. Meaning that you will get an extra $50k, bringing your balance up to $150k. If you consistently build 10% profit again in the next",
  },
  {
    Question: "Am I Required to Have a Verified Account?",
    Answer:
      "You have now passed phase 2 but before we issue any Funded Account and allow you to trade on your live account you are required to verify your identity, This should take no longer than a few minutes to complete. Follow the below steps to verify your identity: 1. Once you have completed the verification phase and we are happy you met all requirements our support team will guide you through the next steps. You are required to sign up for our live broker and complete the full verification process. 2. During the verification steps, you will be asked to provide: ○ A valid form of identification (driver's license, passport, ID card, or residence card) ○ A selfie Please note that when you are providing your proof of ID: ● It must be a government-issued document ● You must supply the front and back of the document, and the full document needs to be visible ● Any documents provided must not be expired ● We do not accept screenshots from your PC or mobile devices● Your date of birth must be clearly visible on the document provided● When attaching your documents please ensure they are in JPEG or PNG format and are not password protected Your documents will now be screened and once verified you can trade on your Funded Account and start earning real profits. If you have any issues with your KYC screening feel free to contact our support team, available 24/7 via Live Chat on our website or through your client portal, or simply email us at support@traddoo.com. If you do not pass our identity screening you will not be granted your Funded Account.",
  },
  {
    Question: "What's The Maximum Number of Accounts Allowed?",
    Answer:
      "We don't limit the number of challenges you can purchase, and you can even take part in multiple challenges in parallel. However, When it comes to active accounts being run in parallel, each user will be able to have a combined starting equity of a maximum of $200,000. This means that, while you can not exceed a total of 8 challenges running at once, you will be able to purchase an infinite amount of challenges provided they are within the $200k combined starting equity limit. For Example: This means that you can have a total of eight $25K challenges running at the same time. Similarly, you can have a total of four $50k accounts. You can also mix challenges and for example have two $25k accounts, one $50k account, and one $100k accounts simultaneously, however, you will not be able to purchase five $25k accounts and three $50k accounts. Please also note that, if the $200k limit is reached, you will be able to purchase more challenges once the ones you have purchased are completed. To summarize, you can buy accounts until you reach a maximum of $200k total starting equity of all accounts combined. That said, you can scale up your capital as far as $5 million on all accounts by staying profitable.",
  },
  {
    Question: "What Payment Methods Are Available?",
    Answer: (
      <>
        Taking part in one of our challenges couldn't be easier. Simply sign up
        and purchase a challenge direct from your dashboard. We accept both all
        major cards and crypto payments, you can choose from the following
        cryptocurrency payment methods:
        <br />
        <br />
        1. Bitcoin (BTC) <br />
        2. Ethereum (ETH) <br />
        3. Litecoin (LTC) <br />
        4. Dogecoin (DOGE) <br />
        5. Tether (USDT-ERC20) <br />
        6. USD Coin (USDC -ERC20) <br />
        <br />
        Once you have made your purchase (and it has been verified on the
        blockchain in case of crypto payment), you will receive your challenge
        account credentials via email. You are now ready to start your
        challenge. Important Note: In order to use ETH (ERC-20), USDT (ERC-20),
        or USDC (ERC-20) you will need to use the ERC-20 standard.
      </>
    ),
  },
  {
    Question: "What instruments are available?",
    Answer: (
      <>
        {" "}
        With Traddoo you can trade a variety of instruments, from currencies to
        crypto to commodities.
        <br />
        The table below is a comprehensive list of all instruments available
        Note: This list is effective as of 15/11/2023, and it may change without
        notice. However, we will endeavor to communicate any changes promptly.{" "}
        <br />
        Search:
        <InstrumentsTable />
      </>
    ),
  },
  {
    Question: "Do you have a refund policy?",
    Answer:
      "You can request a refund if you have not activated or placed any trades on your account. If you used the account and/or failed the challenge, you are not eligible for a refund. To withdraw from the contract, you must send an email within 14 days and we will refund you all fees in the same way you paid them. Funded accounts will receive their fees reimbursed on the successful completion of phases 1 and 2 of their challenge. Important Note: Traddoo offers their traders an unlimited time period for completing the funded account challenge, however, in the case that you do not activate your account by logging in and placing trades within a 30-day period after signing up, your account will be temporarily suspended. Access renewal can be requested through your trading portal or by emailing within 6 months of the initial suspension. If not, the provision of the services will be terminated without the possibility of a fee refund.",
  },
  {
    Question: "How Can I Reset My Funded Account Challenge Trading Password",
    Answer:
      'How to reset your Funded Account Challenge\'s trading password: 1. Log into your Funded Account Challenge Dashboard. 2. Tap on the 3 horizontal lines at the top of the Dashboard, and select the challenge account which you want to effect. 3. At the top of the screen, you will see the "Credentials" button. 4. When tapping on the Credentials button, you will see some information relevant to your credentials and platform. 5. Within this tab, select "Reset Password" 6. You will see a confirmation pop-up, after which you will receive your new credentials at your registered email address. Please note that in order to follow the above steps, you will need to have an active challenge.',
  },
  {
    Question: "What Trading Platforms are available on Traddoo?",
    Answer:
      "Traddoo offers TradeLocker, the first web-based platform to natively integrate TradingView™. TradeLocker is a user-friendly, web-based trading platform that provides seamless access to global financial markets. It offers a wide array of trading tools and features to assist traders in making informed decisions. Traddoo has integrated TradeLocker to offer our clients a secure and efficient trading environment. This platform is particularly suitable for traders who prefer quick and easy access and the convenience of trading from any device with an internet connection. TradeLocker offers Android and iOS apps, but can also be used from any browser, on any device, and on any operating system.",
  },
  {
    Question: "What Does Traddoo Offer?",
    Answer:
      "Key features and services typically offered by Traddoo include: 1. Risk Management: The platform employs risk management tools and technology to monitor the trading activities of funded traders. This helps mitigate risks and ensure responsible trading practices. 2. Funding Models: Traddoo offers different funding models, such as profit-sharing arrangements or performance-based fees. The specific terms vary depending on the platform and the agreements between traders and investors. 3. Educational Resources: To support traders in their growth and development, Traddoo may provide educational materials, training, or access to resources that help traders improve their skills. 4. Data Analytics: The platform often offers traders and investors access to data and analytics tools, allowing them to make data-driven decisions and optimize their trading or investment strategies. 5. Compliance and Regulation: Traddoo adheres to financial regulations and compliance standards to ensure the safety and security of funds and personal data. 6. Support and Customer Service: Traders and investors receive 24/7 support and customer service to address inquiries and resolve issues promptly. 7. B2B Services: We offer B2B services for anyone who wishes to establish their own proprietary trading firm. Get in touch with us for more information! Please keep in mind that the specific services and features of Traddoo may evolve over time, so it's advisable to visit the official Traddoo website or contact their support team to stay up to date with the latest developments!",
  },
  {
    Question: "What Are the Commissions and Contract Sizes on Traddoo?",
    Answer: (
      <>
        At Traddoo it is in our interest to offer our traders the tightest
        spreads and best trading conditions. Below is a table outlining the
        Contract Size, Minimum Step, and Commission for every instrument. Please
        reach out to our Support Team if you have any questions.
        <br />
        <br /> Note: This list is effective as of 15/11/2023, for MT5 and it may change
        without notice. However, we will endeavor to communicate any changes
        promptly.
        <br />
        <br /> Search: <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Security</th>
              <th>Contract Size</th>
              <th>Minimum Step</th>
              <th>Commission per Lot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AUDCADx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>AUDCHFx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>AUDJPYx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>AUDNZDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>AUDUSDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>CADCHFx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>CADJPYx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>CHFJPYx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURAUDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURCADx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURCHFx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURGBPx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURJPYx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURNOKx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURNZDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURSGDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURUSDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>GBPAUDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>GBPCADx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>GBPCHFx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>GBPJPYx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>GBPNZDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>GBPUSDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>NZDCADx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>NZDCHFx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>NZDJPYx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>NZDUSDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDCADx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDCHFx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDJPYx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDNOKx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDSEKx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDSGDx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURHUFx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDMXNx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDZARx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURZARx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>EURPLNx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>GBPZARx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>USDCNHx</td>
              <td>Forex X</td>
              <td>100000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>XAUUSDx</td>
              <td>GOLD X</td>
              <td>100</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>XAGUSDx</td>
              <td>SILVER X</td>
              <td>5000</td>
              <td>0.01</td>
              <td>$7/lot</td>
            </tr>
            <tr>
              <td>BRENT</td>
              <td>Commodities</td>
              <td>100</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>WTI</td>
              <td>Commodities</td>
              <td>100</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>NGAS</td>
              <td>Commodities</td>
              <td>1000</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>AUS200</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>ESTX50</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>FRA40</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>GER40</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>UK100</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>SPAIN35</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>JPN225</td>
              <td>Indices</td>
              <td>100</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>NAS100</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>SPX500</td>
              <td>Indices</td>
              <td>10</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>US30</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>US2000</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>VIX</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>USDINDEX</td>
              <td>Indices</td>
              <td>100</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>CHINA50</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>HK50</td>
              <td>Indices</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>BTCUSD</td>
              <td>BTC</td>
              <td>1</td>
              <td>0.01</td>
              <td>no</td>
            </tr>
            <tr>
              <td>ETHUSD</td>
              <td>Crypto</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>LTCUSD</td>
              <td>Crypto</td>
              <td>1</td>
              <td>0.1</td>
              <td>no</td>
            </tr>
            <tr>
              <td>BCHUSD</td>
              <td>Crypto</td>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    Question: "What Does Traddoo's Funded Account Challenge Offer?",
    Answer:
      "At Traddoo, we provide a variety of account sizes and prices to accommodate traders of different backgrounds, ensuring an accessible platform for all. Funded Challenge Offer: Start a profitable career with our $25,000 Funded Account Challenge $25,000 Challenge Offer: - Price: $249 - Refundable Fee: $249* Grow your skills as a trader without risking your capital with our $50,000 Funded Account Challenge. $50,000 Challenge Offer: - Price: $349 - Refundable Fee: $349* Show off your pro trading tactics and get funded with our $100,000 Funded Account Challenge. $100,00 Challenge Offer: - Price: $549 - Refundable Fee: $549* Size this opportunity to advance your trading career with our $150,000 Funded Account Challenge. $150,000 Challenge Offer: - Price: $819 - Refundable Fee: $819* Unlock the door to success in trading with our $200,000 Funded Account Challenge. $200,000 Challenge Offer: - Price: $1099 - Refundable Fee: $1099* * The fee is refunded upon successful completion of Phase 2. Join us today and seize the chance to amplify your trading potential. Discover the perfect match among our diverse Funded Account Challenges and chart your course toward financial success and trading excellence.",
  },
  {
    Question: "TYPES OF FUNDED ACCOUNT CHALLENGE",
    Answer:
      "Traddoo Funded Challenge Types Overview Traddoo offers three Challenge types, specifically designed to suit different trading strategies and styles. All Traddoo Funded Account Challenges have these features in common: - Daily payouts once you get funded - EAs are allowed - Up to 80/20 profit split - Unlimited time to pass the Challenge - Scale your Funded Account to $5 million The three Challenge types we offer are: - Click on each Account type to find out more details about them, or head to our homepage to find a the comparison table",
  },
  {
    Question: "What Is the Traddoo Single Phase Trading Challenge?",
    Answer: (
      <>
        <p>
          Traddoo's Single Phase Challenges have been engineered so that traders
          who have tried and tested strategies can get funded faster.
        </p>
        <h3>Single Phase Challenge Pricing</h3>
        <table>
          <thead>
            <tr>
              <th>Challenge Fee*</th>
              <th>Account Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$249</td>
              <td>$25,000</td>
            </tr>
            <tr>
              <td>$349</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>$549</td>
              <td>$100,000</td>
            </tr>
            <tr>
              <td>$819</td>
              <td>$150,000</td>
            </tr>
            <tr>
              <td>$1099</td>
              <td>$200,000</td>
            </tr>
          </tbody>
        </table>
        <p>
          *Once the trader receives a Funded Account, the Challenge Fee will be
          refunded in full.
        </p>
        <h3>Single Phase Challenge Rules</h3>
        <table>
          <thead>
            <tr>
              <th>Single Phase Account</th>
              <th>Phase 1</th>
              <th>Funded Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Max Daily Drawdown</td>
              <td>4%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Max Overall Drawdown</td>
              <td>7%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Profit Target</td>
              <td>14%</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Time Limit</td>
              <td>Unlimited Time</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Minimum Trading Days</td>
              <td>1</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Consistency Rule</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>News Holding</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>News Trading</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Weekend holding</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        <h3>Single Phase Challenge Leverages</h3>
        <table>
          <thead>
            <tr>
              <th>Asset Class</th>
              <th>Default Leverage</th>
              <th>Add-On Leverage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Forex</td>
              <td>50</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Metals, Oil, Indices</td>
              <td>10</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Stocks</td>
              <td>5</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Crypto</td>
              <td>2</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    Question: "What Is the Traddoo 2-Phase Day Trading Challenge?",
    Answer: (
      <>
        <p>
          Traddoo's Day Trading Challenge is a 2-phase Funded Account Challenge
          ideal for scalpers and short-term traders. Below you'll find tables
          outlining all the characteristics of the Traddoo Day Trading Accounts.
        </p>
        <h3>Day Trading Challenge Pricing</h3>
        <table>
          <thead>
            <tr>
              <th>Challenge Fee</th>
              <th>Account Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$249</td>
              <td>$25,000</td>
            </tr>
            <tr>
              <td>$349</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>$549</td>
              <td>$100,000</td>
            </tr>
            <tr>
              <td>$819</td>
              <td>$150,000</td>
            </tr>
            <tr>
              <td>$1099</td>
              <td>$200,000</td>
            </tr>
          </tbody>
        </table>
        <h3>Day Trading Challenge Rules</h3>
        <table>
          <thead>
            <tr>
              <th>Day Trading Account</th>
              <th>Phase 1</th>
              <th>Phase 2</th>
              <th>Funded Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Max Daily Drawdown</td>
              <td>5%</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Max Overall Drawdown</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Profit Target</td>
              <td>10%</td>
              <td>8%</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Time Limit</td>
              <td>Unlimited Time</td>
              <td>Unlimited Time</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Minimum Trading Days</td>
              <td>1</td>
              <td>1</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>News Trading</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>News Holding</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Weekend Holding</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Consistency Rule</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        <h3>Day Trading Challenge Leverages</h3>
        <table>
          <thead>
            <tr>
              <th>Asset Class</th>
              <th>Leverage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Forex</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Metals, Oil, Indices</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Crypto</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    Question: "What Is the Traddoo 2-Phase Swing Trading Challenge?",
    Answer: (
      <>
        <p>
          Traddoo's Swing Trading Challenge is best suited for those looking to
          hold trades over major news events and weekends. Below you'll find
          tables outlining all the characteristics of the Traddoo's Swing
          Accounts.
        </p>
        <h3>Swing Challenge Pricing and Max Lots</h3>
        <table>
          <thead>
            <tr>
              <th>Challenge Fee</th>
              <th>Account Size</th>
              <th>Max Lots*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$269</td>
              <td>$25,000</td>
              <td>2.5</td>
            </tr>
            <tr>
              <td>$379</td>
              <td>$50,000</td>
              <td>5.0</td>
            </tr>
            <tr>
              <td>$599</td>
              <td>$100,000</td>
              <td>10.0</td>
            </tr>
            <tr>
              <td>$899</td>
              <td>$150,000</td>
              <td>15.0</td>
            </tr>
            <tr>
              <td>$1,179</td>
              <td>$200,000</td>
              <td>20.0</td>
            </tr>
          </tbody>
        </table>
        <p>
          *Maximum lots at any given time: your open positions combined cannot
          exceed the maximum lots value.
        </p>
        <h3>Swing Challenge Rules</h3>
        <table>
          <thead>
            <tr>
              <th>Swing Account</th>
              <th>Phase 1</th>
              <th>Phase 2</th>
              <th>Funded Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weekend holding</td>
              <td>Allowed</td>
              <td>Allowed</td>
              <td>Allowed</td>
            </tr>
            <tr>
              <td>News Holding</td>
              <td>Allowed</td>
              <td>Allowed</td>
              <td>Allowed</td>
            </tr>
            <tr>
              <td>News Trading</td>
              <td>Not Allowed</td>
              <td>Not Allowed</td>
              <td>Not Allowed</td>
            </tr>
            <tr>
              <td>Max Daily Drawdown</td>
              <td>5%</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Max Overall Drawdown</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Profit Target</td>
              <td>10%</td>
              <td>8%</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Time Limit</td>
              <td>Unlimited Time</td>
              <td>Unlimited Time</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Minimum Trading Days</td>
              <td>1</td>
              <td>1</td>
              <td>n/a</td>
            </tr>
            <tr>
              <td>Consistency Rule</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        <h3>Swing Challenge Leverages</h3>
        <table>
          <thead>
            <tr>
              <th>Asset Class</th>
              <th>Leverage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Forex</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Metals, Oil, Indices</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Stocks</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Crypto</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
];
