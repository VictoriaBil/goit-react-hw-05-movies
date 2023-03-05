import { RotatingLines } from 'react-loader-spinner';
import { LoaderSpin } from '../Loader/Loader.styled';

export const Loader = () => {
  return (
    <LoaderSpin>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderSpin>
  );
};
