export default function Tag(props: { tag: string }) {
  return <span className="inline-block rounded-[4px] bg-loafer-900 p-2 text-sm font-medium text-loafer-300">{props.tag}</span>;
}
