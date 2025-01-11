"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import useTrendingCoins from "@/hooks/useTrendingCoins";

export default function TrendingCoins() {
  const { trendingCoins } = useTrendingCoins();

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-bold">
          Trending Coins (24h)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingCoins.map((coin: any) => (
            <div
              key={coin.coin_id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className={`rounded-full p-1`}>
                  <Image
                    src={coin.image}
                    alt="Title"
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                </div>
                <span className="font-medium">
                  {coin.name}
                  <span className="text-gray-500 ml-1">({coin.symbol})</span>
                </span>
              </div>
              <Badge
                variant={`destructive`}
                className={`${
                  coin.percentageChange.toFixed(2) > 0 &&
                  "text-green-500 bg-green-200"
                } font-medium`}
              >
                {coin.percentageChange.toFixed(2) > 0 ? (
                  <ArrowUp className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3" />
                )}
                {coin.percentageChange.toFixed(2)}%
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
