import type { ReactNode } from 'react';

export type HelloWorldProps = {
  children?: ReactNode;
};

export function HelloWorld({ children }: HelloWorldProps) {
  return (
    <div style={{border: "1px solid red"}}>
      {children}
    </div>
  );
}
