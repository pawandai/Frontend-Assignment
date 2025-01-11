"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useTrendingCoins from "@/hooks/useTrendingCoins";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CryptoData {
  id: string;
  price: number;
  name: string;
  symbol: string;
  marketCapRank: number;
  image: string;
  percentageChange: number;
  sparkline: string;
}

function CryptoSection({ title, data }: { title: string; data: CryptoData[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative">
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto relative">
          <CarouselContent className="-ml-1">
            {data.map((item: CryptoData) => (
              <CarouselItem
                key={item.id}
                className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="aspect-video flex items-center justify-center p-6">
                      <div className="w-[260px] bg-white border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src={item.image}
                              alt={item.id}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <span className="font-medium">{item.symbol}</span>
                          </div>
                          <span
                            className={`text-sm ${
                              item.percentageChange > 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {item.percentageChange.toFixed(2)}%
                          </span>
                        </div>
                        <div className="text-xl font-semibold mb-2">
                          $ {item.price.toFixed(2)}
                        </div>
                        <Image
                          src={item.sparkline}
                          width={200}
                          height={32}
                          alt={item.id}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full p-0 ml-4"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full p-0 mr-4"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}

export default function Footer() {
  const { trendingCoins } = useTrendingCoins();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <CryptoSection title="You May Also Like" data={trendingCoins} />
      <CryptoSection title="Trending Coins" data={trendingCoins} />
    </div>
  );
}
