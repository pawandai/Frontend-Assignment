import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Receipt } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 border rounded-md">
      <section className="space-y-4">
        <h2 className="text-xl font-bold">About Bitcoin</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">What is Bitcoin?</h3>
            <p className="text-gray-600 text-sm">
              Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +2.36% in the last 24 hours. It is
              currently -2.00% from its 7-day all-time high of $18,366.66, and
              3.33% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>

          <div className="space-y-4 text-gray-600 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat et
              lacinia pharetra. Proin et lectus mauris vitam vestibulum sed. Non
              nisi odio euismod vitae facilisi diam et sed. Quam scelerisque
              fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna
              volutpat pretium enim facilisis enim. Morbi suspendisse fermentum
              sapien morbi sodales odio sed rhoncus.
            </p>

            <p>
              Diam praesent massa dapibus magna aliquam a dictum volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              praesent elit et enim nec. Nam purus placerat vestibulum sed
              viverra ut. Elementum lorem eget eros egestas cursus nunc. Mauris
              faucibus diam mi nunc praesent massa turpis a. Integer dignissim
              augue viverra nulla et quis lobortis pharetra. Integer
              pellentesque ipsum convallis ultricies et.
            </p>

            <p>
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti lacus lacinia
              sagittis enim massa amet dui. Purus ultricies tincidunt volutpat
              in eget. Ullamcorper dui
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">Already Holding Bitcoin?</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Calculate your Profits</h4>
                  <Button variant="outline" className="bg-white">
                    Check Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <Receipt className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Calculate your tax</h4>
                  <Button variant="outline" className="bg-white">
                    Check Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
