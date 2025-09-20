import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import { Routes, Route, Outlet } from "react-router";

function Layout() {
	return (
		<div className="flex">
			<Sidebar />
			<Outlet />
		</div>
	);
}

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Dashboard />} />
			</Route>
			<Route path="/progress" element={<Layout />}>
				<Route index element={<Progress />} />
			</Route>
		</Routes>
	);
}
