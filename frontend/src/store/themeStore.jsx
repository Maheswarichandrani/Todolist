import { create } from 'zustand';

const themeStore = create((set) => ({
    theme: localStorage.getItem('theme')||'blue',
    userInfos: undefined,
    setTheme: (newTheme) => {
        set(() => {
            localStorage.setItem('theme',newTheme);
            document.documentElement.className = `theme-${newTheme}`;
            return {theme: newTheme};
        });
    },
    setUserInfo: (data) => set((state) => ({...state,userInfos: data}))
}));

export default themeStore;