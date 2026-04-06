import { useDispatch, useSelector } from "react-redux";
import { setRole } from "./roleSlice";

const RoleSwitcher = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role.role);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Role</span>
      <select
        value={role}
        onChange={(e) => dispatch(setRole(e.target.value))}
        className="border rounded-md px-2 py-1 text-sm bg-white"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
