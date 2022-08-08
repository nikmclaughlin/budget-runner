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
					<button type="button" className="rounded px-2 py-1 border border-solid border-black bg-sky-700">Set</button>
				</form>
			</>
		)
	}

	const ItemEditor = () => {
		return(
			<>
				<form className="border border-dashed border-black w-1/2 p-1 my-5 relative flex-auto flex-wrap">
					<fieldset>
						<legend className="text-2xl grow ">Add a line item</legend>
						<input type="text" placeholder="Item Label"></input>
						<input type="number" id="amount" step="0.01" placeholder="$00.00" className="w-20"></input>
						<input type="radio" id="plus" name="sign"></input>
						<label htmlFor="plus">+</label>
						<input type="radio" id="minus" name="sign"></input>
						<label htmlFor="minus">-</label>
						{/*TODO: Turn the 'sign' selector into a toggle, e.g.: https://flowbite.com/docs/forms/toggle/ */}
						<br></br>
						<label htmlFor="startDate" className="font-bold">Start Date </label>
						<input type="date" id="startDate" className="border border-black rounded"></input>
						<br></br>
						<p className="font-bold">Frequency</p>
						<span>This occurs every </span><input type="number" step="1" className="w-10 border border-black rounded"></input>
						<select id="freqUnit" name="freqUnit">
							<option value="days">days</option>
							<option value="weeks">weeks</option>
							<option value="months">months</option>
							<option value="years">years</option>
						</select>
						<br></br>
						<input type="number" id="duration" step="1" className="w-10 border border-black rounded"></input>
						<label htmlFor="duration" className="font-bold">Duration (optional)</label>
						<br></br>
						<input type="submit" value="Add to budget" className="rounded px-2 py-1 border border-solid border-black bg-green-800"></input>
					</fieldset>
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
