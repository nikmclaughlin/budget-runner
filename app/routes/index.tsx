export default function Index() {
  
	const StartingBalance = () => {
		/**TODO:
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
					<button className="rounded px-2 py-1 border border-solid border-black bg-sky-700">Set</button>
				</form>
			</>
		)
	}

	const ItemEditor = () => {
		return(
			<>
				<form className="border border-dashed border-black w-1/2 p-1 my-5 relative flex-initial flex-wrap">
					<h2 className="text-2xl grow ">Add a line item</h2>
					<input type="text" placeholder="label"></input>
					<input type="number" step="0.01" defaultValue={"0.00"}></input>
					{/* <figure className="flex-1 flex-column justify-center select-none">
						<div className="flex relative bg-gray-400 self-center after:content-['-'] before:content-['+']">
							<input id="c" type="checkbox" />
							<label htmlFor="c" className="absolute m-0 ">
								<div className="relative bg-green-400 w-1/2"></div>    
							</label>
						</div>
					</figure> */}
				</form>
			</>
		);

	}

	return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-5xl">Budget Runner 👟</h1>
			<StartingBalance />
			<ItemEditor />
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
