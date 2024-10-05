// 'use client'
// import React from 'react';
// import type { NextPage } from 'next';
// import { Editor } from '@monaco-editor/react';
// import { PlayIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
// import useEditor, { THEMES } from '@/hooks/use-editor';

// export const ProjectEditor: NextPage = () => {
//   const {
//     editorTheme,
//     executionResult,
//     runCode,
//     handleEditorMount,
//     handleSave,
//     isChanged,
//     // isExecuting,
//     language,
//     onChange,
//     toggleTheme,
//     value,
//     clearExecutionResult,
//   } = useEditor();

//   const currentFile = {
//     name: 'index.js',
//     path_name: 'src/index.js',
//   };

//   if (!currentFile) {
//     return (
//       <div className="h-full w-full flex flex-col justify-center relative z-100 px-10 md:px-32 bg-card">
//         <h3 className="text-gray-800 font-semibold text-2xl">Select a file to edit</h3>
//         <div className="border-b border-gray-200 my-2" />
//         <div className="py-5 space-y-2">
//           <p>
//             <kbd className="bg-gray-200 text-gray-800 rounded-md py-1 px-2">cmd + p</kbd>
//             <span className="text-gray-800"> to open explorer/settings</span>
//           </p>
//           <p>
//             <kbd className="bg-gray-200 text-gray-800 rounded-md py-1 px-2">cmd + q</kbd>
//             <span className="text-gray-800"> to execute code</span>
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative flex flex-col h-full">
//       <header className="bg-card border-b border-gray-800 p-2 flex items-center justify-between">
//         <p className="text-gray-200 font-semibold text-lg">{currentFile?.name}</p>
//         <div className="space-x-2 flex items-center">
//           <button
//             type="button"
//             onClick={handleSave}
//             className="inline-flex items-center px-3 py-2 shadow-sm text-sm leading-4 font-medium text-white"
//           >
//             <span id="save-button" className="text-gray-400">
//               {isChanged ? 'Unsaved Changes' : 'Saved'}
//             </span>
//           </button>
//           <button
//             type="button"
//             onClick={toggleTheme}
//             className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
//           >
//             {editorTheme === THEMES[0] ? (
//               <MoonIcon className="h-5 w-5" aria-hidden="true" />
//             ) : (
//               <SunIcon className="h-5 w-5" aria-hidden="true" />
//             )}
//           </button>
//           <button
//             type="button"
//             // disabled={isExecuting}
//             onClick={runCode}
//             className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
//           >
//             <PlayIcon className="h-5 w-5" aria-hidden="true" />
//           </button>
//         </div>
//       </header>

//       <Editor
//         onMount={handleEditorMount}
//         theme={editorTheme}
//         path={currentFile?.path_name}
//         value={value}
//         language={language}
//         onChange={onChange}
//         options={{ mouseWheelZoom: true, minimap: { enabled: false } }}
//       />

//       {executionResult && (
//         <footer className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-2 flex flex-col w-full h-[30vh]">
//           <div className="w-full flex justify-between">
//             <p className="text-gray-200 font-semibold text-lg">Output</p>
//             <button type="button" onClick={clearExecutionResult}>
//               <XMarkIcon className="h-5 w-5 text-gray-200" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="w-full h-full overflow-y-auto mt-2">
//             <pre className="text-gray-200">{executionResult}</pre>
//           </div>
//         </footer>
//       )}
//     </div>
//   );
// };

export const ProjectEditor = () => {
  return <div>Project Editor</div>;
}