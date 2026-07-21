
// interface ThemeState {
//     theme: light | dark;
//     toggleTheme: ()=> void;
// }

// const useThemeStore = create<ThemeSate>((set,get)=>({
//     theme:"light",

//     toggleTheme:()=> {
//         const newTheme = (get().theme === "light"? "dark" : "ligth");

//     document.documentElement.classList.toggle("dark", newTheme === "dark");

//     localStorage.setItem('theme', newTheme);
//     set({theme: newTheme})
//     },
// }))
