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
      className="bg-dark-grey w-full p-8 rounded-[14px] border border-light-grey flex items-center overflow-x-auto"
      id="table"
    >
      <table className="w-full min-w-[600px] sm:min-w-max table-auto text-cemter font-rubik font-medium">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className="border-b border-light-grey py-4">
                <p>{head}</p>
                {/* <p className="font-normal opacity-50">{head.subtitle}</p> */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast
              ? "py-6 text-center max-w-[200px]"
              : "py-6 border-b border-light-grey text-center max-w-[200px]";

            return (
              <tr key={row.name}>
                <td className={classes}>
                  <p className="text-left text-sm">{row.name}</p>
                </td>
                <td className={classes}>
                  <p className="text-base">{row?.evaluationPhase1}</p>
                </td>
                <td className={classes}>
                  <p className="text-base">
                    {row?.verificationPhase2 || row?.fundedSTPAccount}
                  </p>
                </td>
                <td className={classes}>
                  <p className="text-base">
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
