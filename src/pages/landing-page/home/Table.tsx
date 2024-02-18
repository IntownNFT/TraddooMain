type RowDataItem = {
  name: string;
  evaluationPhase1: string;
    verificationPhase2?: string;
  fundedSTPAccount: string;
};

const Table = ({
  TABLE_HEAD,
  TABLE_ROWS,
}: {
  TABLE_HEAD: Array<string>;
  TABLE_ROWS: Array<RowDataItem>;
}) => {
  return (
    <div
      className="bg-dark-grey w-full px-2 py-8 sm:p-8 rounded-[14px] border border-light-grey flex items-center overflow-x-auto relative"
      id="table"
    >
      <table className="w-full min-w-[600px] sm:min-w-max table-auto text-left md:text-center font-rubik font-medium">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className={`border-b border-light-grey py-4 bg-dark-grey ${index===0?"md:static sticky -left-3":""}`}>
                <p className={index===0?"pl-3 sm:pl-0":""}>{head}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = `py-6 text-left md:text-center max-w-[200px] text-xs sm:text-base ${isLast ? "" : "border-b border-light-grey"}` 
            return (
              <tr key={row.name}>
                <td className={classes + " bg-dark-grey w-[170px] md:static sticky -left-3"}>
                  <p className="text-left md:text-sm pl-3 pr-2 md:pl-0">{row.name}</p>
                </td>
                <td className={classes}>
                  <p>{row?.evaluationPhase1}</p>
                </td>
                <td className={classes}>
                  <p>
                    {row?.verificationPhase2 || row?.fundedSTPAccount}
                  </p>
                </td>
                <td className={classes}>
                  <p>
                    {row?.verificationPhase2 && row?.fundedSTPAccount}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
