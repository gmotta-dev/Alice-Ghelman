export default function CheckMarkFilled(props: { className?: string }) {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className || ""}>
      <path
        d="M12.5 1C6.5 1 1.5 6 1.5 12C1.5 18 6.5 23 12.5 23C18.5 23 23.5 18.1 23.5 12C23.5 5.9 18.6 1 12.5 1ZM10.9 16.3L7 12.4L8.3 11.2L11 13.9L16.8 8.1L18.1 9.4L10.9 16.3Z"
        fill="#1C2211"
      />
    </svg>
  );
}
