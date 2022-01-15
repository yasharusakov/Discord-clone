import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function useAuthState() {
    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(true);
            setLoading(false);
        } else {
            setUser(false);
            setLoading(false);
        }
    })

    return [user, loading]
}

export default useAuthState;