import React from 'react';

import OverridableTypeMap from './OverridableTypeMap';
import OverrideProps from './OverrideProps';
import DefaultComponentProps from './DefaultComponentProps';

interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      as: C;
    } & OverrideProps<M, C>,
  ): JSX.Element;
  (props: DefaultComponentProps<M>): JSX.Element;
}

export default OverridableComponent;
