"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LineChart, Line, YAxis } from "recharts";
import Image from "next/image";

interface CryptoData {
  symbol: string;
  price: string;
  change: string;
  icon: string;
  chartData: { value: number }[];
  isPositive: boolean;
}

const youMayLike: CryptoData[] = [
  {
    symbol: "BNB",
    price: "$319.34",
    change: "+0.52%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: true,
  },
  {
    symbol: "SOL",
    price: "$109.33",
    change: "-2.89%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: false,
  },
  {
    symbol: "XRP",
    price: "$0.634810",
    change: "+0.78%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: true,
  },
  {
    symbol: "ADA",
    price: "$0.614869",
    change: "-1.57%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: false,
  },
  {
    symbol: "AVAX",
    price: "$41.05",
    change: "-3.78%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: false,
  },
];

const trendingCoins: CryptoData[] = [
  {
    symbol: "BTC",
    price: "$45,332.83",
    change: "+0.10%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: true,
  },
  {
    symbol: "ETH",
    price: "$2,375.15",
    change: "-0.21%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: false,
  },
  {
    symbol: "stETH",
    price: "$2,371.72",
    change: "-0.34%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: false,
  },
  {
    symbol: "UNI",
    price: "$7.3192",
    change: "-4.02%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: false,
  },
  {
    symbol: "CFG",
    price: "$0.773600",
    change: "-1.76%",
    icon: "/placeholder.svg?height=24&width=24",
    chartData: Array.from({ length: 20 }, () => ({
      value: Math.random() * 100,
    })),
    isPositive: false,
  },
];

function CryptoCard({ data }: { data: CryptoData }) {
  return (
    <Card className="w-[260px] p-4 bg-white rounded-xl border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image
            src={data.icon}
            alt={data.symbol}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="font-medium">{data.symbol}</span>
        </div>
        <span
          className={`text-sm ${
            data.isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {data.change}
        </span>
      </div>
      <div className="text-xl font-semibold mb-2">{data.price}</div>
      <div className="h-[60px] w-full">
        <LineChart width={230} height={60} data={data.chartData}>
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Line
            type="monotone"
            dataKey="value"
            stroke={data.isPositive ? "#22c55e" : "#ef4444"}
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </div>
    </Card>
  );
}

function CryptoSection({ title, data }: { title: string; data: CryptoData[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {data.map((crypto, index) => (
              <CarouselItem key={index} className="pl-4 basis-auto">
                <CryptoCard data={crypto} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 hover:bg-gray-100" />
          <CarouselNext className="absolute -right-12 hover:bg-gray-100" />
        </Carousel>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <CryptoSection title="You May Also Like" data={youMayLike} />
      <CryptoSection title="Trending Coins" data={trendingCoins} />
    </div>
  );
}
