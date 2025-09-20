export default function Sidebar() {
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
