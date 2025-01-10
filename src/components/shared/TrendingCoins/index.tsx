import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const trendingCoins = [
  {
    name: "Ethereum",
    symbol: "ETH",
    percentage: "8.21",
    iconUrl: "/ethereum.svg",
    iconBg: "bg-[#627EEA]",
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    percentage: "5.26",
    iconUrl: "/bitcoin.svg",
    iconBg: "bg-[#F7931A]",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    percentage: "4.32",
    iconUrl: "/polygon.svg",
    iconBg: "bg-[#8247E5]",
  },
];

export default function TrendingCoins() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-bold">
          Trending Coins (24h)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingCoins.map((coin) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className={`rounded-full p-1 ${coin.iconBg}`}>
                  <Image
                    src={coin.iconUrl}
                    alt={`${coin.name} logo`}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <span className="font-medium">
                  {coin.name}
                  <span className="text-gray-500 ml-1">({coin.symbol})</span>
                </span>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-600 font-medium"
              >
                <ArrowUp className="mr-1 h-3 w-3" />
                {coin.percentage}%
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
