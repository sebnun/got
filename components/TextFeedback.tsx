export default function TextFeedback({ children, type }: { children: React.ReactNode; type: "error" | "loading" }) {
  if (type === "error") {
    return <h1 className="text-2xl flex h-dvh justify-center items-center text-orange-600">{children}</h1>;
  }

  // TODO: add a skeleton component for better UX
  return <h1 className="text-2xl flex h-dvh justify-center items-center opacity-50">{children}</h1>;
}
