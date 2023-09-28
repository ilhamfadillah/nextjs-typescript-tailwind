export const Alert = ({ ...props }) => {
  // const listError = [];
  // if (props.data.length) {
  //   props.data.forEach((element: Array<T>) => {
  //     console.log(element['message']);
  //     listError.push(
  //       <div>
  //         <span className="block sm:inline">
  //           HERE
  //         </span>
  //       </div>
  //     );
  //   });
  // }

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    ></div>
  );
};
