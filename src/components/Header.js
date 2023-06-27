export default function Header() {
  return (
    <div className="header">
      <h1>My To-do's</h1>
      <svg className="header__icon">
        <use xlinkHref="/sprite.svg#icon-layers"></use>
      </svg>
    </div>
  );
}
