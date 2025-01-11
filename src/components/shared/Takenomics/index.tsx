"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

const initialData = [
  { name: "Crowdsale investors", value: 80, color: "hsl(217, 91%, 60%)" },
  { name: "Foundation", value: 20, color: "hsl(25, 95%, 53%)" },
];

export default function Tokenomics() {
  const [data, setData] = useState<Array<{
    name: string;
    value: number;
    color: string;
  }> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setData(initialData);
    } catch (err) {
      console.error("Error setting data:", err);
      setError("An error occurred while loading the chart data.");
    }
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!data) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-2 sm:flex hidden">
      <Card>
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">Tokenomics</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Initial Distribution</h3>

            <div className="flex items-center gap-8">
              <div className="w-60 h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-900">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
              ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
              bibendum amet enim sit eget leo amet. At metus orci augue fusce
              eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh
              sodales massa habitasse urna felis augue. Gravida aliquam
              fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget
              justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem
              posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut.
              Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
