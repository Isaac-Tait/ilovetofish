import React from "react";

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="Isaac-Tait/comments-ilovetofish"
      repoId="R_kgDOHr1TDw"
      category="General"
      categoryId="DIC_kwDOHr1TD84CQUWk"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}