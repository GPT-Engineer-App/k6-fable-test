import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
];

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Man's Best Friend</CardTitle>
            <CardDescription>Discover the world of canine companions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dogs have been domesticated for thousands of years and are known for their loyalty,
              affection, and diverse breeds. They play various roles in human society, from
              beloved pets to working animals in fields like law enforcement and therapy.
            </p>
            <img
              src="/placeholder.svg"
              alt="A happy dog"
              className="mx-auto object-cover w-full h-[300px] rounded-lg mb-4"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              {popularBreeds.map((breed) => (
                <li key={breed} className="mb-2">{breed}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
