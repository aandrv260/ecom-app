import React from 'react';

type Props = {
  heading: string;

  /**
   * Put non-module styles here
   */
  className?: string;
};

const SectionHeading: React.FC<Props> = props => {
  const { heading, className } = props;

  return (
    <div className={className}>
      <h2 className="heading__secondary">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
