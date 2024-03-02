import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function form() {
  return (
    <main>
      <div className="w-3/5 m-auto">
        <div className="mt-56 text-4xl font-semibold text-center">
          what is your name?
        </div>
        <Input className="mt-8" placeholder="name" />
      </div>
      <Button>next</Button>
    </main>
  );
}
