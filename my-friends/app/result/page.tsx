import ResultCard from "@/components/ui/resultcard";

export default function Result() {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="w-full">
      <div className="pt-24 text-3xl font-semibold text-center">
        your top friend matches
      </div>
      <div className="w-full grid grid-cols-1 mt-8 mb-16">
        {data.map((d, i) => (
          <div className="flex m-auto">
            <div className="font-bold mr-8 font-3xl">{`${d}.`}</div>
            <ResultCard />
          </div>
        ))}
      </div>
    </div>
  );
}
