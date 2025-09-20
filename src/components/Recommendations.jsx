export default function Recommendations() {
	const items = [
		{ title: "Learning Path: AI Fundamentals", desc: "A comprehensive path to master AI basics" },
		{ title: "Module: Intro to Machine Learning", desc: "Your first step into the world of ML" },
		{ title: "Path: Advanced AI Techniques", desc: "Explore cutting-edge AI methodologies" },
	];
	return (
		<div>
			<h2 className="font-semibold mb-2">Recommendations</h2>
			<div className="space-y-3">
				{items.map((item, idx) => (
					<div key={idx} className="bg-white p-4 rounded-lg shadow">
						<p className="font-medium">{item.title}</p>
						<p className="text-sm text-gray-600">{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
}
