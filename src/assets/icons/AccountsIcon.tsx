import { CustomIconProps } from "./DashboardIcon";

const AccountsIcon = ({ isActive }: CustomIconProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_14_1290)">
        <path
          d="M12.3218 12.0426C13.9762 12.0426 15.4088 11.4492 16.5794 10.2785C17.7499 9.10793 18.3433 7.67571 18.3433 6.02109C18.3433 4.36705 17.7499 2.93463 16.5792 1.76372C15.4085 0.593374 13.976 0 12.3218 0C10.6672 0 9.23494 0.593374 8.0644 1.76391C6.89386 2.93444 6.30029 4.36686 6.30029 6.02109C6.30029 7.67571 6.89386 9.10813 8.06459 10.2787C9.23532 11.449 10.6677 12.0426 12.3218 12.0426Z"
          fill={isActive ? "#232323" : "#B1B1B1"}
        />
        <path
          d="M22.8579 19.2237C22.8241 18.7366 22.7558 18.2052 22.6553 17.644C22.5538 17.0787 22.4232 16.5443 22.2668 16.0558C22.1052 15.5509 21.8855 15.0523 21.6139 14.5745C21.332 14.0786 21.0009 13.6468 20.6293 13.2915C20.2408 12.9197 19.7651 12.6209 19.215 12.4028C18.6668 12.186 18.0593 12.0761 17.4095 12.0761C17.1543 12.0761 16.9075 12.1808 16.4309 12.4912C16.1375 12.6825 15.7944 12.9037 15.4114 13.1484C15.0839 13.3571 14.6402 13.5526 14.0923 13.7296C13.5576 13.9026 13.0148 13.9903 12.479 13.9903C11.9432 13.9903 11.4006 13.9026 10.8654 13.7296C10.318 13.5528 9.87434 13.3573 9.54723 13.1486C9.16786 12.9062 8.82454 12.6849 8.5268 12.491C8.05073 12.1806 7.80373 12.0759 7.54852 12.0759C6.8985 12.0759 6.2912 12.186 5.74322 12.403C5.19352 12.6207 4.71764 12.9195 4.32873 13.2917C3.95737 13.6472 3.62606 14.0788 3.34454 14.5745C3.07312 15.0523 2.85339 15.5507 2.69165 16.056C2.53544 16.5444 2.40479 17.0787 2.30331 17.644C2.2028 18.2044 2.13451 18.736 2.10075 19.2243C2.06757 19.7026 2.05078 20.1991 2.05078 20.7005C2.05078 22.0055 2.46563 23.062 3.28369 23.8412C4.09164 24.61 5.16071 25.0001 6.46076 25.0001H18.4984C19.7985 25.0001 20.8672 24.6102 21.6753 23.8412C22.4936 23.0626 22.9084 22.0059 22.9084 20.7003C22.9082 20.1966 22.8912 19.6998 22.8579 19.2237Z"
          fill={isActive ? "#232323" : "#B1B1B1"}
        />
      </g>
      <defs>
        <clipPath id="clip0_14_1290">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AccountsIcon;
