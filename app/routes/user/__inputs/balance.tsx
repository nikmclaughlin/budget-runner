const StartingBalance = () => {
    /**TODO:
     * Refactor to use Remix <Form/> component: https://remix.run/docs/en/v1/tutorials/jokes#forms
     * Extract to component directory
     * Add state for starting balance (Read/Write from Prisma)
     * Fix styling (justify, font(s), etc.?)
    */
    return (
        <>
            <form className="border border-dashed border-black w-1/2 p-1 my-5 relative flex-initial flex-wrap">
                <h2 className="text-2xl grow ">Set your starting balance</h2>
                <label htmlFor="balance" className="-mr-2 text-xl">$</label>
                <input id="balance" name="balance" className="border border-solid border-black mx-2" type="number" step="0.01" defaultValue={"0.00"}></input>
                <button type="button" className="rounded px-2 py-1 border border-solid border-black bg-sky-700">Set</button>
            </form>
        </>
    )
}

export default function startingBalanceInput(){
    return(
        <StartingBalance />
    );
}