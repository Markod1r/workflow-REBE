import React from "react";
import Sidebar from "./components/Sidebar";
import ProgressSection from "./components/ProgressSection";
import InsightsSection from "./components/InsightsSection";
import ToDoList from "./components/ToDoList";
import Recommendations from "./components/Recommendations";



export default function App() {
	return (
		<div className="flex">
			<Sidebar />
			<Dashboard />
		</div>
	);
}
