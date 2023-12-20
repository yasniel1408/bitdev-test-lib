import type { ReactNode } from 'react';

export type HelloWorld2Props = {
  children?: ReactNode;
};

export function HelloWorld2({ children }: HelloWorld2Props) {
  return (
    <div style={{border: "1px solid blue"}}>
      {children}
    </div>
  );
}
