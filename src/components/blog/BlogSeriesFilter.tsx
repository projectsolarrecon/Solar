import { blogSeries, type BlogSeriesId } from "../../data/blogCollections";

export type BlogSeriesFilterValue = "all" | BlogSeriesId;

interface BlogSeriesFilterProps {
  activeSeries: BlogSeriesFilterValue;
  onChange: (series: BlogSeriesFilterValue) => void;
}

export default function BlogSeriesFilter({
  activeSeries,
  onChange,
}: BlogSeriesFilterProps) {
  const options: Array<{ value: BlogSeriesFilterValue; label: string }> = [
    { value: "all", label: "All series" },
    ...Object.values(blogSeries).map((series) => ({
      value: series.id,
      label: series.title,
    })),
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm font-semibold text-slate-700">Series:</span>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeSeries === option.value
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-700 hover:bg-slate-100"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
