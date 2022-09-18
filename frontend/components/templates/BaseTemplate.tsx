import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
  sampleNumberProp: number;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({
  sampleTextProp,
  sampleNumberProp,
}) => {
  return (
    <div className={styles.container}>
      <h1>sampleTextProp: {sampleTextProp}</h1>
      <h2>sampleNumberProp: {sampleNumberProp}</h2>
    </div>
  );
};

export default BaseTemplate;

// @dev notes:
// React.FC<IBaseTemplate> ==> react.functional_component<props_interface>
// IBaseTemplate ==> All available props
