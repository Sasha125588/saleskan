"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Apr", total: 72, success: 58 },
  { month: "May", total: 103, success: 77 },
  { month: "Jun", total: 128, success: 92 },
  { month: "Jul", total: 144, success: 113 },
  { month: "Aug", total: 167, success: 125 },
  { month: "Sep", total: 132, success: 98 },
  { month: "Oct", total: 189, success: 156 },
  { month: "Nov", total: 213, success: 176 },
  { month: "Dec", total: 241, success: 203 },
  { month: "Jan", total: 268, success: 224 },
  { month: "Feb", total: 312, success: 248 },
  { month: "Mar", total: 330, success: 267 }
];

const chartConfig = {
  total: {
    label: "Total Transactions",
    color: "#275347",
  },
  success: {
    label: "Successful Transactions ",
    color: "#adde33",
  },
} satisfies ChartConfig

export function Activity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="font-semibold text-2xl">
            Transaction Activity
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <span className="bg-[#275347] p-[6px] rounded-full"></span>
              <p className="font-medium text-base text-[#717171]">Total Transactions</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="bg-[#adde33] p-[6px] rounded-full"></span>
              <p className="font-medium text-base text-[#717171]">Success Transactions</p>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#275347"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#adde33"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor=""
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="success"
              type="natural"
              fill="#adde33"
              fillOpacity={0.05}
              stroke="#adde33"
              stackId="a"
            />
            <Area
              dataKey="total"
              type="natural"
              fill="#275347"
              fillOpacity={0.05}
              stroke="#275347"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
