export default function HealthCross(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={props.className}>
      <path
        fill="#000"
        d="M19 28h-6a2.002 2.002 0 0 1-2-2v-5H6a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h5V6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v5h5a2.002 2.002 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2h-5v5a2.003 2.003 0 0 1-2 2ZM6 13v6h7v7h6v-7h7v-6h-7V6h-6v7H6Z"
      />
    </svg>
  );
}
