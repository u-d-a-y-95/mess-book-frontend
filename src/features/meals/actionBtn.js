import {
  ClipboardCheckIcon,
  CurrencyBangladeshiIcon,
  DocumentTextIcon,
  EyeIcon,
  LockClosedIcon,
  LockOpenIcon,
  PencilAltIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import Button from "../../components/button";

export const MealActionBtn = ({ navigate, setModal, item, profile, index }) => {
  return (
    <>
      {!item.closed && (
        <>
          <Button
            Icon={EyeIcon}
            tooltip="view"
            className="mr-2"
            onClick={(e) => {
              setModal({
                isOpen: true,
                type: "view",
                item,
              });
            }}
          />
          <Button
            Icon={PencilAltIcon}
            tooltip="edit"
            className="mr-2"
            onClick={(e) => {
              setModal({
                isOpen: true,
                type: "edit",
                item,
              });
            }}
            disabled={profile.role !== "ADMIN"}
          />
          <Button
            Icon={TrashIcon}
            tooltip="delete"
            className="mr-2"
            onClick={(e) => {
              setModal({
                isOpen: true,
                data: item,
                index,
                type: "delete",
              });
            }}
            disabled={profile.role !== "ADMIN"}
          />
          <Button
            Icon={ClipboardCheckIcon}
            tooltip="Meal Extend"
            className="mr-2"
            onClick={(e) => {
              navigate(`./${item?.id}/mealExtend`);
            }}
          />
          <Button
            Icon={CurrencyBangladeshiIcon}
            tooltip="Balance Extend"
            className="mr-2"
            onClick={(e) => {
              navigate(`./${item?.id}/balanceExtend`);
            }}
          />
          <Button
            Icon={ShoppingBagIcon}
            tooltip="Expense Extend"
            className="mr-2"
            onClick={(e) => {
              navigate(`./${item?.id}/expenseExtend`);
            }}
          />
        </>
      )}
      {item.closed && (
        <Button
          Icon={DocumentTextIcon}
          tooltip="Summary"
          className="mr-2"
          onClick={(e) => {
            setModal({
              isOpen: true,
              data: item,
              index,
              type: "summary",
            });
          }}
        />
      )}
      {profile.role === "ADMIN" && (
        <Button
          Icon={item.closed ? LockOpenIcon : LockClosedIcon}
          tooltip={item.closed ? "Open Meal" : "Close Meal"}
          onClick={(e) => {
            setModal({
              isOpen: true,
              data: item,
              index,
              type: "changestatus",
            });
          }}
        />
      )}
    </>
  );
};
