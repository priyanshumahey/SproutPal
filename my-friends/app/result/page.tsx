import ResultCard from "@/components/ui/resultcard";

export default function Result() {
  const data = [{}, {}, {}];
  return (
    <div className="w-full">
      <div className="pt-24 text-3xl font-semibold text-center">
        we think you would get along with...
      </div>
      {data.map((d) => (
        <ResultCard />
      ))}
    </div>
  );
}
