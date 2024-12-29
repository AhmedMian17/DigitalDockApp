import { Route, Routes } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Components/Layout";
import SessionList from "./Pages/SessionList";
import SessionHome from "./Pages/SessionHome";
import StartTruck from "./Pages/StartTruck";
import Run from "./Pages/Run";
import FreezerRun from "./Pages/FreezerRun";
import LoadComplete from "./Pages/LoadComplete";
import DockStatusHome from "./Pages/DockStatusHome";
import TruckStatus from "./Pages/TruckStatus";

export default function Router() {

	return (
			<> 
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="/sessions" element={<SessionList />} />
						<Route path="/sessions/:sessionID" element={<SessionHome />} />
						<Route path="/sessions/:sessionID/truck/:transitCode" element={<StartTruck />} />
						<Route path="/sessions/:sessionID/truck/:transitCode/runs/:run" element={<Run />} />
						<Route path="/sessions/:sessionID/truck/:transitCode/freezer/:freezerRun" element={<FreezerRun />} />
						<Route path="/sessions/:sessionID/truck/:transitCode/complete" element={<LoadComplete />} />
						<Route path="/sessions/:sessionID/status" element={<DockStatusHome />} />
						<Route path="/sessions/:sessionID/status/:transitCode" element={<TruckStatus />} />
					</Route>
				</Routes>
			</>
	)
}