export default function getWindow(): Window | undefined {
   if (typeof window === 'undefined' && typeof global !== 'undefined') {
      return global.window as Window;
   }
   return window;
}
