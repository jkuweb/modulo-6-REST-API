import React from 'react';
import * as classes from './app.layout.styles';
import { NavBarComponent } from '#common/components/nav-bar/nav-bar.component';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <NavBarComponent />
      <main className={classes.content}>{children}</main>
    </>
  );
};
