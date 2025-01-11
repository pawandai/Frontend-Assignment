"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
} from "recharts";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const data = [
  { date: "16 Dec", price: 42100 },
  { date: "16 Dec", price: 41800 },
  { date: "16 Dec", price: 42200 },
  { date: "16 Dec", price: 41900 },
  { date: "17 Dec", price: 42300 },
  { date: "17 Dec", price: 42500 },
  { date: "17 Dec", price: 42100 },
  { date: "17 Dec", price: 41900 },
  { date: "18 Dec", price: 42200 },
  { date: "18 Dec", price: 42500 },
  { date: "18 Dec", price: 42100 },
  { date: "18 Dec", price: 41800 },
  { date: "19 Dec", price: 42000 },
  { date: "19 Dec", price: 46400 },
  { date: "19 Dec", price: 45500 },
  { date: "19 Dec", price: 44800 },
  { date: "19 Dec", price: 43500 },
  { date: "20 Dec", price: 43000 },
  { date: "20 Dec", price: 44200 },
  { date: "20 Dec", price: 44800 },
  { date: "20 Dec", price: 44400 },
  { date: "21 Dec", price: 44600 },
  { date: "21 Dec", price: 44900 },
  { date: "21 Dec", price: 44200 },
  { date: "21 Dec", price: 43800 },
  { date: "22 Dec", price: 43400 },
  { date: "22 Dec", price: 42800 },
  { date: "22 Dec", price: 42400 },
];

export default function PriceChart() {
  return (
    <Card className="w-full max-w-4xl bg-white space-y-2">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <Image
          src="/bitcoin.svg"
          alt="Bitcoin logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-bold">Bitcoin</h2>
          <span className="text-gray-500">BTC</span>
          <Badge
            variant="secondary"
            className="rounded-md bg-gray-200 text-gray-600"
          >
            Rank #1
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-bold">$46,953.04</span>
            <Badge variant="secondary" className="bg-green-100 text-green-600">
              <ArrowUp className="mr-1 h-3 w-3" />
              2.51%
            </Badge>
            <span className="text-gray-500">(24H)</span>
          </div>
          <div className="text-gray-500 font-semibold">₹ 39,42,343</div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-lg md:text-xl font-semibold">
              Bitcoin Price Chart (USD)
            </h3>
            <Tabs defaultValue="7D" className="w-full md:w-auto">
              <TabsList className="grid grid-cols-8 bg-transparent h-8">
                {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"].map(
                  (period) => (
                    <TabsTrigger
                      key={period}
                      value={period}
                      className={`px-1 md:px-3 text-xs md:text-sm ${
                        period === "7D" ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {period}
                    </TabsTrigger>
                  )
                )}
              </TabsList>
            </Tabs>
          </div>

          <div className="h-[200px] sm:h-[300px] md:h-[400px] w-full mx-2 md:mx-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0052FE" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#0052FE" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  interval="preserveStartEnd"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis
                  domain={[41000, 47000]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  width={50}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  tickFormatter={(value: any) => `${value.toLocaleString()}`}
                  tickCount={7}
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="none"
                  fill="url(#colorPrice)"
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0052FE"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
