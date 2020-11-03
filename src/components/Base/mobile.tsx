import React, { Component, useEffect } from 'react';
import Base from './base';
import './mobile.scss';

export default function Mobile({ menu }: any) {
  useEffect(() => {
    document.querySelector('.mobile_container')?.classList.add('set_height');

    return () => {
      document.querySelector('.mobile_container')?.classList.remove('set_height');
    };
  }, []);

  return (
    <div id="mobile">
      <Base menu={menu} />
    </div>
  );
}
