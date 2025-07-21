import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children, allowed }: { children: React.ReactNode, allowed?: number[] }) {
  const { user, profile, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) router.replace("/login");
      else if (allowed && profile && !allowed.includes(profile.user_type)) router.replace("/");
    }
  }, [user, profile, loading, allowed, router]);

  if (loading || !user || (allowed && profile && !allowed.includes(profile.user_type))) return null;
  return <>{children}</>;
} 