interface HEAD {
    title: string,
    subtitle: string,
}

interface ROWS {
    name: string,
    step1: string,
    step2: string,
    step3: string,
}

const Table = ({ TABLE_HEAD, TABLE_ROWS }: {TABLE_HEAD:Array<HEAD>, TABLE_ROWS:Array<ROWS>}) => {
  return (
    <div className="bg-dark-grey w-full p-8 rounded-[14px] border border-light-grey flex items-center overflow-x-auto" id="table">
      <table className="w-full min-w-[600px] sm:min-w-max table-auto text-cemter font-rubik font-medium">
        <thead>
          <tr>
            {TABLE_HEAD.map((head,index) => (
              <th key={index} className="border-b border-light-grey py-4">
                <p >{head.title}</p>
                <p className="font-normal opacity-50">{head.subtitle}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, step1, step2, step3 }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-6 text-center" : "py-6 border-b border-light-grey text-center";

            return (
              <tr key={name}>
                <td className={classes}>
                  <p className="text-left text-sm">{name}</p>
                </td>
                <td className={classes}>
                  <p className="text-base">{step1}</p>
                </td>
                <td className={classes}>
                  <p className="text-base">{step2}</p>
                </td>
                <td className={classes}>
                  <p className="text-base">{step3}</p>
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
