import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function GetStarted() {
  return (
    <Card className="w-full max-w-md bg-[#0052FE] text-white">
      <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Get Started with KoinX
            <br />
            for FREE
          </h2>
          <p className="text-base opacity-90">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>

        <div className="relative w-64 h-64">
          <Image
            src="/get-started.svg"
            alt="KoinX illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-black hover:bg-white/90 font-semibold"
        >
          Get Started for FREE
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
