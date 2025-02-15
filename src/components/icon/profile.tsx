export default function Profile({color = "#A2A2A2"}: {color?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M19.7727 10.5454C19.7727 11.9438 19.2172 13.285 18.2284 14.2738C17.2396 15.2626 15.8984 15.8182 14.5 15.8182C13.1016 15.8182 11.7605 15.2626 10.7716 14.2738C9.78281 13.285 9.22729 11.9438 9.22729 10.5454C9.22729 9.14702 9.78281 7.80588 10.7716 6.81705C11.7605 5.82822 13.1016 5.27271 14.5 5.27271C15.8984 5.27271 17.2396 5.82822 18.2284 6.81705C19.2172 7.80588 19.7727 9.14702 19.7727 10.5454ZM17.1364 10.5454C17.1364 11.2446 16.8586 11.9152 16.3642 12.4096C15.8698 12.904 15.1992 13.1818 14.5 13.1818C13.8008 13.1818 13.1302 12.904 12.6358 12.4096C12.1414 11.9152 11.8637 11.2446 11.8637 10.5454C11.8637 9.84623 12.1414 9.17566 12.6358 8.68124C13.1302 8.18683 13.8008 7.90907 14.5 7.90907C15.1992 7.90907 15.8698 8.18683 16.3642 8.68124C16.8586 9.17566 17.1364 9.84623 17.1364 10.5454Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M14.5 0C6.49205 0 0 6.49205 0 14.5C0 22.508 6.49205 29 14.5 29C22.508 29 29 22.508 29 14.5C29 6.49205 22.508 0 14.5 0ZM2.63636 14.5C2.63636 17.255 3.57623 19.7912 5.15145 21.8054C6.25799 20.3529 7.6852 19.1758 9.32171 18.3659C10.9582 17.556 12.7597 17.1352 14.5857 17.1364C16.3881 17.1343 18.1673 17.5438 19.7874 18.3338C21.4075 19.1237 22.8259 20.2732 23.9342 21.6946C25.0764 20.1967 25.8454 18.4482 26.1776 16.5941C26.5099 14.7399 26.3958 12.8332 25.8449 11.0318C25.294 9.23048 24.3221 7.5862 23.0095 6.23505C21.6969 4.8839 20.0815 3.86472 18.2969 3.26185C16.5122 2.65898 14.6097 2.48974 12.7466 2.76815C10.8836 3.04655 9.11363 3.76458 7.5832 4.86284C6.05276 5.9611 4.80584 7.40801 3.94562 9.08385C3.0854 10.7597 2.6366 12.6163 2.63636 14.5ZM14.5 26.3636C11.7765 26.3681 9.13519 25.4311 7.02327 23.7115C7.87325 22.4943 9.00476 21.5005 10.3215 20.8147C11.6382 20.1289 13.1011 19.7714 14.5857 19.7727C16.0517 19.7714 17.4969 20.12 18.8012 20.7895C20.1055 21.4589 21.2312 22.4299 22.0848 23.6218C19.9566 25.3974 17.2717 26.368 14.5 26.3636Z"
        fill={color}
      />
    </svg>
  );
}
