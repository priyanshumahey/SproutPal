import ResultCard from "@/components/ui/resultcard";

export default function Result() {
  return (
    <div className="w-full">
      <div className="pt-24 text-3xl font-semibold text-center">
        we think you would get along with...
      </div>
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </div>
  );
}
