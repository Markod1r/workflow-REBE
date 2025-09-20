import { MdSpaceDashboard } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";
import { MdRecommend } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
	return (
		<aside className="w-2xs bg-gray-50 h-screen p-6">
			<h1 className="text-lg font-bold mb-2">AI Learning Insight</h1>
			<p className="text-sm text-gray-500 mb-6">v1.0.0</p>
			<nav className="space-y-4">
				<a href="#" className="flex items-center gap-2 text-blue-600 font-medium">
					<span>
						<MdSpaceDashboard />
					</span>
					Dashboard
				</a>
				<a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
					<span>
						<FaBarsProgress />
					</span>
					Progress
				</a>
				<a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
					<span>
						<MdRecommend />
					</span>
					Recommendations
				</a>
				<a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
					<span>
						<IoSettingsSharp />
					</span>
					Settings
				</a>
			</nav>
		</aside>
	);
}
