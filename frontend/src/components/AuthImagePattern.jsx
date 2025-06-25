// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-12">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/message-app-illustration-download-in-svg-png-gif-file-formats--messaging-platform-chat-application-communication-software-marketing-concept-pack-business-illustrations-9910075.png?f=webp" //  image URL
            alt="Authentication Illustration"
            className="mx-auto w-64 h-auto rounded-xl shadow-lg"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
        <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
