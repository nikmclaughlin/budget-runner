import { Outlet } from "@remix-run/react";

export default function Index() {

	//TODO: conditionally render /login or /$user routes
	return (
		<>
			<h1 className="text-5xl">Budget Runner 👟</h1>
			<Outlet />
		</>
  );
}
