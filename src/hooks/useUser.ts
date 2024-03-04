import { useConvexAuth, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Id } from "../../convex/_generated/dataModel";

export default function useUser() {
  const store = useMutation(api.users.store);
  const [userId, setUserId] = useState<Id<"users">>();

  const { isAuthenticated } = useConvexAuth();

  useEffect(() => {
    const getUser = async () => {
      setUserId(await store());
    };
    if (isAuthenticated) getUser();
  }, [store, isAuthenticated]);

  return userId;
}
