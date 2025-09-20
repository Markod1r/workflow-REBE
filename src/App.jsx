import React from "react";

function Sidebar() {
	return (
		<aside className="w-64 bg-gray-50 h-screen p-6 border-r">
			<h1 className="text-lg font-bold mb-2">AI Learning Insight</h1>
			<p className="text-sm text-gray-500 mb-6">v1.0</p>
			<nav className="space-y-4">
				<a href="#" className="flex items-center gap-2 text-blue-600 font-medium">
					<span>🏠</span> Dashboard
				</a>
				<a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
					<span>📊</span> Progress
				</a>
				<a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
					<span>💡</span> Recommendations
				</a>
				<a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
					<span>⚙️</span> Settings
				</a>
			</nav>
		</aside>
	);
}

function ProgressSection() {
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

function InsightsSection() {
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

function ToDoList() {
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

function Recommendations() {
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

function Dashboard() {
	return (
		<main className="flex-1 p-6 bg-gray-100">
			<h1 className="text-2xl font-bold mb-6">Dashboard</h1>
			<div className="grid grid-cols-3 gap-6">
				<div className="col-span-2 space-y-6">
					<ProgressSection />
					<InsightsSection />
				</div>
				<div className="space-y-6">
					<ToDoList />
					<Recommendations />
				</div>
			</div>
		</main>
	);
}

export default function App() {
	return (
		<div className="flex">
			<Sidebar />
			<Dashboard />
		</div>
	);
}
