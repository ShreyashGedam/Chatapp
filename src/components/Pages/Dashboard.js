import { Sidebar } from "./Sidebar";

export const Dashboard = ({ id }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Sidebar id={id} />
    </div>
  );
};
