import { db } from "~/utils/db.server";
import { Form } from "@remix-run/react";

export async function action({ request }){
	const body = await request.formData();
	
	// validate data

	//prepare data for db
	// const submittedFields = Object.fromEntries(body);
	// submittedFields.
	// console.log(submittedFields);


	// // submit data to db
	// const newItem = await db.lineItem.create({
// 		data: submittedFields ,
// });

	return null;

}

const ItemAdd = () => {
	/**TODO:
	 * Refactor to use Remix <Form/> component: https://remix.run/docs/en/v1/tutorials/jokes#forms
		* Extract to component directory
		* Wire up to write to Prisma
		* Fix styling (justify, font(s), etc.?)
	*/
	return(
		<>
		<Form method="post" className="border border-dashed border-black w-1/2 p-1 my-5 relative flex-auto flex-wrap">
				<fieldset>
					<legend className="text-2xl grow ">Add a line item</legend>
					<input type="text" name="label" placeholder="Item Label"></input>
					<input type="number" id="amount" name="amount" step="0.01" placeholder="$00.00" className="w-20"></input>
					<input type="radio" id="plus" name="sign" value="true"></input>
					<label htmlFor="plus">+</label>
					<input type="radio" id="minus" name="sign" value="false"></input>
					<label htmlFor="minus">-</label>
					{/*TODO: Turn the 'sign' selector into a toggle, e.g.: https://flowbite.com/docs/forms/toggle/ */}
					<br></br>
					<label htmlFor="startDate" className="font-bold">Start Date </label>
					<input type="date" id="startDate" name="startDate" className="border border-black rounded"></input>
					<br></br>
					<p className="font-bold">Frequency</p>
					<span>This occurs every </span><input type="number" name="frequencyVal" step="1" className="w-10 border border-black rounded"></input>
					<select id="freqUnit" name="frequencyUnit">
						<option value="days">days</option>
						<option value="weeks">weeks</option>
						<option value="months">months</option>
						<option value="years">years</option>
					</select>
					<br></br>
					<input type="number" id="duration" name="duration" step="1" title="Leave blank for a never-ending item" className="w-10 border border-black rounded"></input>
					<label htmlFor="duration" title="Leave blank for a never-ending item" defaultValue={''} className="font-bold">Duration (optional)</label>
					<br></br>
					<input type="submit" value="Add to budget" className="rounded px-2 py-1 border border-solid border-black bg-green-800"></input>
				</fieldset>
			</Form>
		</>
	);
}

export default function addItem(){
    return(
        <ItemAdd/>
    );
}