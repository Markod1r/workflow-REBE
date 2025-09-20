export default function ToDoList() {
	return (
		<div>
			<h2 className="font-semibold mb-2">Adaptive To-Do List</h2>
			<div className="bg-white p-4 rounded-lg shadow space-y-2">
				<label className="flex items-center gap-2">
					<input type="checkbox" defaultChecked /> Review the basics of neural networks
				</label>
				<label className="flex items-center gap-2">
					<input type="checkbox" /> Practice coding a simple AI model
				</label>
				<label className="flex items-center gap-2">
					<input type="checkbox" /> Read the latest research paper on AI ethics
				</label>
			</div>
		</div>
	);
}
