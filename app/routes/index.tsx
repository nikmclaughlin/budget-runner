export default function Index() {
  
	const StartingBalance = () => {
		return (
			<>
				<form className="border border-dashed border-black w-1/2 p-1 my-5 relative flex-auto flex-wrap justify-center">
					<h2 className="text-2xl grow">Set your starting balance</h2>
					<label htmlFor="balance" className="-mr-2 text-xl">$</label>
					<input id="balance" name="balance" className="border border-solid border-black mx-2" type="number" step="0.01" defaultValue={"0.00"}></input>
					<button className="rounded px-2 py-1 border border-solid border-black bg-sky-700">Set</button>
				</form>
			</>
		)
	}

	return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-5xl">Budget Runner 👟</h1>
			<StartingBalance />
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
