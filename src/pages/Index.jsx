import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dog, Heart, Search } from "lucide-react";

const popularBreeds = [
  { name: "Labrador Retriever", description: "Friendly and outgoing" },
  { name: "German Shepherd", description: "Intelligent and versatile" },
  { name: "Golden Retriever", description: "Devoted and obedient" },
  { name: "French Bulldog", description: "Adaptable and playful" },
  { name: "Bulldog", description: "Docile and willful" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBreeds = popularBreeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-800">
          <Dog className="inline-block mr-2 mb-1" />
          Paw-some Pals
        </h1>
        
        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="about">About Dogs</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>Man's Best Friend</CardTitle>
                <CardDescription>Discover the world of canine companions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-lg">
                  Dogs have been our loyal companions for thousands of years, captivating us with their
                  unwavering loyalty, boundless affection, and incredible diversity. From tiny Chihuahuas
                  to majestic Great Danes, these remarkable animals have adapted to fill various roles in
                  human society, serving as beloved pets, working animals, and even therapists.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="A happy dog"
                  className="mx-auto object-cover w-full h-[400px] rounded-lg mb-4 shadow-lg"
                />
                <Button className="mt-4">
                  <Heart className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Popular Dog Breeds</CardTitle>
                <CardDescription>Explore some of the most beloved dog breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    type="text"
                    placeholder="Search breeds..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredBreeds.map((breed) => (
                    <Card key={breed.name} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{breed.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{breed.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-blue-800">Did You Know?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg">
              Dogs can understand up to 250 words and gestures, count up to five and perform simple mathematical calculations. Some dogs are even smarter than 2-year-old children!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
