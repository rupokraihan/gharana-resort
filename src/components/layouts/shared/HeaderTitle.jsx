import React from 'react';

function HeaderTitle({ title }) {
  return (
    <h1 className="font-bold tracking-[4px] text-2xl mb-12 text-center uppercase">
      {title}
    </h1>
  );
}

export default HeaderTitle;
