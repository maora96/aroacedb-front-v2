import { api } from ".";
import { ILogin } from "../types";

export const login = async (body: ILogin) => {
  const data = api.post(`/admin/signin`, {
    ...body,
  });

  return data;
};

export const changePermission = async (body: {
  id: string;
  status: boolean;
}) => {
  const newToken = localStorage.getItem("token");
  const data = api.patch(
    `admin/permissions/${body.id}`,
    {
      status: body.status,
    },
    {
      headers: { Authorization: `Bearer ${newToken}` },
    }
  );

  return data;
};

export const getStats = async () => {
  const { data } = await api.get("/admin/stats");

  return data.result;
};

export const getPermissions = async () => {
  const newToken = localStorage.getItem("token");
  const { data } = await api.get("/admin/permissions", {
    headers: { Authorization: `Bearer ${newToken}` },
  });

  return data.result;
};
