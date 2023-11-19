"use client";

import { useQuery, gql } from "@apollo/client";

const query = gql`
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

const decideOpacity = (value: number, key: string) => {
  if (value < 1) {
    return (
      <div
        key={key}
        className="border border-slate-200 bg-slate-100 rounded-sm w-5 h-5"
      ></div>
    );
  } else if (value < 5) {
    return (
      <div
        key={key}
        className="border border-slate-300 bg-teal-300 rounded-sm w-5 h-5 opacity-90"
      ></div>
    );
  } else if (value < 10) {
    return (
      <div
        key={key}
        className="border border-slate-300 bg-teal-500 rounded-sm w-5 h-5 opacity-90"
      ></div>
    );
  } else if (value < 20) {
    return (
      <div
        key={key}
        className="border border-slate-300 bg-teal-600 rounded-sm w-5 h-5 opacity-90"
      ></div>
    );
  } else {
    return (
      <div
        key={key}
        className="border border-slate-300 bg-teal-700 rounded-sm w-5 h-5 opacity-90"
      ></div>
    );
  }
};

export const GitChart = () => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      userName: "ASpooky",
    },
  });
  if (loading) {
    return (
      <>
        <div>GitChart</div>
        <div className="w-2/3 h-64 border-2 border-dashed border-slate-200 flex justify-center items-center">
          読み込み中
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div>GitChart</div>
        <div className="w-2/3 h-64 border-2 border-dashed border-slate-200 flex justify-center items-center">
          読み込み失敗
        </div>
      </>
    );
  }

  const weeks = data.user.contributionsCollection.contributionCalendar.weeks;

  if (weeks.length < 1) {
    return (
      <>
        <div>GitChart</div>
        <div>読み込み失敗</div>
      </>
    );
  }

  return (
    <>
      <div>GitChart</div>
      <div className="grid grid-rows-7 grid-flow-col gap-2 overflow-x-auto p-1 w-2/3">
        {weeks.slice(20).map((week: any) => {
          return week.contributionDays.map((day: any) => {
            return decideOpacity(day.contributionCount, day.date);
          });
        })}
      </div>
    </>
  );
};
