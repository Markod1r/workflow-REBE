import { MdSpaceDashboard } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Anchor({ to, text, children }) {
	return (
		<>
			<NavLink
				to={to}
				className="flex items-center gap-2 text-gray-600 hover:text-blue-600 focus:text-blue-600 font-medium"
			>
				<span>{children}</span>
				{text}
			</NavLink>
		</>
	);
}

export default function Sidebar() {
	return (
		<aside className="w-2xs bg-gray-50 h-screen p-6">
			<h1 className="text-lg font-bold mb-2">AI Learning Insight</h1>
			<p className="text-sm text-gray-500 mb-6">v1.0.0</p>
			<nav className="space-y-4">
				<Anchor to={"/"} text={"Dashboard"}>
					<MdSpaceDashboard />
				</Anchor>
				<Anchor to={"/progress"} text={"Progress"}>
					<FaBarsProgress />
				</Anchor>
				<Anchor to={"/recommendations"} text={"Recommendations"}>
					<FaLightbulb />
				</Anchor>
				<Anchor to={"/settings"} text={"Settings"}>
					<IoSettingsSharp />
				</Anchor>
			</nav>
		</aside>
	);
}
