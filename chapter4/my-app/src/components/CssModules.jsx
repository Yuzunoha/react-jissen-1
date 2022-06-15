import classes from './CssModules.module.scss';
import { StyledJsx } from './StyledJsx';

export const CssModules = () => {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.title}>CSS Modulesです</p>
        <button className={classes.button}>ボタン</button>
      </div>
      <div>
        <StyledJsx></StyledJsx>
      </div>
    </>
  );
};
