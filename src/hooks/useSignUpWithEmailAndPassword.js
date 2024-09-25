import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useSignUpWithEmailAndPassword = () => {

  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }
    const userRef = collection(firestore, "users");
  // Query the user collection to check if the username is already taken
    const q = query(userRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("Error", "Username already taken", "error");
      return;
    }
    // Create a new user
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast("Error", error, "error");
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicUrl: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
