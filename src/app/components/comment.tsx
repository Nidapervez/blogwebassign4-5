import Giscus from '@giscus/react';
import React from 'react';

const Comment = () => {
  return (
    <div className="flex justify-center">
      <div className="content-center w-3/4">
      <Giscus
        repo="Nidapervez/blogwebassign4-5"
        repoId="R_kgDOM-b6kQ"
        category="Q$A"
        categoryId="DIC_kwDOM-b6kc4CkqHk"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light_high_contrast"
        lang="en"
      />
      
      {/* Additional content can be added here */}
    </div></div>
  );
};

export default Comment;
