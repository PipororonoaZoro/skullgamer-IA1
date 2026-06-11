/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chat } from "./components/Chat";

export default function App() {
  return (
    <div className="bg-stone-950 min-h-screen flex items-center justify-center font-sans p-0 sm:p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-stone-950 to-stone-950 pointer-events-none"></div>
      
      <div className="w-full max-w-4xl h-[100dvh] sm:h-[85vh] rounded-none sm:rounded-3xl overflow-hidden border-0 sm:border border-stone-800 shadow-2xl relative z-10 flex flex-col bg-stone-950">
        <Chat />
      </div>
    </div>
  );
}
