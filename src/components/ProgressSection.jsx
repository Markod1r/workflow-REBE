export default function ProgressSection() {
	return (
		<div>
			<h2 className="font-semibold mb-2">Progress</h2>
			<div className="bg-white p-4 rounded-lg shadow">
				<p className="text-sm font-medium mb-2">Course Completion</p>
				<div className="w-full bg-gray-200 rounded-full h-2">
					<div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
				</div>
				<p className="text-xs text-gray-500 mt-2">You're doing great, keep it up!</p>
			</div>
		</div>
	);
}
