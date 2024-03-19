import { Typography, Card, CardContent } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

interface FollowerChartProps {
  follower: number
}

interface StreamChartProps {
  streams: number
}

const getDay = (days: number) => {
  var date = new Date();
  date.setDate(date.getDate() - days);
  return date.toLocaleDateString("de-DE");
}

export const FollowerChart = (props: FollowerChartProps) => {
  const { follower } = props;
  const [chartData, setChartData] = useState<number[]>([]);
  const [chartDates, setChartDates] = useState<number[]>([]);

  useEffect(() => {

    let newData: number[] = [follower];
    for (let i = 1; i < 180; i++) {
      let random = Math.floor(Math.random() * (101.5 - 99)) + 99;
      newData.push((newData[newData.length - 1] * random) / 100);
    }
    setChartData(newData);
  }, [follower, setChartData]);

  useEffect(() => {
    let newData: number[] = [];
    for (let i = 1; i <= 180; i++) {
      newData.push(i);
    }
    setChartDates(newData);
  }, []);

  return (
    <Card sx={{ width: "100%" }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
      Follower auf Spotify
      </Typography>
      <LineChart
        sx={{ color: "red", m: 2 }}
        xAxis={[
          {
            id: "Datum",
            data: chartDates,
            valueFormatter: (value) => getDay(value),
            reverse: true,
          },
        ]}
        series={[
          {
            data: chartData,
            area: true,
            color: "#1DB954",
            showMark: false,
          },
        ]}
        height={300}
      />
    </CardContent>
  </Card>
  );
}

export const StreamChart = (props: StreamChartProps) => {
  const { streams } = props;
  const [chartData, setChartData] = useState<number[]>([]);
  const [chartDates, setChartDates] = useState<number[]>([]);

  useEffect(() => {
    let newData: number[] = [streams];
    for (let i = 1; i < 180; i++) {
      let random = Math.floor(Math.random() * (108 - 93)) + 93;
      newData.push((newData[newData.length - 1] * random) / 100);
    }
    setChartData(newData);
  }, [streams, setChartData]);

  useEffect(() => {
    let newData: number[] = [];
    for (let i = 1; i <= 180; i++) {
      newData.push(i);
    }
    setChartDates(newData);
  }, []);

  return (
    <Card sx={{ width: "100%" }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
      Streams auf Spotify
      </Typography>
      <LineChart
        sx={{ color: "red", m: 2 }}
        xAxis={[
          {
            id: "Datum",
            data: chartDates,
            valueFormatter: (value) => getDay(value),
            reverse: true,
          },
        ]}
        series={[
          {
            data: chartData,
            area: true,
            color: "#1DB954",
            showMark: false,
          },
        ]}
        height={300}
      />
    </CardContent>
  </Card>
  );
}

export default FollowerChart;