import ProgressSection from "../components/ProgressSection";
import InsightsSection from "../components/InsightsSection";
import ToDoList from "../components/ToDoList";
import Recommendations from "../components/Recommendations";

export default function Dashboard() {
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
