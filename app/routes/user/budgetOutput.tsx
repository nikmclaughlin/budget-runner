const OutputTable = () => {
    const today = new Date(Date.now());
    return(
        <table className="table-fixed border-collapse border border-solid border-black">
            <thead className="bg-gray-500">
                <tr>
                    <th className="w-40">Date</th>
                    <th>Item</th>
                    <th>Value</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{today.toLocaleDateString()}</td>
                    <td>Starting Balance</td>
                    <td>+100.00</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}
export default function budgetOutput(){
    return(
        <div className="col-span-1">
        <h1 className="text-4xl">Budget output</h1>
        <OutputTable />
        </div>
    );
}