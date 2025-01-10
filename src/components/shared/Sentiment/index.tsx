import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Newspaper, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Sentiment() {
  const events = [
    {
      icon: <Newspaper className="w-6 h-6" />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del",
    },
    // Additional events for demonstration
    {
      icon: <Newspaper className="w-6 h-6" />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      title: "Another important market event that impacts trading.",
      description:
        "Additional market news and updates that provide context about the current trading environment and potential future movements.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
      title: "Market trend analysis and future predictions.",
      description:
        "Detailed analysis of market trends and expert predictions about potential future market movements and trading opportunities.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Sentiment</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-700">Key Events</h3>
            <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
              i
            </div>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {events.map((event, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/2"
                  >
                    <Card className={`${event.bgColor}`}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div
                            className={`w-12 h-12 rounded-full ${event.iconBg} flex items-center justify-center text-white shrink-0`}
                          >
                            {event.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2">
                              {event.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Analyst Estimates
          </h3>
          <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
            i
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-4xl font-bold text-green-500">76%</span>
          </div>

          <div className="flex-1 space-y-4 min-w-[200px]">
            <div className="flex items-center gap-4">
              <span className="w-10 text-sm text-gray-600">Buy</span>
              <Progress
                value={76}
                className="h-2 bg-gray-200"
                indicatorColor="bg-green-500"
              />
              <span className="w-10 text-sm text-gray-600">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 text-sm text-gray-600">Hold</span>
              <Progress
                value={8}
                className="h-2 bg-gray-200"
                indicatorColor="bg-gray-400"
              />
              <span className="w-10 text-sm text-gray-600">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 text-sm text-gray-600">Sell</span>
              <Progress
                value={16}
                className="h-2 bg-gray-200"
                indicatorColor="bg-red-500"
              />
              <span className="w-10 text-sm text-gray-600">16%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
