import BalanceHistoryChart from "../components/BalanceHistoryChart";
import CardDetails from "../components/CardDetails";
import DashboardLayout from "../components/DashboardLayout";
import ExpenseStatistics from "../components/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer";
import RecentTransactions from "../components/RecentTransactions";
import WeeklyActivityChart from "../components/WeeklyActivityChart";

const DashboardPage = () => {
  const data = {
	  deposit: [250, 140, 250, 380, 250, 250, 350],
	  withdraw: [480, 350, 330, 480, 150, 390, 400]
	};
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_30%] justify-between w-full">
          <CardDetails />
          <RecentTransactions />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_30%] justify-between w-full">
          <WeeklyActivityChart seriesData={data} />
          <ExpenseStatistics labels={["Rent", "Food", "Transportation", "Entertainment"]} percentages={[35, 25, 20, 20]}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] justify-between w-full">
          <QuickTransfer />
          <BalanceHistoryChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
