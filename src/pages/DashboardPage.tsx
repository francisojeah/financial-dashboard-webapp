import { lazy } from "react";

const BalanceHistoryChart = lazy(
  () => import("../components/BalanceHistoryChart")
);
const CardDetails = lazy(() => import("../components/CardDetails"));
const DashboardLayout = lazy(() => import("../components/DashboardLayout"));
const ExpenseStatistics = lazy(() => import("../components/ExpenseStatistics"));
const QuickTransfer = lazy(() => import("../components/QuickTransfer"));
const RecentTransactions = lazy(
  () => import("../components/RecentTransactions")
);
const WeeklyActivityChart = lazy(
  () => import("../components/WeeklyActivityChart")
);

const DashboardPage = () => {
  const data = {
    deposit: [250, 140, 250, 380, 250, 250, 350],
    withdraw: [480, 350, 330, 480, 150, 390, 400],
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_30%] justify-between gap-8 lg:gap-0 w-full">
          <CardDetails />
          <RecentTransactions />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_30%] justify-between gap-8 lg:gap-0 w-full">
          <WeeklyActivityChart seriesData={data} />
          <ExpenseStatistics
            labels={["Bill Expense", "Other", "Investment", "Entertainment"]}
            percentages={[15, 35, 20, 30]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] justify-between gap-8 lg:gap-0 w-full">
          <QuickTransfer />
          <BalanceHistoryChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
