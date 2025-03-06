export default function Money(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={props.className}>
      <path
        fill="#000"
        d="M2 22h28v2H2v-2Zm0 4h28v2H2v-2Zm22-16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 6a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      />
      <path fill="#000" d="M28 20H4a2.005 2.005 0 0 1-2-2V6a2.005 2.005 0 0 1 2-2h24a2.005 2.005 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2Zm0-14H4v12h24V6Z" />
    </svg>
  );
}
