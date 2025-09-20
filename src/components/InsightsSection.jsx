export default function InsightsSection() {
	return (
		<div>
			<h2 className="font-semibold mb-2">Insights</h2>
			<div className="space-y-3">
				<div className="flex items-center bg-white p-4 rounded-lg shadow">
					<div className="flex-1">
						<p className="font-medium">Personalized Tip</p>
						<p className="text-sm text-gray-600">
							Focus on understanding the core concepts of machine learning before diving into
							complex algorithms.
						</p>
					</div>
					<img src="https://via.placeholder.com/60" alt="tip" className="w-16 h-16 rounded" />
				</div>
				<div className="flex items-center bg-white p-4 rounded-lg shadow">
					<div className="flex-1">
						<p className="font-medium">Motivational Quote</p>
						<p className="text-sm text-gray-600">
							"The only way to do great work is to love what you do." – Steve Jobs
						</p>
					</div>
					<img src="https://via.placeholder.com/60" alt="quote" className="w-16 h-16 rounded" />
				</div>
			</div>
		</div>
	);
}
