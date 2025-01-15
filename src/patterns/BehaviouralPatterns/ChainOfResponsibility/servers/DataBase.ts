import PermissionType from "./PermissionType";

interface IDataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DATA_BASE: IDataBaseItem[] = [
  {
    email: "mail@mail.com",
    password: "123456",
    permission: PermissionType.ADMIN,
  },
  {
    email: "mail@sambango.com",
    password: "12345678",
    permission: PermissionType.USER,
  },
  {
    email: "mail@bol.com",
    password: "xirunga",
    permission: PermissionType.USER,
  },
];

export default DATA_BASE;
