const LogoutIcon = ({
  onClick = () => console.log("===press===="),
}: {
  onClick?: () => void;
}) => (
  <svg
    className="cursor-pointer"
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    onClick={onClick}
  >
    <path
      d="M17.9399 14.62L20.4999 12.06L17.9399 9.5"
      stroke="#FEF9EF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.26 12.0601H20.43"
      stroke="#FEF9EF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.26 20C7.84001 20 4.26001 17 4.26001 12C4.26001 7 7.84001 4 12.26 4"
      stroke="#FEF9EF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LogoutIcon;
