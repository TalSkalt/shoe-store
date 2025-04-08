
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const shoes = [
  { id: 1, name: "נעל ספורט אדומה", price: 299, image: "/shoes/red.jpg", tag: "חדש!" },
  { id: 2, name: "נעל ריצה שחורה", price: 349, image: "/shoes/black.jpg" },
  { id: 3, name: "נעל יום-יום לבנה", price: 259, image: "/shoes/white.jpg" },
  { id: 4, name: "נעל שטח חומה", price: 399, image: "/shoes/brown.jpg", tag: "הכי נמכרת" },
  { id: 5, name: "נעל ספורט ירוקה", price: 279, image: "/shoes/green.jpg" },
  { id: 6, name: "נעל אופנתית כחולה", price: 329, image: "/shoes/blue.jpg" },
  { id: 7, name: "נעל טיולים אפורה", price: 369, image: "/shoes/gray.jpg" },
  { id: 8, name: "נעל אלגנטית שחורה", price: 459, image: "/shoes/elegant.jpg" },
  { id: 9, name: "נעל צבעונית קיצית", price: 239, image: "/shoes/colorful.jpg", tag: "קיץ 2025" },
  { id: 10, name: "נעל ספורט לילדים", price: 199, image: "/shoes/kids.jpg" },
];

export default function ShoeStore() {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="text-yellow-400 animate-pulse" />
        <h1 className="text-2xl sm:text-3xl font-bold text-center">ברוכים הבאים לחנות הנעליים שלי</h1>
        <Sparkles className="text-yellow-400 animate-pulse" />
      </div>
      <p className="text-center text-sm text-gray-600 mb-6">הנעליים הכי שוות במחירים הכי טובים בישראל 🚀</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shoes.map((shoe) => (
          <Card key={shoe.id} className="rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform">
            <div className="relative">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-56 sm:h-64 object-cover"
              />
              {shoe.tag && (
                <Badge className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                  {shoe.tag}
                </Badge>
              )}
            </div>
            <CardContent className="p-4 flex flex-col gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{shoe.name}</h2>
              <p className="text-base sm:text-lg text-gray-700">₪{shoe.price}</p>
              <Button className="w-full text-base py-2 sm:py-3 bg-blue-600 hover:bg-blue-700">לקנייה</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
