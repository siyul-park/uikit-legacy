import OverridableTypeMap from './OverridableTypeMap';

type BaseProps<M extends OverridableTypeMap> = M['props'];

export default BaseProps;
