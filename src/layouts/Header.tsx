import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleSidebar, toggleSidebarCollapsed } from '../store/slices/uiSlices';
import { toggleTheme } from '../store/slices/themeSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    if (window.innerWidth >= 992) {
      dispatch(toggleSidebarCollapsed());
    } else {
      dispatch(toggleSidebar());
    }
  }

  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <header className='admin-header d-flex justify-content-between'>
      <div className="expand-icon">
        <button
          type="button"
          className="expand-icon border-0 bg-transparent"
          onClick={handleToggle}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>

      <div className='d-flex align-items-center gap-3'>
        <div className="user-profile">
          <i className="bi bi-person"></i>
        </div>

        <button type='button' className='btn btn-sm btn-link mb-0' onClick={() => dispatch(toggleTheme())}>
          <i
            className={
              theme === "light"
                ? "bi bi-moon"
                : "bi bi-sun"
            }
          ></i>
        </button>
      </div>

    </header>
  )
}

export default Header