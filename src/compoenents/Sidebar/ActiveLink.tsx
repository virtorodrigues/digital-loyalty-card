import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  shouldMathExactHref?: boolean;
}

export function ActiveLink({ children, shouldMathExactHref = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if ((asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'red.400' : 'gray.50'
      })}
    </Link>
  )
}