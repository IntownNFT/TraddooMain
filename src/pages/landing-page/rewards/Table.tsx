const Table = ({ activeTab }: { activeTab: string }) => {
  const headers = [
    "Rank",
    "No. Trades",
    "Truncated Public Wallet ID",
    "Total $BONK earned",
    "PnL/Collateral",
  ];

  console.log(activeTab);

  //! PLACEHOLDER
  const rows = [
    {
      numOfTrades: "claim",
      truncatedPublicWalletID: "88wTlolololololololololololololololololoDaV7",
      totalBonkEarned: "7269.3 Current GP",
      pnlCollateral: "Tickets Purchased",
    },
    {
      numOfTrades: "claim",
      truncatedPublicWalletID: "88wTlolololololololololololololololololoDaV7",
      totalBonkEarned: "7269.3 Current GP",
      pnlCollateral: "Tickets Purchased",
    },
    {
      numOfTrades: "claim",
      truncatedPublicWalletID: "88wTlolololololololololololololololololoDaV7",
      totalBonkEarned: "7269.3 Current GP",
      pnlCollateral: "Tickets Purchased",
    },
    {
      numOfTrades: "claim",
      truncatedPublicWalletID: "88wTlolololololololololololololololololoDaV7",
      totalBonkEarned: "7269.3 Current GP",
      pnlCollateral: "Tickets Purchased",
    },
    {
      numOfTrades: "claim",
      truncatedPublicWalletID: "88wTlolololololololololololololololololoDaV7",
      totalBonkEarned: "7269.3 Current GP",
      pnlCollateral: "Tickets Purchased",
    },
  ];

  const truncateText = (inputText:string, maxLength:number) => {
    if (inputText.length <= maxLength) {
        return inputText; // No truncation needed
      } else {
        const halfLength = Math.floor((maxLength - 3) / 2);
        const firstPart = inputText.substring(0, halfLength);
        const lastPart = inputText.substring(inputText.length - halfLength);
        return `${firstPart}...${lastPart}`;
      }
  }
  

  //! TODO: MAKE FETCH REQUEST BASED ON THE SELECTED TAB

  return (
    <div className="bg-dark-grey w-full max-w-4xl mx-auto rounded-[14px] border border-light-grey flex items-center overflow-x-auto" id="table">
      <table className="w-full min-w-[600px] sm:min-w-max table-auto text-cemter font-rubik font-medium">
        <thead className="bg-[#141414] text-white font-poppins text-xs">
          <tr>
            {headers.map((head, index) => (
              <th key={index} className="border-b border-light-grey py-4">
                <p className="font-bold px-3">{head}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(
            (
              {
                numOfTrades,
                truncatedPublicWalletID,
                totalBonkEarned,
                pnlCollateral,
              },
              index
            ) => {
              const classes = "py-6 px-3 text-center font-poppins text-white text-small font-medium";

              return (
                <tr key={index} className="hover:bg-light-grey transition-colors">
                  <td className={classes}>
                    <p className="text-blue">{index + 1}</p>
                  </td>
                  <td className={classes}>
                    <p>{numOfTrades}</p>
                  </td>
                  <td className={classes}>
                    <p>{truncateText(truncatedPublicWalletID, 11)}</p>
                  </td>
                  <td className={classes}>
                    <p className="font-raleway font-medium text-[#A8A8A8]">{totalBonkEarned}</p>
                  </td>
                  <td className={classes}>
                    <p className="font-raleway font-medium text-[#A8A8A8]">{pnlCollateral}</p>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
