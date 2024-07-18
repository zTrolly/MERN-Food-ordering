import {bouncy} from 'ldrs'

export const LoadingComponent = () => {
  bouncy.register('my-precious')

  const render = () => {
    // @ts-ignoreß
    return<my-precious color="rgb(249,115,22, 1)"></my-precious>

  }

  return (
    <div className="flex justify-center items-center absolute right-1/2 top-1/2">
      {render()}
    </div>
  );
}