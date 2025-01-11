import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Performance() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Tabs defaultValue="overview" className="w-full">
        <div className="border-b">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex min-w-full h-10 items-center justify-start gap-6 bg-transparent">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="fundamentals"
                className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                Fundamentals
              </TabsTrigger>
              <TabsTrigger
                value="news-insights"
                className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                News Insights
              </TabsTrigger>
              <TabsTrigger
                value="sentiments"
                className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                Sentiments
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                Team
              </TabsTrigger>
              <TabsTrigger
                value="technicals"
                className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                Technicals
              </TabsTrigger>
              <TabsTrigger
                value="tokenomics"
                className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none"
              >
                Tokenomics
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="overview" className="mt-6">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Performance</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="text-sm text-gray-600">
                          Today&apos;s Low
                        </div>
                        <div className="font-semibold">46,930.22</div>
                      </div>
                      <div className="w-full sm:w-2/3 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative">
                        <div className="absolute -top-3 left-2/3 transform -translate-x-1/2">
                          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">
                          Today&apos;s High
                        </div>
                        <div className="font-semibold">49,343.83</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <div className="text-sm text-gray-600">52W Low</div>
                        <div className="font-semibold">16,930.22</div>
                      </div>
                      <div className="w-full sm:w-2/3 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
                      <div>
                        <div className="text-sm text-gray-600">52W High</div>
                        <div className="font-semibold">49,743.83</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="fundamentals">
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-bold">Fundamentals</h2>
                <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
                  i
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Bitcoin Price</span>
                        <span className="font-semibold">$16,815.46</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">
                          24h Low / 24h High
                        </span>
                        <span className="font-semibold">
                          $16,382.07 / $16,874.12
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">7d Low / 7d High</span>
                        <span className="font-semibold">
                          $16,382.07 / $16,874.12
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Trading Volume</span>
                        <span className="font-semibold">$23,249,202,782</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Market Cap Rank</span>
                        <span className="font-semibold">#1</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">Market Cap</span>
                        <span className="font-semibold">$323,507,290,047</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">
                          Market Cap Dominance
                        </span>
                        <span className="font-semibold">38.343%</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">
                          Volume / Market Cap
                        </span>
                        <span className="font-semibold">0.0718</span>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">All-Time High</span>
                        <div className="text-right">
                          <div className="font-semibold">
                            $69,044.77{" "}
                            <span className="text-red-500">-75.6%</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Nov 10, 2021 (about 1 year)
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-600">All-Time Low</span>
                        <div className="text-right">
                          <div className="font-semibold">
                            $67.81{" "}
                            <span className="text-green-500">24729.1%</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Jul 06, 2013 (over 9 years)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="news-insights">
          <PerformanceSkeleton />
        </TabsContent>

        <TabsContent value="sentiments">
          <PerformanceSkeleton />
        </TabsContent>

        <TabsContent value="team">
          <PerformanceSkeleton />
        </TabsContent>

        <TabsContent value="technicals">
          <PerformanceSkeleton />
        </TabsContent>

        <TabsContent value="tokenomics">
          <PerformanceSkeleton />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const PerformanceSkeleton = () => (
  <div className="space-y-8">
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="h-10 w-full"></Skeleton>
        <Skeleton className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm"></Skeleton>
      </div>
      <Skeleton className="h-96 w-full" />
    </section>
  </div>
);
