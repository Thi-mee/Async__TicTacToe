import { redirect } from "react-router-dom";

const Loader = async () => {
  const user = await getUser();
  if (!user) {
    return redirect("/login");
  }
};

export default Loader;