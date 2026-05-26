import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";

export default function Home() {
  return (
    <div className="p-10 space-y-4">
      <Button>Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Card content</p>
        </CardContent>
      </Card>
      <section className="bg-background min-h-screen flex items-center px-10">
        <div className="space-y-6">
          <p className="text-label">Private Chef Sweden</p>
          <h1 className="text-5xl font-bold text-foreground">
            Experience Fine Dining
          </h1>
          <p className="text-muted-foreground max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos modi,
            saepe sapiente enim sunt unde atque, sit, animi natus earum debitis
            temporibus. Voluptatibus iste quibusdam neque sequi corporis error
            autem.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90">
            Button
          </button>
        </div>
      </section>

      <p className="text-label">Private Chef Sweden</p>

      <button className="btn-primary">Reserve</button>
    </div>
  );
}
