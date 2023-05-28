import React from "react";

const body = document.body;

const onChangeTheme = (e:React.ChangeEvent<HTMLSelectElement>) => {
  if (e.target.value === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

const ThemeSwitcher = () => {
  return (
    <div id="themeSwitcher">
      <select name="themes" id="themes" defaultValue={"light"} onChange={onChangeTheme}>
        <option value="light">☀️ Light</option>
        <option value="dark">🌙 Dark</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
