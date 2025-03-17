export default function SectionDescription(props: { title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="block h-1 w-1 rounded-full bg-gray-500" />
      <span className="text-sm text-neutral-500">{props.title}</span>
      <hr className="flex-1 bg-neutral-500" />
    </div>
  );
}
